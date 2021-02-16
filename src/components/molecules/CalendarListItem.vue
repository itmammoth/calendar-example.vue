<template>
  <div>
    <label>
      <input type="checkbox" v-model="calendar.visible"/>
      {{ calendar.name }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'CalendarListItem',
  props: {
    calendar: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>