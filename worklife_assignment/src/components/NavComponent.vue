<template>
  <header :class="{ 'scrolled-nav': scrollNav }">
    <nav>
      <div class="branding">
        <img
          src="https://assets-global.website-files.com/61af5d184e447e5a0cba3ff3/62581084002e1c620ccf7e22_worklife_logo_mobile.svg"
          alt=""
        />
      </div>

      <div class="icon">
        <!-- Another Icon Should go Here, change company logo later -->
        <img
          src="https://assets-global.website-files.com/61af5d184e447e5a0cba3ff3/62581084002e1c620ccf7e22_worklife_logo_mobile.svg"
          alt=""
        />
      </div>

      <transition name="mobile-nav"> </transition>
    </nav>
  </header>
</template>

<script lang="ts">
export default {
  name: 'NavComponent',
  data() {
    return {
      scrollNav: false,
      mobile: false,
      mobileNav: false,
      windowWidth: 0
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
      if (this.windowWidth <= 750) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
    }
  }
}
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.8);
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
  align-items: center;
}

.navigation {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
}

.branding > img {
  width: 50px;
  transition: 0.5s ease all;
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
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}

.icon-active {
  transform: rotate (180deg);
}

.scrolled-nav {
  background-color: #000000;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scrolled-nav > nav {
  padding: 8px, 0;
}

.scrolled-nav > nav > .branding > img {
  width: 40px;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
