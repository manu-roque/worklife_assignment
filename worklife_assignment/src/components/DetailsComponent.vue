<template>
  <div class="details">
    <div class="details-container">
      <button @click="closeDetails">BACK</button>
      <div class="details-elements">
        <img :src="selectedCard!.webImage.url" />
        <div class="text-section">
          <div class="title-text">{{ selectedCard!.title }}</div>
          <div class="description-text">{{ selectedCard!.longTitle }}</div>
        </div>
      </div>
      <button class="add-to-fav" @click="addToFavourite">Add to Fav</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFavorites from '@/store/useFavs'

import '../style/DetailsComponent.css'

export default defineComponent({
  setup() {
    const { incrementFavoriteCount } = useFavorites()
    return { incrementFavoriteCount }
  },
  props: {
    selectedCard: {
      type: Object
    },
    isDetailsVisible: Boolean
  },
  emits: ['update:isDetailsVisible'],
  methods: {
    closeDetails() {
      this.$emit('update:isDetailsVisible', false)
    },
    addToFavourite() {
      console.log('localstorage: ', localStorage.getItem('favCount'))
      this.incrementFavoriteCount()
      this.closeDetails()
    }
  }
})
</script>
