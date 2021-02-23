<template>
  <div>
    <div>カレンダー</div>
    <CalendarListItem
        v-for="calendar in calendars"
        :key="calendar.id"
        :calendar="calendar"
    >
    </CalendarListItem>
  </div>
</template>

<script>
import CalendarListItem from '@/components/molecules/CalendarListItem.vue'

export default {
  name: 'CalendarList',
  components: { CalendarListItem },
  props: {
    calendars: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
