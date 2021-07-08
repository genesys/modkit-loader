<template>
  <div class="pg-none">
    <div class="row">
      <label>Actions:</label>
      <button v-if="!manifest" @click="load">Load</button>
      <button v-else @click="unload">Unload</button>
    </div>
    <div class="content">
      <div v-show="manifest" id="manifest-container"></div>
      <div v-show="!manifest">
        Module not loaded.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pg-none',
  data () {
    return {
      manifest: null
    };
  },
  computed: {
    publicPath () {
      return this.$router.options.base.slice(0, -1);
    }
  },
  methods: {
    load () {
      this.$modkit.load(`${this.publicPath}/modules/none/manifest.json`)
        .then((manifest) => {
          this.manifest = manifest;
          document.getElementById('manifest-container').appendChild(this.$json.format(this.manifest).render());
        })
        .catch((err) => {
          console.error(err);
        });
    },
    unload () {
      this.manifest = null;
      document.getElementById('manifest-container').innerHTML = '';
    }
  }
};
</script>

<style lang="scss">
div.pg-none {
  margin-top: 2em;
  margin-bottom: 1em;
  > div.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid var(--madoc-grey-5);
    > label {
      font-weight: bold;
      font-size: 1.5em;
    }
    > button:first-of-type {
      margin-left: auto;
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
  background-color: rgba(255, 255, 255, .05);
  border: none;
  padding: 1em 2em;
  border-top: 1px solid var(--madoc-grey-5);
  border-right: 1px solid var(--madoc-grey-5);
  color: var(--madoc-white);
  &:first-of-type {
    border-left: 1px solid var(--madoc-grey-5);
  }
  color: var(--madoc-white);
  &:hover, &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, .1);
  }
}
</style>
