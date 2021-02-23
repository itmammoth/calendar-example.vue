<template>
  <header>
    <div class="container">
      <div class="left">
        <h1>calendar-example.vue</h1>
        <CalendarShiftButtons
            @shift="shiftMonth"
        />
        <div>{{ currentMonth }}</div>
      </div>
      <div class="right">
        <a href="https://github.com/itmammoth/calendar-example.vue">github</a>
      </div>
    </div>
  </header>
</template>

<script>
import CalendarShiftButtons from '@/components/molecules/CalendarShiftButtons.vue'

export default {
  name: 'TheHeader',
  components: { CalendarShiftButtons },
  props: {
    beginningOfMonth: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentMonth () {
      return this.beginningOfMonth.format('YYYY年MM月')
    }
  },
  methods: {
    shiftMonth (amount) {
      this.$emit('update:beginningOfMonth', this.beginningOfMonth.add(amount, 'month'))
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
}

.right {
  display: flex;
}
</style>
