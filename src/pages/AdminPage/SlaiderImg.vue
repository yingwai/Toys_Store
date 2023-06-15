<template>
  <div class="admin_slaid">
    <transition name="fade">
      <div v-if="VisibleModalCreateSlide === true">
        <ModalCreateSlide @HideModalSlide="fHideModalSlide" />
      </div>
    </transition>

    <transition name="fade">
      <div v-if="VisibleModalUpdateSlide === true">
        <ModalUpdateSlide @HideModalSlide="fHideModalSlide" />
      </div>
    </transition>

    <h2>Настройка слайдера</h2>

    <input
      type="submit"
      value="Добавить новый слайд"
      class="create_slide"
      @click="fOpenModalCreateSlide"
    />

    <div class="slide_list">
      <transition-group name="list">
        <div class="slide" v-for="slide in slides" :key="slide.id">
          <div class="slide_info">
            <div class="slide_img">
              <img :src="slide.img" />
            </div>

            <div class="slide_title">
              <h3>{{ slide.title }}</h3>
            </div>
          </div>

          <div class="slide_btn">
            <i
              class="fas fa-pencil-alt icon"
              @click="fUpdateSlide(slide.id)"
            ></i>
            <i
              class="far fa-trash-alt icon"
              @click="fDeleteSlide(slide.id)"
            ></i>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ModalCreateSlide from "@/components/ModalMenu/ModalCreateSlide.vue";
import ModalUpdateSlide from "@/components/ModalMenu/ModalUpdateSlide.vue";

export default {
  components: {
    ModalCreateSlide,
    ModalUpdateSlide,
  },
  el: "#SlaiderImg",
  data() {
    return {
      VisibleModalCreateSlide: false,
      VisibleModalUpdateSlide: false,
      slides: [],
      SaveSlide: JSON.parse(localStorage.getItem("SaveSlide")),
    };
  },
  methods: {
    fOpenModalCreateSlide() {
      this.VisibleModalCreateSlide = true;
    },
    fHideModalSlide() {
      this.VisibleModalCreateSlide = false;
      this.VisibleModalUpdateSlide = false;

      if (localStorage.getItem("newSlide")) {
        this.slides.push(JSON.parse(localStorage.getItem("newSlide")));
        localStorage.removeItem("newSlide");
      }

      localStorage.removeItem("activeSlide");
    },
    fUpdateSlide(id) {
      this.VisibleModalUpdateSlide = true;

      let activeSlide = {
        id: this.slides[id].id,
        title: this.slides[id].title,
        img: this.slides[id].img,
      };

      localStorage.setItem("activeSlide", JSON.stringify(activeSlide));
    },
    fDeleteSlide(id) {
      this.slides.splice(id, 1);

      for (let i = 0; i < this.slides.length; i++) {
        this.slides[i].id = i;
      }

      localStorage.setItem("SaveSlide", JSON.stringify(this.slides));
    },
  },
  mounted() {
    if (this.SaveSlide) {
      for (let i = 0; i < this.SaveSlide.length; i++) {
        this.slides.push({
          id: this.SaveSlide[i].id,
          title: this.SaveSlide[i].title,
          img: this.SaveSlide[i].img,
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.admin_slaid {
  .create_slide {
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

  .slide_list {
    margin: 20px 0;

    .slide {
      height: 90px;
      padding: 15px;
      background: rgba(194, 194, 194, 0.226);
      border-radius: 5px;
      display: flex;
      margin: 20px 0;

      .slide_info {
        display: flex;
        width: 90%;
        height: 5.4em;

        .slide_img {
          width: 70%;
          margin-right: 20px;
          background: cover no-repeat;
          border-radius: 5px;

          img {
            width: 100%;
            height: 93px;
            border-radius: 5px;
          }
        }

        .slide_title {
          width: 40%;
          display: flex;
          align-items: center;
          font-size: 19px;
        }
      }

      .slide_btn {
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
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>