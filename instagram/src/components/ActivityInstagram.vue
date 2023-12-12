<template>
  <div class="activity">
    <div class="userName">
      {{ data.userName }} {{ data.action }} your pic!!
    </div>
    <div class="timestamp">
      {{ data.timestamp }}
    </div>
    <div class="userName">
      {{ data.userName }} {{ data.action }} your pic!!
    
    </div>
    <div class="timestamp">
      {{ data.timestamp }}
    </div>
  </div>
</template>
<script>

export default {
  setup() {
    return {
      data: {
        userName: "aashim",
        action: "liked",
        timestamp: "12:09pm",
      }
    }
  }
}
</script>
<style scoped>
.activity {
  border: 1px solid #ddd;
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