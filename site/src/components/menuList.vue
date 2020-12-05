<template lang="pug">
  q-list.main-menu(
    bordered
    separator
  )
    q-item(
      v-for="(item, index) in items"
      :key="index"
      :class="$route.path.startsWith(item.link) ? 'link-match' : ''"
      clickable
      tag="a"
      :href="item.link"
      :aria-label="item.title"
    )
      q-item-section(
        v-if="item.icon"
        avatar
      )
        q-avatar
          q-icon(
            :name="item.icon"
          )
      q-item-section
        q-item-label {{ item.title }}
      //- q-item-section(
      //-   v-if="item.external"
      //-   avatar
      //- )
      //-   q-avatar
      //-     q-icon(
      //-       name="fas fa-external-link-alt"
      //-       size="xs"
      //-     )
      q-tooltip(
        v-if="item.caption"
      ) {{ item.caption }}
</template>

<script>
export default {
  name: 'menuList',
  props: {
    items: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" scoped>
.link-match
  font-weight bold
</style>
