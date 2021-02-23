<template>
  <header>
    <div class="container">
      <div class="left">
        <h1>calendar-example.vue</h1>
        <div>←</div>
        <div>→</div>
        <div>{{ thisMonth }}</div>
      </div>
      <div class="right">
        <a href="https://github.com/itmammoth/calendar-example.vue">github</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    today: {
      type: Object,
      required: true
    }
  },
  computed: {
    thisMonth () {
      return this.today.format('YYYY年MM月')
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
