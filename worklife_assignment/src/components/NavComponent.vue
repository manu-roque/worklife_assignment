<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <div class="branding">
        <img
          id="logo"
          src="https://assets-global.website-files.com/61af5d184e447e5a0cba3ff3/61af67929d99f1401ab23852_logo.svg"
          alt=""
        />
      </div>

      <div class="icon">
        <!-- Another Icon Should go Here, change company logo later -->
        <div class="fav-number">{{ favoriteCount }}</div>

        <i class="fa-regular fa-heart"> </i>
      </div>

      <transition name="mobile-nav"> </transition>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'

import '../style/NavComponent.css'

import useFavorites from '@/store/useFavs'

export default defineComponent({
  setup() {
    const { favoriteCount, synchronizeFavoriteCount } = useFavorites()

    function handleStorageEvent(event: StorageEvent) {
      if (event.key === 'favoriteCount') {
        synchronizeFavoriteCount()
      }
    }

    onMounted(() => {
      window.addEventListener('storage', handleStorageEvent)
    })

    onUnmounted(() => {
      window.removeEventListener('storage', handleStorageEvent)
    })

    return { favoriteCount }
  },
  name: 'NavComponent',
  data() {
    return {
      scrollNav: false,
      mobile: false,
      mobileNav: false,
      windowWidth: 0,
      favCount: 0
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    updateScroll() {
      const scrollPos = window.scrollY
      if (scrollPos > 50) {
        this.scrollNav = true
        return
      }
      this.scrollNav = false
    },
    checkScreen() {
      this.windowWidth = window.innerWidth
      const imgElement = document.getElementById('logo')

      if (this.windowWidth <= 1030) {
        this.mobile = true
        imgElement.src =
          'https://assets-global.website-files.com/61af5d184e447e5a0cba3ff3/62581084002e1c620ccf7e22_worklife_logo_mobile.svg'
        return
      }
      imgElement.src =
        'https://assets-global.website-files.com/61af5d184e447e5a0cba3ff3/61af67929d99f1401ab23852_logo.svg'
      this.mobile = false
      this.mobileNav = false
    },

    updateFavCount() {}
  }
})
</script>
