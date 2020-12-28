<template lang="pug">
  menu-list.main-menu(
    :items="menuItems"
  )
</template>

<script>
import menuList from '../components/menuList'
export default {
  name: 'Home',
  meta: {
    title: 'Home'
  },
  data () {
    return {
      menuItems: [
        {
          title: 'Home',
          icon: 'fas fa-shield-alt',
          link: '/'
        },
        {
          title: 'Social',
          caption: 'My social profiles',
          icon: 'fab fa-twitter',
          link: '/social'
        },
        {
          title: 'Watch',
          caption: 'Go to Twitch',
          icon: 'fab fa-twitch',
          link: 'https://twitch.tv/terahdra',
          external: true
        },
        // {
        //   title: 'About',
        //   caption: 'About me',
        //   icon: 'fas fa-user',
        //   link: '/about'
        // },
        {
          title: 'Squad',
          caption: 'Other Twitch streamers in my Squad',
          icon: 'fas fa-user-friends',
          link: 'https://www.twitch.tv/team/cephalopodsquad',
          external: true
        },
        {
          title: 'Stats',
          caption: 'Stats on the growth of my channels',
          icon: 'fas fa-chart-line',
          link: 'https://drive.google.com/file/d/1UJfyi6Puty32FqWBOFLjRCNt-oNTRHdK/view',
          external: true
        },
        {
          title: 'Merch',
          caption: 'My Merch store',
          icon: 'fas fa-shopping-bag',
          // link: 'https://shop.terahdra.com'
          link: 'https://armament-equipment.myshopify.com/',
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
