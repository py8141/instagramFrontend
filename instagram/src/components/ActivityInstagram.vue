<template>
  <div class="activity" v-for="(act , index) in act.value" :key="index">
    <div>
      UserId : {{ act.userId }}
    </div>
    <div>
      {{ act.activity }}
    </div>
    <div>
      Post Id : {{ act.postId }}
    </div>
    
    
  </div>
</template>
<script>
import activityStore from '@/store/activity-store.js'
import { computed , onBeforeMount, ref } from 'vue';

export default {
  setup() {
    const act = ref();
    const activity = activityStore();

    onBeforeMount(() => {
      activity.FETCH_ACTIVITY();
      act.value = computed(()=> activity.activity)
      console.log(act.value);
    })
    return{
      act
    }
    
  }
}
</script>
<style scoped>
.activity {
  left: 300px;
  padding: 70px;
  margin: 10px;
  position: relative;
}

.userName {
  font-weight: bold;
  margin-bottom: 5px;
}

.timestamp {
  position: relative;
  top: 5px;
  right: 5px;
  color: #888;
}
</style>