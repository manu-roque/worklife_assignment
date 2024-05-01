<template>
  <!-- <div class="card" @mouseenter="titleDisplay = true" @mouseleave="titleDisplay = false"> -->
  <div class="card">
    <img :src="cardData.webImage.url" alt="Card Image" class="card-image" />
    <div class="card-title">
      <div>{{ cardData.title }}</div>
    </div>
    <!-- <div class="card-content">
      <div v-for="(value, key) in cardData" :key="key"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      titleDisplay: false
    }
  },
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  created() {
    // console.log('cardData', this.cardData)
  },
  methods: {
    formatKey(key) {
      return key
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .replace(/([a-z\d])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .toLowerCase()
        .replace(/^\w/, (c) => c.toUpperCase())
    }
  }
}
</script>

<style scoped>
.card {
  width: 230px;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  display: flex;
  margin-top: 20px;
  flex-direction: column;

  cursor: pointer;
}

.card-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}

.card-title {
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  text-align: center;
  z-index: 11;
  position: absolute;
  width: 100%;
  bottom: 0px;
  overflow: hidden;

  transform: translateY(100%);
  transition: all 0.2s;
}

.card:hover .card-title {
  transform: translateY(0%);
}

@media (max-width: 1090px) {
  .card-title {
    display: none;
  }
}

@media (max-width: 553px) {
  .card {
    width: 140px;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    margin-top: 20px;
    flex-direction: column;

    cursor: pointer;
  }

  .card-title {
    display: none;
  }
}
</style>
