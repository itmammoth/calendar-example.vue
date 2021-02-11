<template>
  <div>
    <Header/>
    <SideMenu/>
    <CalendarGrid/>
  </div>
</template>

<script>
import SideMenu from "@/components/organisms/SideMenu.vue";
import CalendarGrid from "@/components/organisms/CalendarGrid.vue";
import Header from "@/components/organisms/Header.vue";

export default {
  name: "CalendarView",
  components: {
    Header,
    CalendarGrid,
    SideMenu,
  }
}
</script>

<style scoped>

</style>