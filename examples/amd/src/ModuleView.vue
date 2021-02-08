<template>
  <div id="amd-sample">
    <div>Amd</div>
    <img :src="`${modulePath}/static/dino.png`" alt="Dino Image"/>
  </div>
</template>

<script>
export default {
  name: 'ModuleView',
  props: {
    modulePath: String
  }
};
</script>

<style lang="scss" scoped>
</style>
