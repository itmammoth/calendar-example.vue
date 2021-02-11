<template>
  <div>
    <TheHeader/>
    <TheSidebar/>
    <CalendarGrid/>
  </div>
</template>

<script>
import TheHeader from "@/components/organisms/TheHeader.vue";
import TheSidebar from "@/components/organisms/TheSidebar.vue";
import CalendarGrid from "@/components/organisms/CalendarGrid.vue";

export default {
  name: 'CalendarView',
  components: {
    TheSidebar,
    TheHeader,
    CalendarGrid,
  },
}
</script>

<style lang="scss" scoped>
</style>