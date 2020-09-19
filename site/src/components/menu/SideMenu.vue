<template lang="pug">
  q-drawer(
    v-model="opened"
    show-if-above
    bordered
    content-class="bg-grey-1"
  )
    q-list
      q-item-label.text-grey-8(
        header
      )
        | Essential Links
      //- EssentialLink(
      //-   v-for="link in essentialLinks"
      //-   :key="link.title"
      //-   v-bind="link"
      //- )
</template>

<script>
import { RadialMenu, RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'NavMenu',
  components: { RadialMenu, RadialMenuItem },
  data () {
    return {
      opened: this.open
    }
  },
  props: {
    open: {
      type: Boolean,
      default: false
    },
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
