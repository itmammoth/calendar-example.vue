<template>
  <div>
    <div class="container">
      <div v-for="n in 31" :key="n">
        {{ n }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CalendarGrid',
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
}
</style>