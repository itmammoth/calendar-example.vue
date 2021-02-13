<template>
  <header>
    <div class="container">
      <div class="left">
        <h1>calendar-example.vue</h1>
        <div>←</div>
        <div>→</div>
        <div>2021年2月</div>
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