<template>
  <div>
    <div
        class="container"
        :class="{out: !calendarDate.inCurrentMonth}"
    >
      <div>{{ formattedDate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarGridCell',
  props: {
    calendarDate: {
      type: Object,
      required: true
    }
  },
  computed: {
    dayjs () {
      return this.calendarDate.date
    },
    formattedDate () {
      return this.dayjs.date() === 1 ? this.dayjs.format('M/D') : this.dayjs.date()
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  border: 1px solid $calendar-grid-cell-border-color;

  &.out {
    background-color: $calendar-grid-cell-out-background-color;
  }
}
</style>
