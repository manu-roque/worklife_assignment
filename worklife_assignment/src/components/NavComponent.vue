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

<style scoped>
header {
  background-color: rgba(220, 206, 206, 0.8);
  z-index: 99;
  width: 100%;
  position: fixed;

  transition: 0.5s ease all;
  color: white;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 90%;
  margin: 0 auto;
  @media (min-width: 1140px) {
    max-width: 1140px;
  }
}

.branding {
  display: flex;
  height: 50px;
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.branding > img {
  width: 100%;
  height: 30px;
}

.icon {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 24px;
  height: 100%;
}

.icon > i {
  font-size: 55px;
  position: relative;
  color: rgb(249, 102, 102);
}

.fav-number {
  position: absolute;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  font-size: 18px;
  color: rgb(249, 102, 102);
}

.scrolled-nav {
  background-color: #d3d3b2;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav > nav {
  padding: 8px, 0;
}

@media (max-width: 1030px) {
  .branding > img {
    width: 100%;
    height: 50px;
    transition: 0.5s ease all;
  }

  .icon {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0px;
    height: 100%;
  }

  .icon > i {
    font-size: 50px;
    position: relative;
    color: rgb(249, 102, 102);
  }

  .fav-number {
    position: absolute;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    font-size: 14px;
    color: rgb(249, 102, 102);
  }
}
</style>
