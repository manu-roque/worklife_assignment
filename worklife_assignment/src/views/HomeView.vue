<template>
  <div class="main-container">
    <div class="search">
      <form>
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit">Go</button>
      </form>
    </div>

    <div class="results"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'HomeView'
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

  width: 100%;
  height: 200px;

  top: 20px;

  background: lightblue;
}
</style>
