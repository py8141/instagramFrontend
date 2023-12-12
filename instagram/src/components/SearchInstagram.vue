<template>
  <div class="searchDiv">
    <div class="search-bar" :class="{ active: searchBarActive }" @click="toggleSearchBar">
      <input type="text" placeholder="Search..." class="search-input" v-model="searchText" @input="onSearch" />
      <div v-if="searchText || searchBarActive" class="clear-text" @click.stop="clearText">Clear</div>
    </div>
    <div class="content" :class="{ active: searchBarActive }" @click="handleClickOutside">
      <div v-for="(result, resultIndex) in search.slice(0,5)" :key="resultIndex" class="result">
          <div class="left-column">
            <div class="circle" :style="{ backgroundImage: `url(${'https://source.unsplash.com/800x600/?nature'})` }"></div>
          </div>
          <div class="right-column">
            <div class="user-info">
              <div class="user-name"><b>{{ result.userName }}</b></div>
              <div class="name">{{ result.name }}</div>
              <div class="bio">{{ result.bio }}</div>
            </div>
          </div>
          <div class="result-border"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import useSearchStore from '../store/search';
import debounce from 'lodash.debounce';

const setup = () => {
  const searchBarActive = ref(false);
  const searchText = ref("");

  const rootStore = useSearchStore();
  const onSearch = debounce(() => {
    rootStore.FETCH_SEARCH(searchText.value);
  }, 1000);

  const search = computed(() => rootStore.search);


  const toggleSearchBar = () => {
    searchBarActive.value = !searchBarActive.value;
  };

  const handleClickOutside = (event) => {
    if (!document.querySelector('.search-bar').contains(event.target)) {
      searchBarActive.value = false;
    }
  };

  const clearText = () => {
    searchText.value = "";
    onSearch();
  };

  onMounted(() => {
    onSearch();
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });

  return {
    searchBarActive,
    searchText,
    toggleSearchBar,
    search,
    onSearch,
    clearText,
  };
};

export default { setup };
</script>

<style scoped>

.searchDiv{
  padding-left: 170px;
}
  .search-bar {
    top: 60px;
    width: 60%;
    margin: 0 auto;
    padding: 15px;
    border-radius: 25px;
    background-color: #f5f5f5;
    position: relative;
    height: 50px;
    transition: background-color 0.3s, box-shadow 0.3s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  .search-input {
    width: 70%;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .search-input::placeholder {
    color: #aaa;
  }

  .clear-text {
    cursor: pointer;
    color: #333;
    margin-left: 10px;
  }

  .content {
    top: 300px;
    transition: background-color 0.3s;
    margin-top: 20px;
    width: 60%;
    margin: 100px auto;
    box-shadow: 0px 0px 10px rgba(255, 253, 253, 0.2);
  }

  .result {
    margin-bottom: 25px;
    border-radius: 5%;
    position: relative;
    display: flex;
    transition: transform 0.3s ease;
  }

  .result:hover {
    cursor: pointer;
    transform: scale(1.05);
  }

  .left-column {
    flex: 0 0 20%;
  }

  .right-column {
    flex: 0 0 80%;
    padding-left: 10px;
  }

  .circle {
    width: 60px;
    height: 60px;
    background-color: transparent;
    border-radius: 50%;
    margin: 0 auto;
    background-size: cover;
    background-position: center;
  }

  .result-border {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #ccc;
  }

  .user-name {
    margin: 0;
  }

  .name {
    margin: 0;
  }

  .bio {
    margin-top: 10px;
    font-size: 15px;
  }
</style>
