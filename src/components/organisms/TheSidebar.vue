<template>
  <div>
    <CalendarList
        :calendars="calendars"
    />
  </div>
</template>

<script>
import CalendarList from '@/components/organisms/CalendarList.vue';
// import LifecycleLogger from '@/mixins/LifecycleLogger.js';

export default {
  name: 'TheSidebar',
  // mixins: [
  //   LifecycleLogger('TheSidebar'),
  // ],
  components: { CalendarList },
  props: {
    calendars: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>