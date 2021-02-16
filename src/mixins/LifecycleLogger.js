export default function (name) {
  const label = `[${name}]`
  return {
    beforeCreate() {
      console.log(`${label} beforeCreate`)
    },
    created() {
      console.log(`${label} created`)
    },
    beforeMount() {
      console.log(`${label} beforeMount`)
    },
    mounted() {
      console.log(`${label} mounted`)
    },
    beforeUpdate() {
      console.log(`${label} beforeUpdate`)
    },
    updated() {
      console.log(`${label} updated`)
    },
    activated() {
      console.log(`${label} activated`)
    },
    deactivated() {
      console.log(`${label} deactivated`)
    },
    beforeDestroy() {
      console.log(`${label} beforeDestroy`)
    },
    destroyed() {
      console.log(`${label} destroyed`)
    },
    errorCaptured(err, vm, info) {
      console.log(`${label} errorCaptured`)
      console.log(err, vm, info)
    },
    beforeRouteEnter(to, from, next) {
      console.log(`${label} beforeRouteEnter`)
      next()
    },
    beforeRouteUpdate(to, from, next) {
      console.log(`${label} beforeRouteUpdate`)
      next()
    },
    beforeRouteLeave(to, from, next) {
      console.log(`${label} beforeRouteLeave`)
      next()
    },
  }
}
