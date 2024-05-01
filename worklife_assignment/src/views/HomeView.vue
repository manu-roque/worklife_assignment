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
      <data-card
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
        <img :src="this.selectedCardData.webImage.url" alt="Card Image" class="modal-image" />
        <div>
          <div class="modal-title">
            {{ this.selectedCardData.title }}
          </div>
          <br />
          <div class="modal-description">{{ this.selectedCardData.longTitle }}</div>
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
      query: '',
      filtered: [],
      favCount: 0
    }
  },
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

      this.isModalVisible = true
    },

    filterCards() {}
  },
  beforeMount() {
    this.getAnswer()
    console.log('itemsarray: ', this.itemsArray)
  }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

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

@media (max-width: 1030px) {
  .modal-title {
    width: 90%;
    font-size: 32px;
    font-weight: bold;
    word-spacing: -2px;
  }

  .image-and-title {
    flex-direction: column;
  }

  .modal-description {
    width: 90%;
    font-size: 22px;
  }

  .modal-image {
    width: 100%;
    height: 50%;
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .load-more-btn {
    width: 70%;
    padding: 20px 20px;
  }
}

@media (max-width: 414px) {
  .modal-title {
    font-size: 22px;
    font-weight: bold;
    word-spacing: -2px;
  }

  .modal-title {
    width: 90%;
    font-size: 22px;
    font-weight: bold;
    word-spacing: -2px;
  }

  .modal-description {
    width: 90%;
    font-size: 12px;
  }
  .load-more-btn {
    width: 100%;
    padding: 20px 20px;
  }
}

@media (max-width: 375px) {
  .modal-title {
    font-size: 22px;
    font-weight: bold;
    word-spacing: -2px;
  }

  .modal-title {
    width: 90%;
    font-size: 22px;
    font-weight: bold;
    word-spacing: -2px;
  }

  .modal-description {
    width: 90%;
    font-size: 12px;
  }

  .modal-image {
    width: 60%;
    height: 40%;
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .load-more-btn {
    width: 100%;
    padding: 20px 20px;
  }
}
</style>
