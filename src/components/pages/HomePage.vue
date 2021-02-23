<template>
  <div>
    <CalendarView
        :today="today"
        :calendars="calendars"
    />
  </div>
</template>

<script>
import dayjs from 'dayjs'
import CalendarView from '@/components/templates/CalendarView.vue'
// import LifecycleLogger from '@/mixins/LifecycleLogger.js';
import { fetchCalendars } from '@/apis/calendar.js'

export default {
  name: 'HomePage',
  // mixins: [
  //   LifecycleLogger('HomePage')
  // ],
  components: {
    CalendarView
  },
  data () {
    return {
      today: dayjs(),
      calendars: []
    }
  },
  created () {
    fetchCalendars().then(calendars => {
      // TIPS: this.calendars配列への参照を保持している箇所があるかもしれないので、むやみにインスタンスを置き換えたりしない
      // this.calendars = calendars;
      this.calendars.splice(0, this.calendars.length, ...calendars)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
