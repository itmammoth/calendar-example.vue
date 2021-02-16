<template>
  <div>
    <div class="container">
      <TheHeader class="header"/>
      <div class="content">
        <TheSidebar
            class="sidebar"
            :calendars="calendars"
        />
        <CalendarGrid class="calendar"/>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/organisms/TheHeader.vue';
import TheSidebar from '@/components/organisms/TheSidebar.vue';
import CalendarGrid from '@/components/organisms/CalendarGrid.vue';
// import LifecycleLogger from '@/mixins/LifecycleLogger.js';

export default {
  name: 'CalendarView',
  // mixins: [
  //   LifecycleLogger('CalendarView'),
  // ],
  components: {
    TheSidebar,
    TheHeader,
    CalendarGrid,
  },
  props: {
    calendars: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
$h-padding: 8px;

.container {
  display: grid;
  grid-template-areas:
      "header"
      "content";
  grid-auto-rows: auto 1fr;
  height: 100vh;
}

.header {
  grid: "header";
  padding: 0 $h-padding;
}

.content {
  grid: "content";
  display: flex;
  padding: 0 $h-padding;
}

.sidebar {
}

.calendar {
  flex-grow: 1;
}
</style>