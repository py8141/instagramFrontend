<template>
  <div>
    <div class="search-bar" :class="{ active: searchBarActive }" @click="toggleSearchBar">
      <input type="text" placeholder="Search..." class="search-input" v-model="searchText" @input="onSearch" />
      <div v-if="searchText || searchBarActive" class="clear-text" @click.stop="clearText">Clear</div>
    </div>
    <div class="content" :class="{ active: searchBarActive }" @click="handleClickOutside">
      <div v-for="(result, resultIndex) in search" :key="resultIndex" class="result">
        <!-- Left column with centered circle -->
        <div class="left-column">
          <div class="circle" :style="{ backgroundImage: `url(${'https://source.unsplash.com/800x600/?nature'})` }"></div>
        </div>
        <!-- Right column with user information -->
        <div class="right-column">
          <div class="user-info">
            <div class="user-name">{{ result.userName }}</div>
            <div class="name">{{ result.name }}</div>
          </div>
          <div class="bio">{{ result.bio }}</div>
        </div>
        <!-- Border line between results -->
        <div class="result-border"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import useSearchStore from '../store/search';
import debounce from 'lodash.debounce';

export default {
  setup() {
    const searchBarActive = ref(false);
    const searchText = ref("");

    const rootStore = useSearchStore();
    rootStore.FETCH_SEARCH();

    const search = computed(() => {
      return rootStore.search;
    });

    const onSearch = debounce(() => {
      rootStore.FETCH_SEARCH(searchText.value);
    }, 1000);

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
  },
};
</script>

<style scoped>
  .search-bar {
    top: 60px;
    width: 60%; /* Adjusted width to 60% */
    margin: 0 auto;
    padding: 15px;
    border-radius: 25px; /* Increased border radius for a smoother appearance */
    background-color: #f5f5f5; /* Light background color */
    position: relative;
    height: 50px;
    transition: background-color 0.3s, box-shadow 0.3s; /* Added box-shadow transition */
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Added box shadow for a lift effect */
  }

  .search-input {
    width: 70%; /* Adjusted width to 70% */
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px; /* Adjusted font size for better visibility */
    background-color: #fff; /* White background for the input */
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Added box shadow for a subtle lift effect */
  }

  .search-input::placeholder {
    color: #aaa; /* Placeholder text color */
  }

  .clear-text {
    cursor: pointer;
    color: #333; /* Clear text color */
    margin-left: 10px; /* Adjusted left margin for the "Clear" text */
  }

  .content {
    top: 300px;
    transition: background-color 0.3s;
    margin-top: 80px;
  }

  .result {
    margin-bottom: 25px;
    position: relative;
    display: flex; /* Make the result a flex container */
    transition: transform 0.3s ease; /* Added transform transition effect */
  }

  .result:hover {
    cursor: pointer;
    transform: scale(1.05); /* Scale up on hover */
  }

  .left-column {
    flex: 0 0 20%; /* 20% width for the left column */
  }

  .right-column {
    flex: 0 0 80%; /* 80% width for the right column */
    padding-left: 10px; /* Adjust padding for separation between columns */
  }

  .circle {
    width: 60px; /* Increased diameter */
    height: 60px; /* Increased diameter */
    background-color: transparent;
    border-radius: 50%; /* Make it a circle */
    margin: 0 auto; /* Center the circle within the left column */
    background-size: cover; /* Ensure the background image covers the entire circle */
    background-position: center; /* Center the background image within the circle */
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
    margin-top: 10px; /* Adjust the margin for bio */
    font-size: 15px; /* Adjust the font size for bio */
  }
</style>
