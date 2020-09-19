<template lang="pug">
  q-layout(
    view="lHh Lpr lFf"
  )
    q-header(
      elevated
    )
      q-toolbar
        q-btn(
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="burgerClick"
        )
        q-toolbar-title
          | Quasar App
    .fixed-bottom-right.text-caption.q-pa-xs.text-grey-5(
      style="z-index:1"
    ) {{getVersion()}}
    q-page-container
      router-view
    side-menu(
      :menu-items="menuItems"
    )
    radial-menu-modal(
      :menu-items="menuItems"
    )
</template>

<script>
import radialmenumodal from '../components/menu/RadialMenuModal'
import sidemenu from '../components/menu/SideMenu'

export default {
  name: 'MainLayout',
  components: {
    RadialMenuModal: radialmenumodal,
    SideMenu: sidemenu
  },
  data () {
    return {
      radialOpen: false,
      sideMenuOpen: false,
      menuItems: [
        {
          title: 'Home',
          caption: 'Home',
          icon: 'fas fa-shield-alt',
          link: '/'
        },
        {
          title: 'Watch',
          caption: 'Go to Twitch',
          icon: 'fas fa-tv',
          link: 'https://twitch.tv/terahdra'
        },
        {
          title: 'Social',
          caption: 'forum.quasar.dev',
          icon: 'fab fa-twitter',
          link: '/social'
        },
        {
          title: 'About',
          caption: '@QuasarFramework',
          icon: 'fas fa-user',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Stats',
          caption: '@QuasarFramework',
          icon: 'fas fa-chart-line',
          link: 'https://facebook.quasar.dev'
        },
        {
          title: 'Squad',
          caption: 'chat.quasar.dev',
          icon: 'fas fa-user-friends',
          link: '/squad'
        },
        {
          title: 'Merch',
          caption: 'Community Quasar projects',
          icon: 'fas fa-shopping-bag',
          link: 'https://awesome.quasar.dev'
        }
      ]
    }
  },
  methods: {
    burgerClick () {
      // Shield nav
      if (this.$q.screen.gt.sm) {
        this.radialOpen = !this.radialOpen
      } else { // Burger bar nav
        this.sideMenuOpen = !this.sideMenuOpen
      }
    },
    getVersion () {
      return process.env.version || 'Dev'
    }
  }
}
</script>
