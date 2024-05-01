// useFavorites.ts
import { ref } from 'vue'

// Initialize the favorite count from localStorage or default to 0
const favoriteCount = ref<number>(Number(localStorage.getItem('favCount') || 0))

// Function to increment the favorite count and update localStorage
export function incrementFavoriteCount(): void {
  favoriteCount.value++
  localStorage.setItem('favCount', favoriteCount.value.toString())
}

// Function to directly set the favorite count from local storage (for synchronization)
export function synchronizeFavoriteCount(): void {
  favoriteCount.value = Number(localStorage.getItem('favCount') || 0)
}

// Export the reactive favorite count so it can be used in components
export default function useFavorites() {
  return {
    favoriteCount,
    incrementFavoriteCount,
    synchronizeFavoriteCount
  }
}
