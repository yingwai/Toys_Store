<template>
  <div class="main">
    <div class="content">
      <Slider />

      <h2 style="font-size: 2.3rem">Список последних товаров</h2>

      <h2 style="font-size: 30px">Плюшевые</h2>
      <div class="prod">
        <div class="prod_block" v-for="prod in prod1" :key="prod.id">
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

          <input type="submit" value="В корзину" class="btn_corf" @click="fInBuyCorf(prod.id)" />
        </div>
      </div>

      <br />
      <br />
      <br />

      <h2 style="font-size: 30px">Пластмассовые</h2>
      <div class="prod">
        <div class="prod_block" v-for="prod in prod2" :key="prod.id">
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

          <input type="submit" value="В корзину" class="btn_corf" @click="fInBuyCorf(prod.id)" />
        </div>
      </div>

      <br />
      <br />
      <br />

      <h2 style="font-size: 30px">Конструктор</h2>
      <div class="prod">
        <div class="prod_block" v-for="prod in prod3" :key="prod.id">
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

          <input type="submit" value="В корзину" class="btn_corf" @click="fInBuyCorf(prod.id)" />
        </div>
      </div>

      <div class="info_toys">
        <img
          src="https://images.unsplash.com/flagged/photo-1578477305564-0f62bd8dddd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="toys"
        />
        <div>
          <h3>Плюшевые игрушки Misha</h3>
          <p>
            Есть игрушки, которые хочется всегда держать, <br />
            чувствуя теплоту и нежность от них. Коллекция <br />
            Misha именно такие. Стильные, красивые и <br />
            милые мишки, с добрым характером. Misha <br />
            идеально впишутся в интерьер, добавив <br />
            нежности, уюта. Всегда актуальная классика в <br />
            авторском исполнении, с безупречным <br />
            качеством, делают эти игрушки прекрасным <br />
            подарком.
          </p>
          <button>Подробнее</button>
        </div>
      </div>

      <div class="info_gift-card">
        <div>
          <h3>Дарим празднечные бонусы</h3>
          <p>
            В честь предстоящих праздников, дарим 500 <br />
            бонусных рублей на вашу скидочную карту! <br />
            Успей потратить до истичения их срока!
          </p>
          <button>Узнать подробности</button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1577042939454-8b29d442b402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="gift"
        />
      </div>

      <h2 style="font-size: 40px">Акции</h2>
      <div class="stock">
        <div class="stock_block" v-for="stock in stocks" :key="stock.id">
          <div class="stock_img"><img :src="stock.img" /></div>
          <div
            class="stock_title"
            @click="$router.push(`/BlogPostId/${stock.id}`)"
          >
            {{ stock.title }}
          </div>
          <div class="stock_date">{{ stock.dateОfСreation }}</div>
        </div>
      </div>

      <div class="info_gift">
        <div class="content_gift">
          <div>
            <h3>Как подобрать подарок?</h3>
            <p>
              Мы сталкиваемся с этим вопросом каждый раз перед праздниками. Как
              часто нам дарили подарки, <br />
              которые мы передаривали или которые просто пылились на полках, что
              бы никого не обидеть? <br />
              Чтобы не подарить очередной ненужный подарок, мы подобрали для вас
              несколько советов.
            </p>
            <button>Узнать подробности</button>
          </div>
        </div>
      </div>

      <div class="illustrashion">
        <div
          class="ill_slot"
          style="
            background-image: url('https://images.unsplash.com/photo-1513884923967-4b182ef167ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
        ></div>
        <div
          class="ill_slot"
          style="
            background-image: url('https://images.unsplash.com/photo-1546512347-b93b3f59e231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
          "
        ></div>
        <div
          class="ill_slot"
          style="
            background-image: url('https://images.unsplash.com/photo-1528066588405-9e20509b9e34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
        ></div>
        <div
          class="ill_slot"
          style="
            background-image: url('https://images.unsplash.com/photo-1607647075713-3ae707be99e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
          "
        ></div>
      </div>

      <!-- <div class="Feedback ">
        <div class=""></div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Sliders/Slider.vue";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      SaveBlogs: JSON.parse(localStorage.getItem("SaveBlogs")),
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
      stocks: [],
      prod1: [],
      prod2: [],
      prod3: [],
      limitationList: [],
    };
  },
  methods: {
    fInBuyCorf(id) {
      this.SaveBuy.push(this.SaveProd[id])

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      this.$store.state.nCountToysCorf += 1;
    }
  },
  mounted() {
    for (let i = 0; i < this.SaveBlogs.length; i++) {
      this.stocks.push({
        id: this.SaveBlogs[i].id,
        title: this.SaveBlogs[i].title,
        content: this.SaveBlogs[i].content,
        img: this.SaveBlogs[i].img,
        creater: this.SaveBlogs[i].creater,
        dateОfСreation: this.SaveBlogs[i].dateОfСreation,
      });
    }

    if (this.stocks.length > 4) {
      console.log(this.stocks.splice(0, this.stocks.length - 4));
      this.stocks.splice(0, this.stocks.length - 4);
    }

    for (let i = 0; i < this.SaveProd.length; i++) {
      if (this.SaveProd[i].category === "Плюшевые") {
        this.prod1.push({
          id: this.SaveProd[i].id,
          title: this.SaveProd[i].title,
          content: this.SaveProd[i].content,
          img: this.SaveProd[i].img,
          price: this.SaveProd[i].price,
        });
      }
    }

    if (this.prod1.length > 4) {
      // console.log(this.prod1.splice(0, this.prod1.length - 4))
      this.prod1.splice(0, this.prod1.length - 4);
    }

    for (let i = 0; i < this.SaveProd.length; i++) {
      if (this.SaveProd[i].category === "Пластмассовые") {
        this.prod2.push({
          id: this.SaveProd[i].id,
          title: this.SaveProd[i].title,
          content: this.SaveProd[i].content,
          img: this.SaveProd[i].img,
          price: this.SaveProd[i].price,
        });
      }
    }

    if (this.prod2.length > 4) {
      // console.log(this.prod2.splice(0, this.prod2.length - 4))
      this.prod2.splice(0, this.prod2.length - 4);
    }

    for (let i = 0; i < this.SaveProd.length; i++) {
      if (this.SaveProd[i].category === "Конструктор") {
        this.prod3.push({
          id: this.SaveProd[i].id,
          title: this.SaveProd[i].title,
          content: this.SaveProd[i].content,
          img: this.SaveProd[i].img,
          price: this.SaveProd[i].price,
        });
      }
    }

    if (this.prod3.length > 4) {
      // console.log(this.prod3.splice(0, this.prod3.length - 4))
      this.prod3.splice(0, this.prod3.length - 4);
    }
  },
};
</script>

<style lang="scss">
.main {
  z-index: 1000;
  margin: 0 150px;

  .content {
    width: 100%;
    margin-top: 15px;

    .info_toys {
      width: 100%;
      margin: 80px 0;
      display: flex;

      img {
        width: 60%;
        height: 530px;
        margin-right: 30px;
      }

      h3 {
        font-size: 2.3rem;
        margin: 10px;
      }

      p {
        margin: 20px 10px;
        font-size: 22px;
        text-align: justify;
      }

      button {
        margin: 10px;
        width: 170px;
        height: 40px;
        color: white;
        background-color: rgb(226, 106, 36);
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }

    .info_gift-card {
      width: 100%;
      margin: 80px 0;
      display: flex;
      justify-content: space-between;

      img {
        width: 60%;
        height: 530px;
      }

      h3 {
        font-size: 2.3rem;
        margin: 10px;
      }

      p {
        margin: 20px 10px;
        font-size: 22px;
      }

      button {
        margin: 10px;
        width: 170px;
        height: 40px;
        color: white;
        background-color: rgb(226, 106, 36);
        font-size: 18px;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }

    .stock {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
      margin-top: 20px;

      .stock_block {
        width: 350px;

        img {
          width: 100%;
          height: 350px;
          border-radius: 5px;
        }

        .stock_title {
          font-size: 23px;
          font-weight: bold;
          transition: color 0.2s ease-in;
          cursor: pointer;
        }
      }
    }

    .prod {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 20px;
      margin-top: 20px;

      .prod_block {
        width: 350px;

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

    .info_gift {
      height: 450px;
      background: url("https://images.unsplash.com/photo-1547398847-19d7560a6257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80")
        no-repeat;
      background-size: cover;
      background-position-y: -800px;
      margin: 80px 0;

      .content_gift {
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 2;
        color: white;

        div {
          padding: 45px 60px;
          font-size: 25px;

          p {
            margin: 40px 0;
          }

          button {
            width: 170px;
            height: 40px;
            color: white;
            background-color: rgb(226, 106, 36);
            font-size: 18px;
            outline: none;
            border: none;
            cursor: pointer;
          }
        }
      }
    }

    .illustrashion {
      display: flex;
      justify-content: space-between;
      margin: -25px 0;

      .ill_slot {
        height: 350px;
        width: 350px;
        background-size: cover;
      }
    }
  }
}
</style>