<template>
  <div>
    <div
        class="container"
        :style="styleVars"
    >
      <CalendarGridCell
          v-for="(date, i) in dates"
          :key="i"
          :date="date"
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
    month: {
      type: Object,
      required: true
    }
  },
  computed: {
    dates () {
      return GRID_COLUMNS * GRID_ROWS
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
  // JSと連動する値は:styleで渡す
  grid-template-columns: repeat(var(--grid-columns), 1fr);
  grid-template-rows: repeat(var(--grid-rows), 1fr);
}
</style>
