<template>
  <div>
    <div class="app_block">
      <Head @OpenModal="OpenModalMenu" />
      <HeadList />
      <transition name="fade">
        <modal-menu v-if="ModalMenuVisible" @HideModal="HideModalMenu">
          <ModalMenu />
        </modal-menu>
      </transition>
      <router-view></router-view>

      <div class="btn_topScroll" @click="fSrollTop">
        <i class="fas fa-arrow-up icon"></i>
      </div>

      <Footer class="app_footer" />
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head/Head.vue";
import ModalMenu from "@/components/ModalMenu/ModalMenu.vue";
import Footer from "@/components/Footer/Footer.vue";
import HeadList from "@/components/Head/HeadList.vue";

export default {
  components: {
    Head,
    ModalMenu,
    Footer,
    HeadList,
  },

  data() {
    return {
      ModalMenuVisible: false,
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
    };
  },
  methods: {
    OpenModalMenu() {
      this.ModalMenuVisible = true;
    },

    HideModalMenu() {
      this.ModalMenuVisible = false;
    },
    onScroll() {
      if (window.scrollY >= 600) {
        let btnScroll = document.querySelector(".btn_topScroll");

        btnScroll.style.opacity = "1";
        btnScroll.style.cursor = "pointer";
      } else {
        let btnScroll = document.querySelector(".btn_topScroll");

        btnScroll.style.opacity = "0";
        btnScroll.style.cursor = "default";
      }
    },
    fSrollTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    if (localStorage.getItem("dateoflog")) {
    } else {
      localStorage.setItem("dateoflog", JSON.stringify(new Date()));

      localStorage.setItem(
        "SaveBlogs",
        JSON.stringify([
          {
            content:
              "В интернет-магазине на InSales Вы можете вести блог магазина или новостную ленту – это отличный способ привлекать дополнительных покупателей из поисковых систем не только за счет коммерческих запросов, но и за счет информационных.\n\nРассказывайте вашим покупателям о новинках в вашем магазине, или просто полезную информацию о товарах вашей тематики и новостях рынка!",
            creater: "YanSa",
            dateOfUpdate: "03.06.2022",
            dateОfСreation: "03.06.2022",
            id: 0,
            img: "https://static.insales-cdn.com/r/GgMF1aakIuI/rs:fit:600:600:1/plain/images/articles/1/7689/1211913/%D0%A4%D0%BE%D1%82%D0%BE-2.jpg@webp",
            title: "Упакуем бесплатно ваш подарок, если нужно!",
            updater: "nick",
          },
          {
            content:
              "В интернет-магазине на InSales Вы можете вести блог магазина или новостную ленту – это отличный способ привлекать дополнительных покупателей из поисковых систем не только за счет коммерческих запросов, но и за счет информационных.\n\nРассказывайте вашим покупателям о новинках в вашем магазине, или просто полезную информацию о товарах вашей тематики и новостях рынка!",
            creater: "nick",
            dateOfUpdate: "04.06.2022",
            dateОfСreation: "04.06.2022",
            id: 1,
            img: "https://static.insales-cdn.com/r/xGswSizGrH8/rs:fit:1408:0:1/q:100/plain/images/articles/1/7687/1211911/%D0%A4%D0%BE%D1%82%D0%BE.jpg@webp",
            title: "Скидка на все сладости.",
            updater: "nick",
          },
          {
            content:
              "В интернет-магазине на InSales Вы можете вести блог магазина или новостную ленту – это отличный способ привлекать дополнительных покупателей из поисковых систем не только за счет коммерческих запросов, но и за счет информационных.\n\nРассказывайте вашим покупателям о новинках в вашем магазине, или просто полезную информацию о товарах вашей тематики и новостях рынка!",
            creater: "nick",
            dateOfUpdate: "",
            dateОfСreation: "04.06.2022",
            id: 2,
            img: "https://static.insales-cdn.com/r/M4cUe1S4M4Y/rs:fit:1408:0:1/q:100/plain/images/articles/1/7690/1211914/%D0%A4%D0%BE%D1%82%D0%BE-1.jpg@webp",
            title: "-20% На все керамические изделия",
            updater: "",
          },
          {
            content:
              "В интернет-магазине на InSales Вы можете вести блог магазина или новостную ленту – это отличный способ привлекать дополнительных покупателей из поисковых систем не только за счет коммерческих запросов, но и за счет информационных.\n\nРассказывайте вашим покупателям о новинках в вашем магазине, или просто полезную информацию о товарах вашей тематики и новостях рынка!",
            creater: "nick",
            dateOfUpdate: "",
            dateОfСreation: "04.06.2022",
            id: 3,
            img: "https://static.insales-cdn.com/r/k_3u2syDkXE/rs:fit:1408:0:1/q:100/plain/images/articles/1/7691/1211915/%D0%A4%D0%BE%D1%82%D0%BE-3.jpg@webp",
            title: "Распродажа костюмов на хэллоуин",
            updater: "",
          },
        ])
      );

      localStorage.setItem(
        "SaveSlide",
        JSON.stringify([
          {
            id: 0,
            img: "https://images.unsplash.com/photo-1514192631-251f5f0b14f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Специальное предложение для новых клиентов.",
          },
          {
            id: 1,
            img: "https://images.unsplash.com/photo-1488654091480-0a2443430a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80",
            title: "Тема слайдера!",
          },
          {
            id: 2,
            img: "https://images.unsplash.com/photo-1619768470847-f7db55f5d72e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
            title: "Тема слайдера!",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1582845512747-e42001c95638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Уткиииии!!!!",
          },
          {
            id: 4,
            img: "https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1495&q=80",
            title: "Кубики рубики, а не это ваше...",
          },
          {
            id: 5,
            img: "https://images.unsplash.com/photo-1615678857339-4e7e51ce22db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            title: "Котики!",
          },
        ])
      );

      localStorage.setItem(
        "SaveUsers",
        JSON.stringify([
          {
            block: false,
            email: "nick@",
            fio: "nick",
            id: 0,
            pass: "23456789",
            tel: "+586979453",
          },
          {
            block: false,
            email: "yan@",
            fio: "YanSa",
            id: 1,
            pass: "12345678",
            tel: "+897693495395",
          },
          {
            block: false,
            email: "slava@",
            fio: "Slava",
            id: 2,
            pass: "34567890",
            tel: "+4598689845698",
          },
          {
            block: false,
            email: "zak@mail.ru",
            fio: "Zak",
            id: 3,
            pass: "09876543",
            tel: "+9869468945",
          },
        ])
      );

      localStorage.setItem(
        "SaveProd",
        JSON.stringify([
          {
            category: "Плюшевые",
            comments: [
              {
                id: 0,
                name: "nick",
                email: "nick@",
                content: "цйуацуапцуп",
                Point: 4,
              },
            ],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 0,
            img: "https://static.insales-cdn.com/r/fft4T1Pxhe0/rs:fit:1000:0:1/q:100/plain/images/products/1/622/390103662/misha_0000_1.jpg@webp",
            price: "2590.00",
            rating: 4,
            title:
              "Мягкая игрушка медведь Boiko, плюшевый мишка, бежевый с бантом",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 1,
            img: "https://static.insales-cdn.com/r/KOt5gcL7dQk/rs:fit:1000:1000:1/plain/images/products/1/1192/390104232/tovar_0000_%D0%A1%D0%BB%D0%BE%D0%B9_5.jpg@webp",
            price: "490.00",
            rating: 0,
            title: "Плюшевая игрушка, серый слоник",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 2,
            img: "https://static.insales-cdn.com/r/bxpd6gGdTYo/rs:fit:1000:1000:1/plain/images/products/1/2165/390105205/tovar_0002_%D0%A1%D0%BB%D0%BE%D0%B9_3.jpg@webp",
            price: "420.00",
            rating: 0,
            title: "Мягкая игрушка верблюд с двумя горбами",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 3,
            img: "https://static.insales-cdn.com/r/cYaV4Q9OntI/rs:fit:1000:1000:1/plain/images/products/1/5702/390108742/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_%D0%B7%D0%B0%D0%B9%D0%BA%D0%B0__%D0%B2%D1%8F%D0%B7%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9.jpg@webp",
            price: "800.00",
            rating: 0,
            title: "Белый зайка, вязанный",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 4,
            img: "https://static.insales-cdn.com/r/X9MIsLpfQMo/rs:fit:1000:1000:1/plain/images/products/1/5927/390108967/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_%D0%BC%D0%B8%D1%88%D0%BA%D0%B0__%D0%BF%D0%BB%D1%8E%D0%B5%D0%B2%D1%8B%D0%B9__%D1%81_%D1%88%D0%B0%D1%80%D1%84%D0%BE%D0%BC.jpg@webp",
            price: "1190.00",
            rating: 0,
            title: "Белый мишка, плюшевый, с шарфом",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 5,
            img: "https://static.insales-cdn.com/r/8x2OLNSBH04/rs:fit:1000:1000:1/plain/images/products/1/744/390111976/%D0%91%D1%8B%D0%BA_%D0%BF%D0%BB%D1%8E%D1%88%D0%B5%D0%B2%D1%8B%D0%B9__%D0%B2_%D0%BA%D1%83%D1%80%D1%82%D0%BE%D1%87%D0%BA%D0%B5.jpg@webp",
            price: "685.00",
            rating: 0,
            title: "Бык плюшевый, в курточке",
          },
          {
            category: "Плюшевые",
            comments: [
              {
                id: 0,
                name: "nick",
                email: "nick@",
                content: "sdgaewrhgaewrh",
                Point: 3,
              },
              {
                id: 1,
                name: "nick",
                email: "nick@",
                content: "awegweg",
                Point: 2,
              },
              {
                id: 2,
                name: "nick",
                email: "nick@",
                content: "sdgaerhgawerg",
                Point: 2,
              },
            ],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 6,
            img: "https://static.insales-cdn.com/r/ak_b9kPaziI/rs:fit:1000:1000:1/plain/images/products/1/1246/390112478/%D0%94%D0%B2%D0%B0_%D0%BF%D0%BB%D1%8E%D1%88%D0%B5%D0%B2%D1%8B%D1%85_%D0%B1%D1%8B%D0%BA%D0%B0_%D0%B2_%D1%88%D0%B0%D1%80%D1%84%D0%B8%D0%BA%D0%B0%D1%85.jpg@webp",
            price: "691.00",
            rating: 7,
            title: "Два плюшевых быка в шарфиках",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 7,
            img: "https://static.insales-cdn.com/r/l5O8S228HJE/rs:fit:1000:1000:1/plain/images/products/1/1566/390112798/%D0%95%D0%B4%D0%B8%D0%BD%D0%BE%D1%80%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BF%D0%BB%D1%8E%D1%88%D0%B5%D0%B2%D1%8B%D0%B9__%D1%81_%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D0%BE%D0%B9_%D1%8E%D0%B1%D0%BA%D0%BE%D0%B9.jpg@webp",
            price: "725.00",
            rating: 0,
            title: "Единорожка плюшевый, с розовой юбкой",
          },
          {
            category: "Плюшевые",
            comments: [],
            content:
              "Есть игрушки, которые хочется всегда держать, чувствуя теплоту и нежность от них. Коллекция Misha именно такие. Стильные, красивые и милые мишки, с добрым характером. Misha идеально впишутся в интерьер, добавив нежности, уюта. Всегда актуальная классика в авторском исполнении, с безупречным качеством, делают эти игрушки прекрасным подарком.",
            id: 8,
            img: "https://static.insales-cdn.com/r/3gpxijBcpbY/rs:fit:1000:1000:1/plain/images/products/1/1656/390112888/%D0%97%D0%B0%D0%B9%D0%BA%D0%B0_%D0%BF%D0%BB%D1%8E%D1%88%D0%B5%D0%B2%D1%8B%D0%B9.jpg@webp",
            price: "1290.00",
            rating: 0,
            title: "Зайка плюшевый",
          },
          {
            category: "Пластмассовые",
            comments: [],
            content: "Описание товара.",
            id: 9,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6931798828146_1.jpg",
            price: "500.00",
            rating: 0,
            title: "Настольная игра (хоккей)",
          },
          {
            category: "Пластмассовые",
            comments: [],
            content: "Описание товара.",
            id: 10,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6931798828160_1.jpg",
            price: "500.00",
            rating: 0,
            title: "Настольная игра (футбол)",
          },
          {
            category: "Пластмассовые",
            comments: [],
            content: "Описание товара.",
            id: 11,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6931798828139_1.jpg",
            price: "500.00",
            rating: 0,
            title: "Настольная игра (регби)",
          },
          {
            category: "Пластмассовые",
            comments: [],
            content: "Описание товара.",
            id: 12,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6931798826104_1.jpg",
            price: "500.00",
            rating: 0,
            title: "Настольная игра мини-боулинг",
          },
          {
            category: "Конструктор",
            comments: [],
            content: "Описание товара.",
            id: 13,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6941447597156_1.jpg",
            price: "437.00",
            rating: 0,
            title:
              "Игрушка развивающая строительные блоки Rainforest Animals (Шимпанзе, 102 шт)",
          },
          {
            category: "Конструктор",
            comments: [],
            content: "Описание товара.",
            id: 14,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6941447597132_1.jpg",
            price: "352.00",
            rating: 0,
            title:
              "Игрушка развивающая строительные блоки Rainforest Animals (Тигр, 73 шт)",
          },
          {
            category: "Конструктор",
            comments: [],
            content: "Описание товара.",
            id: 15,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6941447597149_1.jpg",
            price: "532.00",
            rating: 0,
            title:
              "Игрушка развивающая строительные блоки Rainforest Animals (Крокодил, 71 шт)",
          },
          {
            category: "Конструктор",
            comments: [],
            content: "Описание товара.",
            id: 16,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6955265615152_1.jpg",
            price: "856.00",
            rating: 0,
            title:
              "Игрушка развивающая строительные блоки City Corner (кафе, 332 шт)",
          },
          {
            category: "Конструктор",
            comments: [],
            content: "Описание товара.",
            id: 17,
            img: "https://miniso.by/media/catalog/product/cache/1531e7e157af97ed696927ab3c833315/6/9/6941447597187_1.jpg",
            price: "436.00",
            rating: 0,
            title:
              "Игрушка развивающая строительные блоки Grassland Animals (Носорог, 116 шт)",
          },
        ])
      );
    }

    this.$store.state.isAuth = localStorage.getItem("isAuth");

    if (this.SaveBuy) {
    } else {
      localStorage.setItem("SaveBuy", JSON.stringify([]));
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Oswald:wght@300&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Oswald", sans-serif;
  // position: relative;

  input {
    outline: none;
  }

  textarea {
    outline: none;
  }
}

.app_footer {
  margin-top: auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.history {
  margin-bottom: 30px;
  ul {
    list-style-type: none;
    display: flex;
    font-size: 18px;
    transition: color 0.2s ease-in;

    li {
      margin: 0 10px;
      cursor: pointer;

      &:hover {
        color: #6ebcda;
      }
    }
  }
}

.btn_topScroll {
  position: fixed;
  top: 90%;
  right: 50px;
  height: 45px;
  width: 45px;
  border-radius: 90px;
  color: white;
  background-color: rgb(226, 106, 36);
  opacity: 0;
  z-index: 1000;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
  }
}
</style>