<template>
  <div class="modal___menu">
    <div class="modal___bg" @click="fHide">
      <div @click.stop class="modal___window">
        <div class="title_modal">
          <h3>Редактирование блога</h3>
        </div>
        <div class="body">
          <div style="display: flex; margin: 20px 0; gap: 15px">
            Обложка:
            <input type="file" class="file" accept=".png, .jpg, .jpeg" />
            <input type="text" class="btn_file" placeholder="Ссылка на изображение" />
          </div>
          <input type="text" class="btn_body title" placeholder="Тема блога" maxlength="55" />
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            class="btn_body content"
            placeholder="Содержание блога"
          ></textarea>
        </div>
        <div class="footer">
          <input type="submit" value="Изменить" @click="fUpdateBlog" />
          <input type="submit" value="Отменить" @click="fHide" />
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
      activeAccount: JSON.parse(localStorage.getItem("activeAccount")),
      activeBlog: JSON.parse(localStorage.getItem("activeBlog")),
    };
  },
  methods: {
    fUpdateBlog() {
      let updateBlog;
      let now = new Date();
      let DatePost = 0
      let btnTitle = document.querySelector(".title");
      let btnContent = document.querySelector(".content");
      let btnFile = document.querySelector('.btn_file')

      if (btnTitle.value.length >= 3) {
        if (btnContent.value.length >= 3) {
          if (now.getDate() < 10) {
            if (now.getMonth() + 1 < 10) {
              DatePost = `0${now.getDate()}.0${now.getMonth() + 1}.${now.getFullYear()}`
            } else {
              DatePost = `0${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`
            }
          } else {
            DatePost = `${now.getDate()}.${now.getMonth() + 1}.${now.getFullYear()}`
          }

          updateBlog = {
            id: this.activeBlog.id,
            title: btnTitle.value,
            content: btnContent.value,
            img: btnFile.value,
            creater: this.activeBlog.creater,
            dateОfСreation: this.activeBlog.dateОfСreation,
            updater: this.activeAccount.fio,
            dateOfUpdate: DatePost,
          };

          for (let i = 0; i < this.SaveBlogs.length; i++) {
            if (this.activeBlog.id === i) {
              this.SaveBlogs[i] = updateBlog;
              localStorage.setItem("SaveBlogs", JSON.stringify(this.SaveBlogs));
            }
          }

          this.$emit("HideModalBlog");
        } else {
          alert("Заполните или увеличьте содержание блога");
        }
      } else {
        alert("Заполните тему блога");
      }
    },
    fHide() {
      this.$emit("HideModalBlog");
    },
  },
  mounted() {
    let btnTitle = document.querySelector(".title");
    let btnContent = document.querySelector(".content");
    let btnFile = document.querySelector(".btn_file");

    btnTitle.value = this.activeBlog.title
    btnContent.value = this.activeBlog.content
    btnFile.value = this.activeBlog.img
  },
};
</script>

<style lang="scss" scoped>
.modal___menu {
  .modal___bg {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal___window {
      background-color: white;
      border-radius: 10px;
      height: 65%;
      width: 50%;
      padding: 20px 40px;

      .title_modal {
        h3 {
          font-size: 25px;
        }
      }

      .body {
        margin: 20px 0;
        height: 80%;

        .btn_body {
          width: 100%;
          outline: none;
          padding: 5px;

          &.file {
            margin: 0 0 0px 10px;
            background: white;
            border: 1px solid black;
            border-radius: 3px;
            cursor: pointer;
          }

          &.title {
            height: 40px;
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 20px 0;
            border: 1px solid black;
            border-radius: 3px;
          }

          &.content {
            height: 70%;
            resize: none;
            font-size: 16px;
            border: 1px solid black;
            border-radius: 3px;
          }
        }

        .btn_file {
          margin: -5px -12px 0 0;
          padding: 5px;
          width: 70%;
          height: 20px;
          font-size: 16px;
          border: 1px solid black;
          border-radius: 3px;
        }
      }

      .footer {
        display: flex;
        justify-content: right;

        input {
          font-size: 18px;
          width: 120px;
          height: 35px;
          margin: 0 -12px 0 50px;
          background: white;
          border: 1px solid black;
          border-radius: 3px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>