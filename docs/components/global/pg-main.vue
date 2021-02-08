<template>
  <div class="pg-main">
    <div>
      <pixel-button raised accent @click="load()">Load</pixel-button>
      <pixel-button raised secondary @click="unload()">Unload</pixel-button>
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
      }
    }
  },
  computed: {
    publicPath () {
      return this.$router.options.base.slice(0, -1);
    }
  }
};
</script>

<style lang="scss" scoped>
div.pg-main {
  height: 100%;
  font-family: PixelArial;
}
</style>
