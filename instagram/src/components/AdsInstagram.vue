<template>
<img src="https://miro.medium.com/v2/resize:fit:720/1*ibN0ptxrg6LkZ5DZbKv2YA.png" class="ads">
</template>
<script>
</script>
<style scoped>
.ads{

    position: fixed;
    z-index: 1000;
    top:100px;
    right: 0px;
    height: 300px;
    width:150px;
    padding-right: 10px;
}

@media screen and (max-width: 700px) {

    .ads{
        display: none;
    }
}

</style>