<template>
  <div id="esm-sample">
    <component :is="umdView">
      <a class="badge" href="https://www.genesys.com/"><Badge/></a>
    </component>
  </div>
</template>

<script>
import Badge from './Badge.vue';
export default {
  name: 'ModuleView',
  components: {
    Badge
  },
  props: {
    umdView: {
      type: Object,
      default: () => { return null; }
    }
  }
};
</script>

<style lang="scss" scoped>
div#esm-sample {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  a.badge {
    justify-content: flex-end;
    display: flex;
    padding-right: 1em;
    margin-top: 5px;
  }
}
</style>
