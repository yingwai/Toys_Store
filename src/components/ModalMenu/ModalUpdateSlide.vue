<template>
  <div class="modal___menu">
    <div class="modal___bg" @click="fHide">
      <div @click.stop class="modal___window">
        <div class="title_modal">
          <h3>Редактирование слайда</h3>
        </div>
        <div class="body">
          <div style="display: flex; margin: 20px 0; gap: 15px">
            Обложка:
            <input type="file" class="file" accept=".png, .jpg, .jpeg" />
            <input
              type="text"
              class="btn_file"
              placeholder="Ссылка на изображение"
              v-bind:value="bg"
              @input="bg = $event.target.value"
            />
          </div>
          <input
            type="text"
            class="btn_body title"
            placeholder="Тема слайда"
            maxlength="55"
            v-bind:value="title"
            @input="title = $event.target.value"
          />

          <h3>Предосмотр:</h3>

          <div class="demo">
            <img :src="bg" />
            <div class="demo_info">
              <h2>{{ title }}</h2>
            </div>
          </div>
        </div>
        <div class="footer">
          <input type="submit" value="Изменить" @click="fUpdateSlide" />
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
      SaveSlide: JSON.parse(localStorage.getItem("SaveSlide")),
      activeSlide: JSON.parse(localStorage.getItem("activeSlide")),
      bg: "",
      title: "",
    };
  },
  methods: {
    fUpdateSlide() {
      let updateSlide;
      let btnTitle = document.querySelector(".title");
      let btnFile = document.querySelector(".btn_file");

      if (btnTitle.value.length >= 3) {
        updateSlide = {
          id: this.activeSlide.id,
          title: btnTitle.value,
          img: btnFile.value,
        };

        for (let i = 0; i < this.SaveSlide.length; i++) {
          if (this.activeSlide.id === i) {
            this.SaveSlide[i] = updateSlide;
            localStorage.setItem("SaveSlide", JSON.stringify(this.SaveSlide));
          }
        }

        this.$emit("HideModalSlide");
      } else {
        alert("Заполните тему слайда");
      }
    },
    fHide() {
      this.$emit("HideModalSlide");
    },
  },
  mounted() {
    let btnTitle = document.querySelector(".title");
    let btnFile = document.querySelector(".btn_file");

    btnTitle.value = this.activeSlide.title;
    btnFile.value = this.activeSlide.img;

    this.bg = this.activeSlide.img;
    this.title = this.activeSlide.title;
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

        .demo {
          margin: 5px -13px 5px 0;
          height: 70%;
          border: 1px solid black;
          border-radius: 3px;
          position: relative;

          img {
            width: 100%;
            height: 100%;
          }

          .demo_info {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            text-align: center;

            h2 {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 85%;
            }
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