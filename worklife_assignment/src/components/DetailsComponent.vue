<template>
  <div class="details">
    <div class="details-container">
      <button @click="closeDetails">BACK</button>
      <div class="details-elements">
        <img :src="selectedCard.webImage.url" />
        <div class="text-section">
          <div class="title-text">{{ selectedCard.title }}</div>
          <div class="description-text">{{ selectedCard.longTitle }}</div>
        </div>
      </div>
      <button class="add-to-fav" @click="addToFavourite">Add to Fav</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useFavorites from '@/store/useFavs'

export default defineComponent({
  setup() {
    const { incrementFavoriteCount } = useFavorites()
    return { incrementFavoriteCount }
  },
  props: {
    selectedCard: {},
    isDetailsVisible: Boolean
  },
  created() {
    console.log('cardData', this.selectedCard)
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

<style scoped>
.details {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  overflow: hidden;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.details-container {
  position: relative;

  margin: 0 auto;

  width: 80%;
  height: auto;

  top: 70px;
}

.details-elements {
  display: flex;
  margin-top: 20px;
}

.title-text {
  font-size: 32px;
  font-weight: bold;
  word-spacing: -2px;

  margin-bottom: 10px;
}

.add-to-fav {
  position: relative;

  margin: 0 auto;
  display: block;

  margin-top: 20px;
  width: 200px;
}

img {
  width: 50%;
  height: 30%;

  margin-right: 20px;
}

/* @media (max-width: 768px) {

} */

@media (max-width: 414px) {
  .details-elements {
    display: block;
    margin-top: 20px;
  }

  img {
    width: 100%;
    height: 30%;

    margin-right: 20px;
  }

  .title-text {
    font-size: 22px;
    font-weight: bold;
    word-spacing: -2px;

    margin-bottom: 10px;
    margin-top: 10px;
  }
}
</style>
