<template>
  <BaseButton
      @click="click"
  >
    <template #default>◀</template>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/atoms/BaseButton.vue'

export default {
  name: 'ShiftLeftButton',
  components: { BaseButton },
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
