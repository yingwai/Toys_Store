<template>
  <div class="page_slider">
    <div class="container">
      <div class="slider">
        <div class="slider-line">
          <div v-for="slide in slides" :key="slide.id" style="cursor: pointer;">
            <img :src="slide.img" alt="" />

            <div class="slide_info">
              <div class="info">
                <h2>{{ slide.title }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button class="button prev" @click="fPrev">
        <i class="fas fa-arrow-left"></i>
      </button>
      <button class="button next" @click="fNext">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: JSON.parse(localStorage.getItem("SaveSlide")),
      count: 0,
      width: "",
    };
  },
  methods: {
    fNext() {
      let images = document.querySelectorAll(".slider .slider-line img");
      let sliderLine = document.querySelector(".slider .slider-line");

      this.count++;

      if (this.count >= images.length) {
        this.count = 0;
      }

      sliderLine.style.transform =
        "translate(-" + this.count * this.width + "px)";
    },
    fPrev() {
      let images = document.querySelectorAll(".slider .slider-line img");
      let sliderLine = document.querySelector(".slider .slider-line");

      this.count--;

      if (this.count < 0) {
        this.count = images.length - 1;
      }

      sliderLine.style.transform =
        "translate(-" + this.count * this.width + "px)";
    },
  },
  mounted() {
    let images = document.querySelectorAll(".slider .slider-line img");
    let sliderLine = document.querySelector(".slider .slider-line");
    let info = document.querySelectorAll(".info");

    this.width = document.querySelector(".slider").offsetWidth;

    sliderLine.style.width = this.width * images.length + "px";

    for (let i = 0; i < info.length; i++) {
      info[i].style.width = this.width + "px";
    }

    images.forEach((item) => {
      item.style.width = this.width + "px";
      item.style.height = "auto";
    });
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 30px auto;
  position: relative;
}

button {
  background: none;
  // border: 1px solid black;
  padding: 10px 20px;
  height: 440px;
  font-size: 1.5rem;
  color: rgb(226, 226, 226);
  cursor: pointer;
  border: none;
}

.prev {
  position: absolute;
  top: 0px;
}

.next {
  position: absolute;
  top: 0px;
  right: 0px;
}

.slider {
  width: 100%;
  // max-width: 80%;
  height: 440px;
  margin: 20px auto;
  overflow: hidden;
}

.slider-line {
  width: 1024px;
  display: flex;
  background: orange;
  position: relative;
  left: 0;
  transition: all ease 1s;

  img {
    height: 440px;
  }
}

.slide_info {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-content: center;

  .info {
    height: 440px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>