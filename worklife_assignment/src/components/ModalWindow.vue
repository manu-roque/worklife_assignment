<template>
  <transition name="fade">
    <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <slot></slot>
        <div class="close-btn" @click="closeModal">&#10005;</div>

        <div class="modal-buttons">
          <button @click="addToFavourite">Add to Favourites</button>
          <button @click="openDetails">Details</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import '../style/ModalWindow.css'

import useFavorites from '@/store/useFavs'

export default defineComponent({
  setup() {
    const { incrementFavoriteCount } = useFavorites()
    return { incrementFavoriteCount }
  },
  props: {
    isVisible: Boolean,
    isDetailsVisible: Boolean
  },
  emits: ['update:isVisible', 'update:isDetailsVisible', 'handleFavs'],
  methods: {
    closeModal() {
      this.$emit('update:isVisible', false)
    },
    openDetails() {
      this.$emit('update:isDetailsVisible', true)
      console.log('test: ', this.isDetailsVisible)
      this.closeModal()
    },
    addToFavourite() {
      console.log('localstorage: ', localStorage.getItem('favCount'))
      this.incrementFavoriteCount()
      this.closeModal()
    }
  }
})
</script>
