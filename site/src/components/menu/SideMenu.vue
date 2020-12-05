<template lang="pug">
  q-drawer(
    :value="value"
    @input="input"
    show-if-above
    bordered
    content-class="bg-grey-1"
  )
    q-list
      q-item-label.text-grey-8(
        header
      ) Terahdra's Armament
      q-item(
        v-for="(link, index) in menuItems"
        :class="$route.path.startsWith(link.link) ? 'link-match' : ''"
        :key="index"
        tag="a"
        :href="link.link"
        clickable
      )
        q-item-section(
          avatar
        )
          q-icon(
            :name="link.icon"
          )
        q-item-section
          q-item-label
            | {{ link.title }}
          q-item-label(
            caption
          )
            | {{ link.caption }}
        q-item-section(
          v-if="link.external"
          avatar
        )
          q-icon(
            name="fas fa-link"
            size="xs"
          )
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
  },
  methods: {
    input (opened) {
      this.$emit('input', opened)
    }
  },
  mounted () {
    console.log('this.$route :', this.$route)
  }
}
</script>

<style lang="stylus">
.vue-radial-menu-item
  box-shadow none
.link-match
  font-weight bold
</style>
