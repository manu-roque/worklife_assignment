<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <slot></slot>
      <div class="close-btn" @click="closeModal">&#10005;</div>

      <div class="modal-buttons">
        <button @click="incrementFavoriteCount">Add to Favourites</button>
        <button @click="closeModal">Details</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import useFavorites from '@/store/useFavs'

export default defineComponent({
  setup() {
    const { incrementFavoriteCount } = useFavorites()
    return { incrementFavoriteCount }
  },
  props: {
    isVisible: Boolean
  },
  methods: {
    closeModal() {
      this.$emit('update:isVisible', false)
    },
    addToFavourite() {
      console.log('localstorage: ', localStorage.getItem('favCount'))
      // this.$emit('addToFav')
      this.$emit('update:isVisible', false)
    }
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: white;
  position: relative;
  padding: 20px;
  border-radius: 8px;

  height: auto;
  width: 450px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.close-btn {
  position: absolute;
  right: 15px;
  top: 10px;
  font-size: 24px;
  border: none;
  background: none;
  cursor: pointer;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.modal-buttons button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  flex: 1; /* Ensure buttons take equal width */
  margin: 30px 10px;
}

@media (max-width: 768px) {
  /* Adjusts for tablet and smaller devices */
  .modal-overlay {
    align-items: flex-end;
  }
  .modal-content {
    width: 90%; /* Makes the modal full-width on smaller screens */
    height: 35%; /* Adjust height as needed */
  }
}
</style>
