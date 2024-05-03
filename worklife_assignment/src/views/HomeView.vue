<template>
  <div class="main-container">
    <div class="search">
      <form @submit.prevent="filterCards">
        <input v-model="query" type="text" placeholder="Search..." name="search" />
        <button type="submit">Go</button>
      </form>
    </div>

    <!-- @addToFav="incFavCount" -->

    <div class="results">
      <DataCard
        v-for="item in visibleCards"
        :key="item.id"
        :cardData="item"
        @click="openModal(item)"
      />
    </div>

    <ModalWindow
      :isVisible="isModalVisible"
      :isDetailsVisible="showDetails"
      @update:isVisible="isModalVisible = $event"
      @update:isDetailsVisible="showDetails = $event"
    >
      <div class="image-and-title">
        <img :src="selectedCardData.webImage.url" alt="Card Image" class="modal-image" />
        <div>
          <div class="modal-title">
            {{ selectedCardData.title }}
          </div>
          <br />
          <div class="modal-description">{{ selectedCardData.longTitle }}</div>
        </div>
      </div>
    </ModalWindow>

    <div class="load-more-container">
      <button v-if="visibleCount < itemsArray.length" @click="loadMore" class="load-more-btn">
        Load More
      </button>
    </div>
    <transition name="slide">
      <DetailsComponent
        :selectedCard="selectedCardData"
        :isDetailsVisible="showDetails"
        @update:isDetailsVisible="showDetails = $event"
        v-if="showDetails"
        @close="showDetails = false"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import axios from 'axios'

import '../style/HomeView.css'

import DataCard from '../components/DataCard.vue'
import ModalWindow from '../components/ModalWindow.vue'
import DetailsComponent from '../components/DetailsComponent.vue'

export default {
  components: {
    DataCard,
    ModalWindow,
    DetailsComponent
  },
  name: 'HomeView',
  data() {
    return {
      answer: {},
      itemsArray: [],
      loadStep: 12,
      visibleCount: 12,
      isModalVisible: false,
      showDetails: false,
      selectedCardData: {},
      query: '', // TODO
      favCount: 0
    }
  },
  computed: {
    visibleCards() {
      return this.itemsArray.slice(0, this.visibleCount)
    }
  },
  methods: {
    loadMore() {
      this.visibleCount += this.loadStep
    },
    async getRequestAnswer() {
      try {
        const { data } = await axios.get(
          'https://www.rijksmuseum.nl/api/en/collection?key=t75FdAMR&type=print&ps=40'
        )

        this.answer = data
        this.itemsArray = data.artObjects

      } catch (error) {
        console.log(error)
      }
    },
    openModal(card: any) {
      this.selectedCardData = card
      this.isModalVisible = true
    },
    filterCards() {} // TODO
  },
  beforeMount() {
    this.getRequestAnswer()
  }
}
</script>
