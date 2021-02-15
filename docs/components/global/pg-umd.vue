<template>
  <div class="pg-umd">
    <div class="row">
      <button v-if="!dayjs" @click="loadDayjs">Load DayJS</button>
      <button v-if="!mod" @click="loadRefManifest">Load #1</button>
      <button v-if="!mod" @click="loadCdnManifest">Load #2</button>
      <button v-else @click="unload">Unload</button>
    </div>
    <div v-if="log" class="row log" v-html="log"></div>
    <div class="content">
      <div id="umd-sample"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'pg-umd',
  props: {
    name: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      dayjs: false,
      mod: null,
      log: ''
    };
  },
  computed: {
    publicPath () {
      return this.$router.options.base.slice(0, -1);
    },
    updatedDate () {
      return process.env.updatedDate;
    }
  },
  methods: {
    loadDayjs () {
      const script1 = document.createElement('script');
      script1.type = 'text/javascript';
      script1.src = 'https://unpkg.com/dayjs@1.8.21/dayjs.min.js';
      document.head.appendChild(script1);
      const script2 = document.createElement('script');
      script2.type = 'text/javascript';
      script2.src = 'https://unpkg.com/dayjs@1.8.21/plugin/calendar.js';
      document.head.appendChild(script2);
      this.dayjs = true;
    },
    loadRefManifest () {
      this.load(`${this.publicPath}/modules/umd/manifest.ref.json`);
    },
    loadCdnManifest () {
      this.load(`${this.publicPath}/modules/umd/manifest.cdn.json`);
    },
    load (url) {
      this.$modkit.load(url)
        .then(({ mod }) => {
          this.log = '';
          this.mod = mod;
          this.mod.load({ Vue, updatedDate: this.updatedDate });
          this.dayjs = true;
        })
        .catch((err) => {
          console.error(err);
          this.log = err.toString();
        });
    },
    unload () {
      if (this.mod) {
        this.mod.unload();
        this.mod = null;
      }
    }
  }
};
</script>

<style lang="scss">
div.pg-umd {
  margin-bottom: 1em;
  > div.row {
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid var(--madoc-grey-5);
    &.log {
      padding: 1em 2em;
    }
  }
  & ~ * {
    max-width: 60%;
    min-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
}
button {
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 1em 2em;
  border-right: 1px solid var(--madoc-grey-5);
  border-bottom: 2px solid var(--madoc-light-orange);
  color: var(--madoc-white);
  &:hover, &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, .1);
  }
}
</style>
