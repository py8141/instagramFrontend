import { defineStore } from "pinia";
import {  ref } from "vue";
 
const useSearchStore = defineStore('search', () => {
    const search = ref({});
    const FETCH_SEARCH = async (searchTerm) => {
        // const uri = searchTerm ? `{searchTearm}`:"";
        const res = await fetch("/insta/search?text=" + searchTerm);
        const parsedResponse = await res.json();
        search.value = parsedResponse
    };
  
    return {
        FETCH_SEARCH,
        search
    };
});
 
export default useSearchStore;











// const useRootStore = defineStore('product', () => {
//     // Use ref instead of reactive for a simpler setup
//     const products = ref({});
  
//     const FETCH_PRODUCTS = async (searchTerm) => {
  
//       const uri = searchTerm ? `${searchTerm}` : "";
  
//       const res = await fetch("/product/search?productName=" + uri);
//         const parsedResponse = await res.json();
//         products.value = parsedResponse
//         console.log(parsedResponse)   
//       // try {
//       //   const res = await fetch("http://localhost:9000/product");
//       //   const parsedResponse = await res.json();
  
//       //   // Update the ref directly
//       //   products.value = { ...parsedResponse };
//       //   console.log(products.value);
//       // } catch (error) {
//       //   console.error("Error fetching products:", error);
//       // }
//     };
  
//     return {
//       FETCH_PRODUCTS,
//       products
//     };
//   });
  
//   export default useRootStore;