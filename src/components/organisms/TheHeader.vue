<template>
  <header>
    <div class="container">
      <div class="left">
        <h1>calendar-example.vue</h1>
        <CalendarShiftButtons
            @shift="shiftMonth"
        />
        <div>{{ thisMonth }}</div>
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
    month: {
      type: Object,
      required: true
    }
  },
  computed: {
    thisMonth () {
      return this.month.format('YYYY年MM月')
    }
  },
  methods: {
    shiftMonth (amount) {
      this.$emit('update:month', this.month.add(amount, 'month'))
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
