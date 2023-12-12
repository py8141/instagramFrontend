import { defineStore } from "pinia";
import { ref } from "vue";

const activityStore = defineStore("activity", () => {
  const activity = ref(null);
  const FETCH_ACTIVITY = async () => {
    const res = await fetch(
      "http://10.20.3.72:8091/insta/activity/user/65754f9169e875213b5e3454"
    );
    const json = await res.json();
    activity.value = json;
    // console.log(json);
  };
  return {
    activity,
    FETCH_ACTIVITY,
  };
});
export default activityStore;
