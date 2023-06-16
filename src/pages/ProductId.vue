<template>
  <div class="productId">
    <div class="history">
      <ul>
        <li @click="$router.push('/Toys_Store/')">Главная</li>
        /
        <li @click="$router.push('/Toys_Store/Catalog')">Каталог</li>
        /
        <li>{{ this.SaveProd[this.$route.params.id].title }}</li>
      </ul>
    </div>

    <div class="block_product">
      <img :src="this.SaveProd[this.$route.params.id].img" />

      <div class="block_info">
        <div class="block_rating">
          <div
            v-if="this.SaveProd[this.$route.params.id].comments.length === 0"
          >
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              0.5
            "
          >
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              1
            "
          >
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              1.5
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              2
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              2.5
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              3
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              3.5
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              4
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              4.5
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length <=
              5
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length >=
              5
            "
          >
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>

          <div
            v-if="this.SaveProd[this.$route.params.id].comments.length === 0"
          >
            (0)
          </div>

          <div
            v-else-if="
              this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length >=
              5
            "
          >
            (5)
          </div>

          <div v-else>
            ({{
              (
                this.SaveProd[this.$route.params.id].rating /
                this.SaveProd[this.$route.params.id].comments.length
              ).toFixed(2)
            }})
          </div>
        </div>

        <h2>{{ this.SaveProd[this.$route.params.id].title }}</h2>

        <h2 style="font-size: 55px">
          {{ this.SaveProd[this.$route.params.id].price }} ₽
        </h2>

        <div v-if="corfVisible" style="display: flex">
          <input
            type="submit"
            class="btn_corf"
            value="-"
            style="width: 30%"
            @click="fIncrBuy(this.$route.params.id)"
          />
          <input
            type="submit"
            :value="`В корзине (${count})`"
            class="btn_corf"
            @click="fInBuyCorf(this.$route.params.id)"
          />
          <input
            type="submit"
            class="btn_corf"
            value="+"
            style="width: 30%"
            @click="fAddBuy(this.$route.params.id)"
          />
        </div>

        <input
          type="submit"
          value="В корзину"
          class="btn_corf"
          v-else
          @click="fInBuyCorf(this.$route.params.id)"
        />

        <h2>Описание:</h2>
        <p>{{ this.SaveProd[this.$route.params.id].content }}</p>
      </div>
    </div>

    <div class="comments_block">
      <h2>Отзывы:</h2>

      <div
        class="list_comments"
        v-if="this.SaveProd[this.$route.params.id].comments.length === 0"
      >
        Отзывов еще никто не оставлял.
      </div>

      <div class="list_comments" v-else>
        <div class="comments" v-for="comment in comments" :key="comment.id">
          <div class="comments_info">
            <div class="comments_name">{{ comment.name }}</div>
            <div class="comments_email">{{ comment.email }}</div>
            <div class="comments_rating" v-if="comment.Point === 1">
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="comments_rating" v-else-if="comment.Point === 2">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="comments_rating" v-else-if="comment.Point === 3">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="comments_rating" v-else-if="comment.Point === 4">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div class="comments_rating" v-else-if="comment.Point === 5">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
          <div class="comments_body">
            {{ comment.content }}
          </div>
        </div>
      </div>

      <div v-if="comVisible" class="area_com">
        <h3>Оценка*</h3>
        <div @mouseover="fRating">
          <i class="far fa-star rating">
            <i class="fas fa-star rating_on" @click="fRatingOn1"></i>
            <i class="fas fa-star rating_point"></i>
          </i>
          <i class="far fa-star rating">
            <i class="fas fa-star rating_on" @click="fRatingOn2"></i>
            <i class="fas fa-star rating_point"></i>
          </i>
          <i class="far fa-star rating">
            <i class="fas fa-star rating_on" @click="fRatingOn3"></i>
            <i class="fas fa-star rating_point"></i>
          </i>
          <i class="far fa-star rating">
            <i class="fas fa-star rating_on" @click="fRatingOn4"></i>
            <i class="fas fa-star rating_point"></i>
          </i>
          <i class="far fa-star rating">
            <i class="fas fa-star rating_on" @click="fRatingOn5"></i>
            <i class="fas fa-star rating_point"></i>
          </i>
        </div>

        <h3>Имя*</h3>
        <input
          v-if="this.activeAccount"
          type="text"
          class="btn_name"
          placeholder="Введите имя"
          :value="this.activeAccount.fio"
        />
        <input v-else type="text" class="btn_name" placeholder="Введите имя" />

        <h3>Email*</h3>
        <input
          v-if="this.activeAccount"
          type="text"
          class="btn_email"
          placeholder="Введите email"
          :value="this.activeAccount.email"
        />
        <input
          v-else
          type="text"
          class="btn_email"
          placeholder="Введите email"
        />

        <h3>Отзыв*</h3>
        <textarea
          name="text"
          id="text"
          cols="30"
          rows="10"
          maxlength="350"
          class="btn_content"
          placeholder="Содержание отзыва"
        ></textarea>

        <br />
        <input
          type="submit"
          value="Оставить отзыв"
          class="create_comments"
          @click="fSendComments"
        />
      </div>

      <input
        v-else
        type="submit"
        value="Оставить отзыв"
        class="create_comments"
        @click="comVisible = true"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
      comments: "",
      activeAccount: JSON.parse(localStorage.getItem("activeAccount")),
      comVisible: false,
      corfVisible: false,
      ratingPoint: 0,
      count: 0,
    };
  },
  methods: {
    fInBuyCorf(id) {
      if (this.corfVisible === false) {
        this.corfVisible = true;
        this.SaveBuy.push(this.SaveProd[id]);

        localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

        this.count += 1;
      } else {
        this.$router.push("/Toys_Store/Corf");
      }
    },
    fAddBuy(id) {
      this.SaveBuy.push(this.SaveProd[id]);

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      this.count += 1;
    },
    fIncrBuy(id) {
      if (this.count === 1) {
        this.SaveBuy.splice(this.SaveBuy.indexOf(id), 1);
  
        localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));
        
        this.corfVisible = false
        this.count = 0
      } else if (this.count >= 2) {
        this.SaveBuy.splice(this.SaveBuy.indexOf(id), 1);
  
        localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));
  
        this.count -= 1;
      } 
    },
    fRating() {
      let rating = document.querySelectorAll(".rating");
      let ratingOn = document.querySelectorAll(".rating_on");

      rating[0].addEventListener("mouseover", () => {
        ratingOn[0].style.display = "block";
      });

      rating[0].addEventListener("mouseout", () => {
        ratingOn[0].style.display = "none";
      });

      rating[1].addEventListener("mouseover", () => {
        ratingOn[0].style.display = "block";
        ratingOn[1].style.display = "block";
      });

      rating[1].addEventListener("mouseout", () => {
        ratingOn[0].style.display = "none";
        ratingOn[1].style.display = "none";
      });

      rating[2].addEventListener("mouseover", () => {
        ratingOn[0].style.display = "block";
        ratingOn[1].style.display = "block";
        ratingOn[2].style.display = "block";
      });

      rating[2].addEventListener("mouseout", () => {
        ratingOn[0].style.display = "none";
        ratingOn[1].style.display = "none";
        ratingOn[2].style.display = "none";
      });

      rating[3].addEventListener("mouseover", () => {
        ratingOn[0].style.display = "block";
        ratingOn[1].style.display = "block";
        ratingOn[2].style.display = "block";
        ratingOn[3].style.display = "block";
      });

      rating[3].addEventListener("mouseout", () => {
        ratingOn[0].style.display = "none";
        ratingOn[1].style.display = "none";
        ratingOn[2].style.display = "none";
        ratingOn[3].style.display = "none";
      });

      rating[4].addEventListener("mouseover", () => {
        ratingOn[0].style.display = "block";
        ratingOn[1].style.display = "block";
        ratingOn[2].style.display = "block";
        ratingOn[3].style.display = "block";
        ratingOn[4].style.display = "block";
      });

      rating[4].addEventListener("mouseout", () => {
        ratingOn[0].style.display = "none";
        ratingOn[1].style.display = "none";
        ratingOn[2].style.display = "none";
        ratingOn[3].style.display = "none";
        ratingOn[4].style.display = "none";
      });
    },
    fRatingOn1() {
      let ratingPoint = document.querySelectorAll(".rating_point");
      ratingPoint[0].style.display = "block";

      this.ratingPoint = 1;
    },
    fRatingOn2() {
      let ratingPoint = document.querySelectorAll(".rating_point");
      ratingPoint[0].style.display = "block";
      ratingPoint[1].style.display = "block";

      this.ratingPoint = 2;
    },
    fRatingOn3() {
      let ratingPoint = document.querySelectorAll(".rating_point");
      ratingPoint[0].style.display = "block";
      ratingPoint[1].style.display = "block";
      ratingPoint[2].style.display = "block";

      this.ratingPoint = 3;
    },
    fRatingOn4() {
      let ratingPoint = document.querySelectorAll(".rating_point");
      ratingPoint[0].style.display = "block";
      ratingPoint[1].style.display = "block";
      ratingPoint[2].style.display = "block";
      ratingPoint[3].style.display = "block";

      this.ratingPoint = 4;
    },
    fRatingOn5() {
      let ratingPoint = document.querySelectorAll(".rating_point");
      ratingPoint[0].style.display = "block";
      ratingPoint[1].style.display = "block";
      ratingPoint[2].style.display = "block";
      ratingPoint[3].style.display = "block";
      ratingPoint[4].style.display = "block";

      this.ratingPoint = 5;
    },
    fSendComments() {
      let btnName = document.querySelector(".btn_name");
      let btnEmail = document.querySelector(".btn_email");
      let btnContent = document.querySelector(".btn_content");
      let newComment;

      if (this.ratingPoint != 0) {
        if (btnName.value.length >= 3) {
          if (btnEmail.value.length >= 3) {
            if (btnContent.value.length >= 5) {
              if (this.SaveProd[this.$route.params.id].comments.length != 0) {
                newComment = {
                  id: this.SaveProd[this.$route.params.id].comments.length,
                  name: btnName.value,
                  email: btnEmail.value,
                  content: btnContent.value,
                  Point: this.ratingPoint,
                };
              } else {
                newComment = {
                  id: 0,
                  name: btnName.value,
                  email: btnEmail.value,
                  content: btnContent.value,
                  Point: this.ratingPoint,
                };
              }

              this.SaveProd[this.$route.params.id].comments.push(newComment);
              this.SaveProd[this.$route.params.id].rating += this.ratingPoint;

              localStorage.setItem("SaveProd", JSON.stringify(this.SaveProd));

              this.comVisible = false;
            } else {
              alert("Заполните содержимое отзыва.");
            }
          } else {
            alert("Заполните поля email.");
          }
        } else {
          alert("Заполните поля имя.");
        }
      } else {
        alert("Оцените товар.");
      }
    },
  },
  mounted() {
    this.comments = this.SaveProd[this.$route.params.id].comments;

    for (let i = 0; i < this.SaveBuy.length; i++) {
      if (this.SaveProd[this.$route.params.id].id === this.SaveBuy[i].id) {
        this.corfVisible = true;
        this.count += 1
      }
    }

  },
};
</script>

<style lang="scss" scoped>
.productId {
  margin: 20px 150px;
  font-size: 22px;

  img {
    width: 100%;
    height: 650px;
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
  }

  h2 {
    font-size: 30px;
    margin: 20px 0;
  }

  .block_product {
    display: flex;

    img {
      width: 60%;
    }

    .block_info {
      width: 40%;
      text-align: justify;

      .block_rating {
        display: flex;
      }

      h2 {
        font-size: 40px;
        margin: 20px 0;
      }
    }
  }

  .comments_block {
    .list_comments {
      .comments {
        height: 90px;
        padding: 15px;
        background: rgba(194, 194, 194, 0.226);
        border-radius: 5px;
        display: flex;
        margin: 20px 0;

        .comments_info {
          width: 15%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .comments_body {
          width: 85%;
          margin: 0 10px;
          word-wrap: break-word;
        }
      }
    }

    .area_com {
      margin: 20px 0;

      .rating {
        cursor: pointer;
        position: relative;

        .rating_on {
          display: none;
          position: absolute;
          left: 0;
          top: 0;
        }

        .rating_point {
          display: none;
          position: absolute;
          left: 0;
          top: 0;
        }
      }

      h3 {
        font-weight: normal;
        font-size: 22px;
        margin: 20px 0 0 0;
      }

      .btn_name {
        margin: -5px -12px 0 0;
        padding: 5px;
        width: 50%;
        height: 20px;
        font-size: 16px;
        border: 1px solid black;
        border-radius: 3px;
      }

      .btn_email {
        margin: -5px -12px 0 0;
        padding: 5px;
        width: 50%;
        height: 20px;
        font-size: 16px;
        border: 1px solid black;
        border-radius: 3px;
      }

      .btn_content {
        height: 60%;
        width: 50%;
        padding: 5px;
        resize: none;
        font-size: 16px;
        border: 1px solid black;
        border-radius: 3px;
      }
    }

    .create_comments {
      width: 150px;
      height: 40px;
      margin: 20px 0;
      background-color: rgb(226, 106, 36);
      color: white;
      font-size: 18px;
      outline: none;
      border: none;
      cursor: pointer;
    }
  }
}

.btn_corf {
  width: 100%;
  height: 50px;
  margin: auto auto;
  background-color: rgb(226, 106, 36);
  color: white;
  font-size: 25px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>