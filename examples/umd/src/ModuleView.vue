<template>
  <div id="umd-sample">
    <div class="container">
      <div class="date">{{ text }}</div>
      <div class="slot">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import dayjs_plugin_calendar from 'dayjs/plugin/calendar';
dayjs.extend(dayjs_plugin_calendar);
const config = {
  sameDay: '[Updated Today at] h:mm A',
  nextDay: '[Updated Tomorrow]',
  nextWeek: '[Updated] dddd',
  lastDay: '[Updated Yesterday]',
  lastWeek: '[Last] dddd',
  sameElse: '[Updated on] DD/MM/YYYY'
};
export default {
  name: 'ModuleView',
  props: {
    updatedDate: String
  },
  computed: {
    text () {
      return dayjs(this.updatedDate).calendar(null, config);
    }
  }
};
</script>

<style lang="scss" scoped>
div#umd-sample {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  > div.container {
    display: flex;
    flex-direction: column;
    > div.date {
      padding-top: 1em;
      padding-right: 1em;
      color: var(--madoc-github-grey-2);
    }
    > div.slot {

    }
  }
}
</style>
