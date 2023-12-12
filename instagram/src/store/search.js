import { defineStore } from "pinia";
import { ref } from "vue";

const useSearchStore = defineStore('search', () => {
    const search = ref([]);
    const FETCH_SEARCH = async (searchTerm) => {
        let uri;
        if (searchTerm === "") {
            uri = "";
        } else {
            uri = searchTerm;
        }
        const res = await fetch("/insta/search/search?text=" + uri);
        const parsedResponse = await res.json();
        search.value = parsedResponse;
    };

    return {
        FETCH_SEARCH,
        search
    };
});

export default useSearchStore;
