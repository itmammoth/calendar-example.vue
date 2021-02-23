<template>
  <button @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    click (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
