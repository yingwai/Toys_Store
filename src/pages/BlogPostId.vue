<template>
  <div class="blogpostid">
    <div class="history">
      <ul>
        <li @click="$router.push('/Toys_Store/')">Главная</li>
        /
        <li @click="$router.push('/Toys_Store/Blog')">Блог</li>
        /
        <li>{{ this.SaveBlogs[this.$route.params.id].title }}</li>
      </ul>
    </div>
    
    <img :src="this.SaveBlogs[this.$route.params.id].img" />

    <h2>{{ this.SaveBlogs[this.$route.params.id].title }}</h2>

    <p>{{ this.SaveBlogs[this.$route.params.id].content }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SaveBlogs: JSON.parse(localStorage.getItem("SaveBlogs")),
    };
  },
};
</script>

<style lang="scss" scoped>
.blogpostid {
  margin: 20px 150px;
  font-size: 22px;
  text-align: justify;

  img {
    width: 100%;
    height: 650px;
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
  }

  h2 {
    font-size: 34px;
    margin: 20px 0;
  }
}
</style>