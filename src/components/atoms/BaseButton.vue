<template>
  <span>
    <button class="container" @click="click">
      <slot></slot>
    </button>
  </span>
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
.container:hover {
  cursor: pointer;
}
</style>
