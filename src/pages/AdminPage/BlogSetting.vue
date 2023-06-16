<template>
  <div class="admin_blog">
    <transition name="fade">
      <div v-if="VisibleModalCreateBlog === true">
        <ModalCreateBlog @HideModalBlog="fHideModalBlog" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="VisibleModalUpdateBlog === true">
        <ModalUpdateBlog @HideModalBlog="fHideModalBlog" />
      </div>
    </transition>

    <h2>Настройка блога</h2>

    <input
      type="submit"
      value="Добавить новый блог"
      class="create_blog"
      @click="fOpenModalCreateBlog"
    />

    <div class="list_blog">
      <transition-group name="list">
        <div class="blog" v-for="blog in blogs" :key="blog.id">
          <div class="blog_info">
            <div class="blog_title">
              <h3>{{ blog.title }}</h3>
            </div>

            <div class="blog_body">
              {{ blog.content }}
            </div>
          </div>

          <div class="blog_creaters">
            <span>Создатель:</span> {{ blog.creater }}
            <br />
            <span>Дата создания:</span> {{ blog.dateОfСreation }}
            <br />
            <div v-if="blog.updater">
              <span>Редактор:</span> {{ blog.updater }}
              <br />
              <span>Дата редактирования:</span> {{ blog.dateOfUpdate }}
            </div>
          </div>

          <div class="blog_btn">
            <i class="far fa-folder icon" @click="$router.push(`/Toys_Store/BlogPostId/${blog.id}`)"></i>
            <i class="fas fa-pencil-alt icon" @click="fUpdateBlog(blog.id)"></i>
            <i class="far fa-trash-alt icon" @click="fDeleteBlog(blog.id)"></i>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ModalCreateBlog from "@/components/ModalMenu/ModalCreateBlog.vue";
import ModalUpdateBlog from "@/components/ModalMenu/ModalUpdateBlog.vue";

export default {
  components: {
    ModalCreateBlog,
    ModalUpdateBlog,
  },
  data() {
    return {
      VisibleModalCreateBlog: false,
      VisibleModalUpdateBlog: false,
      blogs: [
        // {
        //   id: 0,
        //   title: "Упакуем бесплатно ваш подарок, если нужно!",
        //   content:
        //     "В интернет-магазине на InSales Вы можете вести блог магазина или новостную ленту – это отличный способ привлекать дополнительных покупателей из поисковых систем не только за счет коммерческих запросов, но и за счет информационных.",
        //   img: "",
        //   creater: "nick",
        //   dateОfСreation: "15.05.2022",
        //   updater: "",
        //   dateOfUpdate: ""
        // },
      ],
      SaveBlogs: JSON.parse(localStorage.getItem("SaveBlogs")),
    };
  },
  methods: {
    fOpenModalCreateBlog() {
      this.VisibleModalCreateBlog = true;
    },
    fHideModalBlog() {
      this.VisibleModalCreateBlog = false;
      this.VisibleModalUpdateBlog = false;

      if (localStorage.getItem('newBlog')) {
        this.blogs.push(JSON.parse(localStorage.getItem("newBlog")))
        localStorage.removeItem('newBlog')
      }

      localStorage.removeItem('activeBlog')
    },
    fUpdateBlog(id) {
      this.VisibleModalUpdateBlog = true;

      let activeBlog = {
        id: this.blogs[id].id,
        title: this.blogs[id].title,
        content: this.blogs[id].content,
        img: this.blogs[id].img,
        creater: this.blogs[id].creater,
        dateОfСreation: this.blogs[id].dateОfСreation,
        updater: this.blogs[id].updater,
        dateОfUpdate: this.blogs[id].dateОfUpdate,
      }

      localStorage.setItem('activeBlog', JSON.stringify(activeBlog))
    },
    fDeleteBlog(id) {
      this.blogs.splice(id, 1)
      
      for (let i = 0; i < this.blogs.length; i++) {
        this.blogs[i].id = i
      }

      localStorage.setItem("SaveBlogs", JSON.stringify(this.blogs));
    },
  },
  mounted() {
    if (this.SaveBlogs) {
      for (let i = 0; i < this.SaveBlogs.length; i++) {
        this.blogs.push({
          id: this.SaveBlogs[i].id,
          title: this.SaveBlogs[i].title,
          content: this.SaveBlogs[i].content,
          img: this.SaveBlogs[i].img,
          creater: this.SaveBlogs[i].creater,
          dateОfСreation: this.SaveBlogs[i].dateОfСreation,
          updater: this.SaveBlogs[i].updater,
          dateOfUpdate: this.SaveBlogs[i].dateOfUpdate,
        });
      }
    }
    // localStorage.setItem('SaveBlogs', JSON.stringify(this.blogs))
  },
};
</script>

<style lang="scss" scoped>
.admin_blog {
  .create_blog {
    width: 200px;
    height: 40px;
    margin: 20px 0;
    background-color: rgb(226, 106, 36);
    color: white;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  .list_blog {
    margin: 20px 0;

    .blog {
      height: 90px;
      padding: 15px;
      background: rgba(194, 194, 194, 0.226);
      border-radius: 5px;
      display: flex;
      margin: 20px 0;

      .blog_info {
        width: 50%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-height: 1.3em;
        height: 5.4em;

        .blog_body {
          margin-top: 5px;
        }
      }

      .blog_creaters {
        span {
          font-weight: bold;
        }
        margin: auto 0 auto 30px;
        width: 30%;
      }

      .blog_btn {
        width: 20%;
        display: flex;
        justify-content: center;
        gap: 25px;
        justify-content: center;
        align-items: center;

        .icon {
          font-size: 22px;
          cursor: pointer;
        }
      }
    }
  }
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>