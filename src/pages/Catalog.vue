<template>
  <div class="catalog">
    <div class="history">
      <ul>
        <li @click="$router.push('/Toys_Store/')">Главная</li>
        /
        <li>Каталог</li>
      </ul>
    </div>

    <h2 style="font-size: 2.3rem">Список товаров</h2>

    <select @change="changeOption" class="filter">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>

    <select @change="changeCategory" class="filter" v-model="selected">
      <option
        v-for="category in categorys"
        :key="category.value"
        :value="category.value"
      >
        {{ category.name }}
      </option>
    </select>

    <div class="prod">
      <div
        class="prod_block"
        v-for="prod in prods"
        :key="prod.id"
      >
        <div style="height: 500px;" @click="$router.push(`/Toys_Store/ProductId/${prod.id}`)">
          <div class="prod_img"><img :src="prod.img" /></div>
          <div class="prod_title">
            {{ prod.title }}
          </div>
          <div class="prod_price">{{ prod.price }} ₽</div>
        </div>

        <input type="submit" value="В корзину" class="btn_corf" @click="fInBuyCorf(prod.id)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
      listCategoty: JSON.parse(localStorage.getItem("listCategoty")),
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
      prods: [],
      selected: "all",
      options: [
        { name: "Без сортировки", value: "none" },
        { name: "Сначало новое", value: "new" },
        { name: "Сначало старое", value: "old" },
        { name: "По названию А-Я", value: "name_first" },
        { name: "По названию Я-А", value: "name_last" },
        { name: "От наименьшей цены", value: "price_low" },
        { name: "От наибольшей цены", value: "price_up" },
      ],
      categorys: [
        { name: "Без категории", value: "all" },
        { name: "Плюшевые", value: "1" },
        { name: "Пластмассовые", value: "2" },
        { name: "Конструктор", value: "3" },
      ],
    };
  },
  methods: {
    changeOption(event) {
      if (event.target.value === "none") {
        this.prods.sort((a, b) => {
          return a.id - b.id;
        });
      } else if (event.target.value === "new") {
        this.prods.sort((a, b) => {
          return a.id - b.id;
        });
      } else if (event.target.value === "old") {
        this.prods.sort((a, b) => {
          return b.id - a.id;
        });
      } else if (event.target.value === "name_first") {
        this.prods.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      } else if (event.target.value === "name_last") {
        this.prods.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      } else if (event.target.value === "price_low") {
        this.prods.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (event.target.value === "price_up") {
        this.prods.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    changeCategory(event) {
      if (event.target.value === "all") {
        this.prods.splice(0, this.prods.length);

        for (let i = 0; i < this.SaveProd.length; i++) {
          this.prods.push({
            id: this.SaveProd[i].id,
            title: this.SaveProd[i].title,
            content: this.SaveProd[i].content,
            img: this.SaveProd[i].img,
            price: this.SaveProd[i].price,
          });
        }
      } else if (event.target.value === "1") {
        this.prods.splice(0, this.prods.length);

        for (let i = 0; i < this.SaveProd.length; i++) {
          if (this.SaveProd[i].category === "Плюшевые") {
            this.prods.push({
              id: this.SaveProd[i].id,
              title: this.SaveProd[i].title,
              content: this.SaveProd[i].content,
              img: this.SaveProd[i].img,
              price: this.SaveProd[i].price,
            });
          }
        }
      } else if (event.target.value === "2") {
        this.prods.splice(0, this.prods.length);

        for (let i = 0; i < this.SaveProd.length; i++) {
          if (this.SaveProd[i].category === "Пластмассовые") {
            this.prods.push({
              id: this.SaveProd[i].id,
              title: this.SaveProd[i].title,
              content: this.SaveProd[i].content,
              img: this.SaveProd[i].img,
              price: this.SaveProd[i].price,
            });
          }
        }
      } else if (event.target.value === "3") {
        this.prods.splice(0, this.prods.length);

        for (let i = 0; i < this.SaveProd.length; i++) {
          if (this.SaveProd[i].category === "Конструктор") {
            this.prods.push({
              id: this.SaveProd[i].id,
              title: this.SaveProd[i].title,
              content: this.SaveProd[i].content,
              img: this.SaveProd[i].img,
              price: this.SaveProd[i].price,
            });
          }
        }
      }
      console.log(this.prods);
    },
    fInBuyCorf(id) {
      this.SaveBuy.push(this.SaveProd[id])

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      this.$store.state.nCountToysCorf += 1;
    }
  },
  mounted() {
    if (this.listCategoty) {
      if (this.listCategoty.value === "1") {
        this.selected = "1";

        for (let i = 0; i < this.SaveProd.length; i++) {
          if (this.SaveProd[i].category === "Плюшевые") {
            this.prods.push({
              id: this.SaveProd[i].id,
              title: this.SaveProd[i].title,
              content: this.SaveProd[i].content,
              img: this.SaveProd[i].img,
              price: this.SaveProd[i].price,
            });
          }
        }
      } else if (this.listCategoty.value === "2") {
        this.selected = "2";

        for (let i = 0; i < this.SaveProd.length; i++) {
          if (this.SaveProd[i].category === "Пластмассовые") {
            this.prods.push({
              id: this.SaveProd[i].id,
              title: this.SaveProd[i].title,
              content: this.SaveProd[i].content,
              img: this.SaveProd[i].img,
              price: this.SaveProd[i].price,
            });
          }
        }
      } else if (this.listCategoty.value === "3") {
        this.selected = "3";

        for (let i = 0; i < this.SaveProd.length; i++) {
          if (this.SaveProd[i].category === "Конструктор") {
            this.prods.push({
              id: this.SaveProd[i].id,
              title: this.SaveProd[i].title,
              content: this.SaveProd[i].content,
              img: this.SaveProd[i].img,
              price: this.SaveProd[i].price,
            });
          }
        }
      }

      localStorage.removeItem("listCategoty");
    } else {
      for (let i = 0; i < this.SaveProd.length; i++) {
        this.prods.push({
          id: this.SaveProd[i].id,
          title: this.SaveProd[i].title,
          content: this.SaveProd[i].content,
          img: this.SaveProd[i].img,
          price: this.SaveProd[i].price,
          category: this.SaveProd[i].category,
          rating: this.SaveProd[i].rating,
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.catalog {
  margin: 0 150px;

  .filter {
    width: 12%;
    padding: 5px;
    font-size: 17px;
    margin: 10px 40px 10px 0;
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border: 0px solid black;
    border-radius: 5px;
  }

  .prod {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
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