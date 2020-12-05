<template lang="pug">
  radial-menu(
    style="margin: auto; margin-top: 300px; background-color: white"
    :item-size="50"
    :radius="250"
    :angle-restriction="360"
  )
    radial-menu-item(
      v-for="(item, index) in menuItems"
      :key="index"
      style="background-color: white"
    )
      q-btn(
        :icon="item.icon"
        @click="$router.push(item.link)"
        flat
        dense
        round
        no-caps
      )
        | {{ item.title }}
        q-tooltip
          | {{ item.caption }}
</template>

<script>
import { RadialMenu, RadialMenuItem } from 'vue-radial-menu'

export default {
  name: 'NavMenu',
  components: { RadialMenu, RadialMenuItem },
  props: {
    value: {
      type: Boolean
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
