<template>
    <div class="adress">
        <h2>Адрес доставки</h2>

        <p>Населенный пункт</p>
        <input type="text">

        <p>Адрес</p>
        <input type="text">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.adress {
    h2 {
      font-size: 42px;
      margin: 0 0 20px 0;
    }

    p {
        font-size: 20px;
        margin: 0 0 10px 0;
    }

    input {
        height: 25px;
        width: 100%;
        padding: 5px;
        margin-bottom: 15px;
        outline: none;
    }
}
</style>