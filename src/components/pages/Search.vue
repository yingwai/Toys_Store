<template>
  <div class="page_search">
    <div class="history">
      <ul>
        <li @click="this.$router.push('/')">Главная</li>
        /
        <li>Поиск</li>
      </ul>
    </div>

    <h2 style="font-size: 2.3rem">Поиск</h2>

    <div class="content">
      <button class="btn_search">
        <input
          type="text"
          class="search"
          value=""
          v-on:keydown.enter="fSearch"
        />
        <i class="fas fa-search" @click="fSearch"></i>
      </button>

      <h2 v-if="this.prods.length === 0">
        По вашему запросу ничего не найдено
      </h2>

      <div v-else>
        <div class="prod">
          <div class="prod_block" v-for="prod in prods" :key="prod.id">
            <div
              style="height: 500px"
              @click="$router.push(`/ProductId/${prod.id}`)"
            >
              <div class="prod_img"><img :src="prod.img" /></div>
              <div class="prod_title">
                {{ prod.title }}
              </div>
              <div class="prod_price">{{ prod.price }} ₽</div>
            </div>

            <input
              type="submit"
              value="В корзину"
              class="btn_corf"
              @click="fInBuyCorf(prod.id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
      Search: "",
      prods: [],
    };
  },
  methods: {
    fSearch() {
      if (this.prods.length >= 1) {
        this.prods.splice(0, this.prods.length);

        let btnSearch = document.querySelector(".search");

        this.Search = btnSearch.value.toLowerCase();

        for (let i = 0; i < this.SaveProd.length; i++) {
          let titleProd = this.SaveProd[i].title
            .toLowerCase()
            .replace(/[^a-zа-яё\s]/gi, "")
            .split(" ");
          let idProd = this.SaveProd[i].id;

          for (let i = 0; i < titleProd.length; i++) {
            if (this.Search === titleProd[i]) {
              this.prods.push(this.SaveProd[idProd]);
            }
          }
        }

        btnSearch.value = "";
        this.Search = "";
      } else {
        let btnSearch = document.querySelector(".search");

        this.Search = btnSearch.value.toLowerCase();

        for (let i = 0; i < this.SaveProd.length; i++) {
          let titleProd = this.SaveProd[i].title
            .toLowerCase()
            .replace(/[^a-zа-яё\s]/gi, "")
            .split(" ");
          let idProd = this.SaveProd[i].id;

          for (let i = 0; i < titleProd.length; i++) {
            if (this.Search === titleProd[i]) {
              this.prods.push(this.SaveProd[idProd]);
            }
          }
        }

        btnSearch.value = "";
        this.Search = "";
      }
    },
    fInBuyCorf(id) {
      this.SaveBuy.push(this.SaveProd[id])

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));
    }
  },
  mounted() {
    if (localStorage.getItem("Search")) {
      let btnSearch = document.querySelector(".search");
  
      btnSearch.value = localStorage.getItem("Search");
      this.Search = localStorage.getItem("Search")?.toLowerCase();
  
      localStorage.removeItem("Search");
  
      if (this.prods.length >= 1) {
        this.prods.splice(0, this.prods.length);
  
        for (let i = 0; i < this.SaveProd.length; i++) {
          let titleProd = this.SaveProd[i].title
            .toLowerCase()
            .replace(/[^a-zа-яё\s]/gi, "")
            .split(" ");
          let idProd = this.SaveProd[i].id;
  
          for (let i = 0; i < titleProd.length; i++) {
            if (this.Search === titleProd[i]) {
              this.prods.push(this.SaveProd[idProd]);
            }
          }
        }
  
        btnSearch.value = "";
        this.Search = "";
      } else {
        for (let i = 0; i < this.SaveProd.length; i++) {
          let titleProd = this.SaveProd[i].title
            .toLowerCase()
            .replace(/[^a-zа-яё\s]/gi, "")
            .split(" ");
          let idProd = this.SaveProd[i].id;
  
          for (let i = 0; i < titleProd.length; i++) {
            if (this.Search === titleProd[i]) {
              this.prods.push(this.SaveProd[idProd]);
            }
          }
        }
  
        btnSearch.value = "";
        this.Search = "";
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.page_search {
  margin: 0 150px;

  .btn_search {
    height: 40px;
    width: 20%;
    margin: 40px 0;
    // padding: 5px;
    font-size: 17px;
    outline: none;
    background-color: rgb(226, 106, 36);
    border: 0px solid black;
    display: flex;
    align-items: center;

    input {
      height: 70%;
      width: 86%;
      padding: 5px;
      font-size: 17px;
      outline: none;
      border: 1px solid black;
    }

    i {
      margin: 0 auto;
      color: white;
      cursor: pointer;
    }
  }

  .prod {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;
    gap: 50px 20px;
    margin-top: 20px;

    .prod_block {
      width: 350px;
      // height: 530px;
      display: flex;
      flex-direction: column;

      img {
        width: 100%;
        height: 350px;
        border-radius: 5px;
      }

      .prod_title {
        font-size: 23px;
        // font-weight: bold;
        transition: color 0.2s ease-in;
      }

      .prod_price {
        font-weight: bold;
        font-size: 25px;
      }

      .btn_corf {
        width: 90%;
        height: 40px;
        margin: auto auto;
        background-color: rgb(226, 106, 36);
        color: white;
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.4s ease-in;
      }

      &:hover {
        cursor: pointer;

        .prod_title {
          color: #6ebcda;
        }

        .btn_corf {
          opacity: 1;
        }
      }
    }
  }
}
</style>