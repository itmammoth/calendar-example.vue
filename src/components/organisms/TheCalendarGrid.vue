<template>
  <div>
    <div
        class="container"
        :style="styleVars"
    >
      <CalendarGridCell
          v-for="(calendarDate, i) in calendarDates"
          :key="i"
          :calendarDate="calendarDate"
      />
    </div>
  </div>
</template>

<script>
import CalendarGridCell from '@/components/organisms/CalendarGridCell.vue'

const GRID_COLUMNS = 7
const GRID_ROWS = 6

export default {
  name: 'TheCalendarGrid',
  components: { CalendarGridCell },
  props: {
    beginningOfMonth: {
      type: Object,
      required: true
    }
  },
  computed: {
    endOfMonth () {
      return this.beginningOfMonth.endOf('month')
    },
    calendarDates () {
      const dates = []
      // 前月分
      const dateCountInPreviousMonth = this.beginningOfMonth.day() > 0 ? this.beginningOfMonth.day() : 7
      for (let i = dateCountInPreviousMonth; i > 0; i--) {
        dates.push({ date: this.beginningOfMonth.add(-i, 'day'), isCurrentMonth: false })
      }
      // 当月分
      for (let i = 0; i < this.endOfMonth.date(); i++) {
        dates.push({ date: this.beginningOfMonth.add(i, 'day'), inCurrentMonth: true })
      }
      // 翌月分
      for (let i = 0; dates.length < GRID_COLUMNS * GRID_ROWS; i++) {
        dates.push({ date: this.endOfMonth.add(1 + i, 'day'), inCurrentMonth: false })
      }
      return dates
    },
    styleVars () {
      return {
        '--grid-columns': GRID_COLUMNS,
        '--grid-rows': GRID_ROWS
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  height: 100%;
  // TIPS: JSと連動する値は:styleで渡す
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-template-rows: repeat(var(--grid-rows), 1fr);
}
</style>
