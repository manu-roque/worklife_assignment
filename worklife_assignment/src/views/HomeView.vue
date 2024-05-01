<template>
  <div class="main-container">
    <div class="search">
      <form @submit.prevent="filterCards">
        <input v-model="query" type="text" placeholder="Search..." name="search" />
        <button type="submit">Go</button>
      </form>
    </div>

    <div class="results">
      <data-card
        v-for="item in visibleCards"
        :key="item.id"
        :cardData="item"
        @click="openModal(item)"
      />
    </div>
    <!-- @addToFav="incFavCount" -->

    <ModalWindow :isVisible="isModalVisible" @update:isVisible="isModalVisible = $event">
      <div class="image-and-title">
        <img :src="this.selectedCardData.webImage.url" alt="Card Image" class="modal-image" />
        <div>
          <h2>
            {{ this.selectedCardData.title }}
          </h2>
          <br />
          <div>{{ this.selectedCardData.longTitle }}</div>
        </div>
      </div>
    </ModalWindow>

    <div class="load-more-container">
      <button v-if="visibleCount < itemsArray.length" @click="loadMore" class="load-more">
        Load More
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import DataCard from '../components/DataCard.vue'
import ModalWindow from '../components/ModalWindow.vue'
import { watchEffect } from 'vue'

export default {
  components: {
    DataCard,
    ModalWindow
  },
  name: 'HomeView',
  data() {
    return {
      answer: {},
      itemsArray: [],
      loadStep: 12,
      visibleCount: 12,
      isModalVisible: false,
      selectedCardData: {},
      query: '',
      filtered: [],
      favCount: 0
    }
  },
  // created() {
  //   window.addEventListener('storage', this.handleStorageChange)
  // },
  mounted() {
    this.filtered = this.itemsArray
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
    async getAnswer() {
      try {
        const { data } = await axios.get(
          'https://www.rijksmuseum.nl/api/en/collection?key=t75FdAMR&type=print&ps=40'
        )

        this.answer = data
        this.itemsArray = data.artObjects

        console.log('data: ', data)
      } catch (error) {
        console.log(error)
      }
    },
    openModal(card: any) {
      this.selectedCardData = card

      console.log('selected: ', this.selectedCardData)
      this.isModalVisible = true
    },
    filterCards() {}
    // incFavCount() {
    //   this.favCount++
    //   localStorage.setItem('favCount', this.favCount.toString())
    // },
    // handleStorageChange(event: any) {
    //   if (event.key === 'favCount') {
    //     this.incFavCount()
    //   }
    // }
  },
  beforeMount() {
    this.getAnswer()
    console.log('itemsarray: ', this.itemsArray)
  }
}
</script>

<style>
.main-container {
  position: relative;

  padding: 12px 0;
  width: 90%;
  height: auto;

  top: 90px;

  margin: 0 auto;

  /* background-color: pink; */

  @media (min-width: 1140px) {
    max-width: 1140px;
  }
}

.search {
  width: 96.5%;
  margin-left: 20px;
  border-radius: 3px;
  overflow: hidden;
}

form {
  display: flex;
  justify-content: space-between;
}

input[type='text'] {
  width: 93%;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  outline: none;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: dodgerblue;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: deepskyblue;
}

.results {
  /* position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
  height: auto;

  top: 20px; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  padding: 20px;
  margin-bottom: 30px;

  /* background: lightblue; */
}

.load-more-btn {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  /* margin: 20px auto; */
  margin: 20px 0; /* Add vertical space around the button */
  display: block;
}

.modal-image {
  width: 100px;
  height: 50%;
  margin-right: 10px;
}

.image-and-title {
  display: flex;
}

.load-more-container {
  display: flex;
  justify-content: center; /* Center the button horizontally */
  padding: 20px; /* Add padding for spacing around the button */
}
</style>
