<template lang="pug">
  q-layout(
    view="lHh Lpr lFf"
  )
    q-header(
      reveal
      elevated
    )
      q-toolbar
        q-btn(
          v-if="$route.path !== '/'"
          flat
          dense
          round
          icon="fas fa-chevron-circle-left"
          aria-label="Home"
          to="/"
        )
        //- q-btn(
        //-   flat
        //-   dense
        //-   round
        //-   icon="fas fa-bars"
        //-   aria-label="Menu"
        //-   @click="burgerClick"
        //- )
        q-toolbar-title
          | Terahdra's Armament
      //- q-toolbar test
    .fixed-bottom-right.text-caption.q-pa-xs.text-grey-5(
      style="z-index:1"
    ) {{ getVersion() }}
    q-page-container.row.justify-center.full-width.full-height
      router-view
    //- side-menu(
    //-   v-model="sideMenuOpen"
    //-   :menu-items="menuItems"
    //- )
    //- radial-menu-modal(
    //-   v-model="radialOpen"
    //-   :menu-items="menuItems"
    //- )
</template>

<script>
// import radialmenumodal from '../components/menu/RadialMenuModal'
// import sidemenu from '../components/menu/SideMenu'

export default {
  name: 'MainLayout',
  components: {
    // RadialMenuModal: radialmenumodal,
    // SideMenu: sidemenu
  },
  meta: {
    titleTemplate: title => `Terahdra's Armament | ${title}`
  },
  data () {
    return {
      radialOpen: false,
      sideMenuOpen: false
    }
  },
  computed: {
    breadcrumbs () {
      // $route.path
      return []
    }
  },
  methods: {
    // burgerClick () {
    //   // Shield nav
    //   if (this.$q.screen.gt.sm) {
    //     this.radialOpen = !this.radialOpen
    //     this.sideMenuOpen = false
    //   } else { // Burger bar nav
    //     this.sideMenuOpen = !this.sideMenuOpen
    //     this.radialOpen = false
    //   }
    // },
    getVersion () {
      return process.env.version || 'Dev'
    }
  }
}
</script>
