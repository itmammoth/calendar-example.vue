<template>
  <div>
    <div class="container">
      <TheHeader
          :month.sync="month"
          class="header"
      />
      <div class="content">
        <TheSidebar
            :calendars="calendars"
            class="sidebar"
        />
        <TheCalendarGrid
            :month="month"
            class="calendar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import TheHeader from '@/components/organisms/TheHeader.vue'
import TheSidebar from '@/components/organisms/TheSidebar.vue'
import TheCalendarGrid from '@/components/organisms/TheCalendarGrid.vue'
// import LifecycleLogger from '@/mixins/LifecycleLogger.js'

export default {
  name: 'CalendarView',
  // mixins: [
  //   LifecycleLogger('CalendarView')
  // ],
  components: {
    TheSidebar,
    TheHeader,
    TheCalendarGrid
  },
  props: {
    calendars: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      month: dayjs().startOf('month')
    }
  }
}
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
