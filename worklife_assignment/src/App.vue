<script setup lang="ts">
import NavComponent from './components/NavComponent.vue'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <div class="wrapper">
    <NavComponent />
    <HomeView />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;5007display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}

body {
  background-color: #f1f1f1;
}

.wrapper {
  min-height: 100vh;
  height: auto;
  position: relative;
}
</style>
