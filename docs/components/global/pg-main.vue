<template>
  <div class="pg-main">
    <div class="row">
      <label>Actions:</label>
      <button v-if="!mod" @click="load">Load</button>
      <button v-else @click="unload">Unload</button>
    </div>
    <div class="content">
      <div :id="`${name}-sample`"></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'pg-main',
  props: {
    name: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      mod: null
    };
  },
  computed: {
    publicPath () {
      return this.$router.options.base.slice(0, -1);
    }
  },
  methods: {
    load () {
      this.$modkit.load(`${this.publicPath}/modules/${this.name}/manifest.json`)
        .then(({ mod, rootPath }) => {
          this.mod = mod;
          this.mod.load({ Vue, modulePath: rootPath });
        })
        .catch((err) => {
          console.error(err);
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
div.pg-main {
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
