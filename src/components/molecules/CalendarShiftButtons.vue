<template>
  <div>
    <ShiftLeftButton
        @click="clickLeft"
    />
    <ShiftRightButton
        @click="clickRight"
    />
  </div>
</template>

<script>
import ShiftLeftButton from '@/components/atoms/ShiftLeftButton.vue'
import ShiftRightButton from '@/components/atoms/ShiftRightButton.vue'

export default {
  name: 'CalendarShiftButtons',
  components: { ShiftRightButton, ShiftLeftButton },
  methods: {
    clickLeft () {
      this.$emit('shift', -1)
    },
    clickRight () {
      this.$emit('shift', +1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
