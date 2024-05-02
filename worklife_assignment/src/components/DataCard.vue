<template>
  <div class="card">
    <img :src="cardData.webImage.url" alt="Card Image" class="card-image" />
    <div class="card-title">
      <div>{{ cardData.title }}</div>
    </div>
  </div>
</template>

<script>
import '../style/DataCard.css'

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
  }
}
</script>
