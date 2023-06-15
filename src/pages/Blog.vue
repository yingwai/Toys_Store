<template>
  <div class="blog">
    <div class="history">
      <ul>
        <li @click="$router.push('/')">Главная</li>
        /
        <li>Блог</li>
      </ul>
    </div>

    <div class="content">
      <h2>Блог</h2>

      <div class="blog_post">
        <div class="post" v-for="post in posts" :key="post.id">
          <div class="post_img">
            <img :src="post.img" alt="img">
          </div>
          <div class="post_date">{{ post.dateОfСreation }}</div>
          <div class="post_title" @click="$router.push(`/BlogPostId/${post.id}`)">{{ post.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SaveBlogs: JSON.parse(localStorage.getItem("SaveBlogs")),
      posts: []
    };
  },
  methods: {},
  mounted() {
    for (let i = 0; i < this.SaveBlogs.length; i++) {
      this.posts.push({
        id: this.SaveBlogs[i].id,
        title: this.SaveBlogs[i].title,
        content: this.SaveBlogs[i].content,
        img: this.SaveBlogs[i].img,
        creater: this.SaveBlogs[i].creater,
        dateОfСreation: this.SaveBlogs[i].dateОfСreation,
      });
    }
  },
  
};
</script>

<style lang="scss" scoped>
.blog {
  margin: 20px 150px;
  .content {

    h2 {
      font-size: 42px;
    }

    .blog_post {
      display: flex;
      flex-wrap: wrap;
      margin: 50px 0;
      cursor: pointer;

      .post {
        width: 300px;
        margin: 0 10px 30px 10px;

        img {
          width: 100%;
          border-radius: 5px 5px 0 0;
        }

        .post_title {
          font-size: 23px;
          font-weight: bold;
          transition: color 0.2s ease-in;

          &:hover {
            color: #6ebcda;
          }
        }
      }
    }
  }
}
</style>