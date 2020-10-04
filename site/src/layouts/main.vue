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
          | Terahdra's Armament
    .fixed-bottom-right.text-caption.q-pa-xs.text-grey-5(
      style="z-index:1"
    ) {{getVersion()}}
    q-page-container
      router-view
    side-menu(
      v-model="sideMenuOpen"
      :menu-items="menuItems"
    )
    radial-menu-modal(
      v-model="radialOpen"
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
          link: 'https://twitch.tv/terahdra',
          external: true
        },
        {
          title: 'Social',
          caption: 'Other social profiles',
          icon: 'fab fa-twitter',
          link: '/social'
        },
        {
          title: 'About',
          caption: 'About me',
          icon: 'fas fa-user',
          link: '/about'
        },
        {
          title: 'Stats',
          caption: 'Cool stats',
          icon: 'fas fa-chart-line',
          link: '/stats'
        },
        {
          title: 'Squad',
          caption: 'Other Twitch streamers in my Squad',
          icon: 'fas fa-user-friends',
          link: 'https://www.twitch.tv/team/cephalopodsquad',
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
  methods: {
    burgerClick () {
      // Shield nav
      if (this.$q.screen.gt.sm) {
        this.radialOpen = !this.radialOpen
        this.sideMenuOpen = false
      } else { // Burger bar nav
        this.sideMenuOpen = !this.sideMenuOpen
        this.radialOpen = false
      }
    },
    getVersion () {
      return process.env.version || 'Dev'
    }
  }
}
</script>
