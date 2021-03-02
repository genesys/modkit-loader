<template>
  <div id="system-sample">
    <h2>Persons</h2>
    <table class="center">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Picture</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people" :key="person.id">
          <td>{{ person.firstname }}</td> 
          <td>{{ person.lastname }}</td>  
          <td><img class='people-img' :src="`${modulePath}/static/${person.picture}`" alt="person.firstname"/></td>
        </tr>
      </tbody>
    </table>
    <div>
      <button class="random-persons-button" @click='buttonClicked'>Random persons</button>
    </div>
    <div v-if='ratelimitedMessage'> {{ ratelimitedMessage}}</div>
  </div>
</template>

<script>
import * as Mollitia from 'mollitia';
export default {
  name: 'ModuleView',
  props: {
    modulePath: {
      type: String
    },
    men: {
      type: Array,
      default: () => []
    },
    women: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      people: [],
      ratelimitedMessage: '',
      circuit: null,
      ratelimitModule: null
    }
  },
  created() {
    this.ratelimitModule = new Mollitia.Ratelimit({
      name: 'RateLimit',
      logger: console,
      limitPeriod: 10000,
      limitForPeriod: 2
    });
    this.circuit = new Mollitia.Circuit({
      name:'myCircuit',
      options: {
        modules: [
          this.ratelimitModule
        ]
      }
    });
  },
  methods: {
    buttonClicked() {
      this.circuit.fn(this.randomPersons).execute()
        .then(data => {
          this.people = data;
          this.ratelimitedMessage = '';
        })
        .catch(e => {
          if (e instanceof Mollitia.RatelimitError) {
            this.ratelimitedMessage = `You are Rate Limited, you will be able to see other random persons in ${Math.ceil(e.remainingTimeInRatelimit / 1000)}s`;
          }
        });
    },
    randomPersons() {
      return new Promise((resolve) => {
        let rndNum = Math.floor(Math.random() * 9);
        let persons = []
        persons.push(this.men[rndNum]);
        persons.push(this.women[rndNum]);
        resolve(persons);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.center {
  text-align: center;
}
.people-img {
  width: 200px;
}
.random-persons-button {
  margin-top: 10px;
}
</style>
