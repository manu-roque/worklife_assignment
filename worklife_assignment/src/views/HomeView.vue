<template>
  <div class="main-container">
    <div class="search">
      <form>
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit">Go</button>
      </form>
    </div>

    <div class="results">
      <data-card v-for="item in itemsArray" :key="item.id" :cardData="item" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import DataCard from '../components/DataCard.vue'

export default {
  components: {
    DataCard
  },
  name: 'HomeView',
  data() {
    return {
      answer: {},
      itemsArray: []
    }
  },
  methods: {
    async getAnswer() {
      try {
        const { data } = await axios.get(
          'https://www.rijksmuseum.nl/api/en/usersets/1836065-meestermatches?key=t75FdAMR&format=json'
        )

        this.answer = data
        this.itemsArray = data.userSet.setItems

        console.log('data: ', this.itemsArray)
      } catch (error) {
        console.log(error)
      }
    }
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

  background-color: pink;

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
  position: relative;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  width: 100%;
  height: auto;

  top: 20px;

  background: lightblue;
}
</style>
