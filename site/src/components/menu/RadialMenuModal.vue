<template lang="pug">
  radial-menu(
    :menu-items="menuItems"
  )
</template>

<script>
import RadialMenu from './RadialMenu'
export default {
  name: 'NavMenu',
  components: { RadialMenu },
  props: {
    menuItems: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="stylus">
.vue-radial-menu-item
  box-shadow none
</style>
