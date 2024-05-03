import { ref } from 'vue'

const favoriteCount = ref<number>(Number(localStorage.getItem('favCount') || 0))

export function incrementFavoriteCount(): void {
  favoriteCount.value++
  localStorage.setItem('favCount', favoriteCount.value.toString())
}

export function synchronizeFavoriteCount(): void {
  favoriteCount.value = Number(localStorage.getItem('favCount') || 0)
}

export default function useFavorites() {
  return {
    favoriteCount,
    incrementFavoriteCount,
    synchronizeFavoriteCount
  }
}
