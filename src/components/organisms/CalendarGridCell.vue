<template>
  <div>{{ date }}</div>
</template>

<script>
export default {
  name: 'CalendarGridCell',
  props: {
    date: {
      // type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
