<template lang="pug">
  menu-list(
    :items="socialItems"
  )
</template>

<script>
import menuList from '../components/menuList'
export default {
  name: 'Social',
  meta: {
    title: 'Social'
  },
  data () {
    return {
      socialItems: [
        {
          title: 'Twitch',
          icon: 'fab fa-twitch',
          link: 'https://twitch.tv/terahdra',
          external: true
        },
        {
          title: 'Twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/terahdra',
          external: true
        },
        {
          title: 'Youtube',
          icon: 'fab fa-youtube',
          link: 'https://www.youtube.com/terahdrayt',
          external: true
        },
        {
          title: 'Discord',
          icon: 'fab fa-discord',
          link: 'https://discord.gg/6Vx5N8q',
          external: true
        }
      ]
    }
  },
  components: {
    menuList
  }
}
</script>

<style lang="stylus" scoped>
.main-menu
  width 400px
</style>
