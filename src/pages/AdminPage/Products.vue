<template>
  <div class="admin_products">
    <transition name="fade">
      <div v-if="VisibleModalCreateProduct === true">
        <ModalCreateProduct @HideModalProduct="fHideModalProduct" />
      </div>
    </transition>
    <transition name="fade">
      <div v-if="VisibleModalUpdateProduct === true">
        <ModalUpdateProduct @HideModalProduct="fHideModalProduct" />
      </div>
    </transition>

    <h2>Список товаров</h2>

    <input
      type="submit"
      value="Добавить новый товар"
      class="create_prod"
      @click="fOpenModalCreateProduct"
    />

    <div class="list_prod">
      <transition-group name="list">
        <div class="prod" v-for="prod in prods" :key="prod.id">
          <div class="prod_info">
            <div class="prod_title">
              <h3>{{ prod.title }}</h3>
            </div>

            <div class="prod_body">
              {{ prod.content }}
            </div>
          </div>

          <div class="prod_stat">
            <span>Цена:</span> {{ prod.price }} ₽
            <div style="display: flex">
              <span>Рейтинг:</span>

              <div
                style="margin: 0px 10px"
                v-if="this.SaveProd[prod.id].comments.length === 0"
              >
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>

              <div
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length ===
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length <=
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
                style="margin: 0px 10px"
                v-else-if="
                  this.SaveProd[prod.id].rating /
                    this.SaveProd[prod.id].comments.length >=
                  5
                "
              >
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <div v-if="prod.comments.length === 0"><span>Отзывы:</span> 0</div>
            <div v-else>
              <span>Отзывы:</span> {{ prod?.comments.length }} чел.
            </div>
          </div>

          <div class="prod_btn">
            <i
              class="far fa-folder icon"
              @click="$router.push(`/ProductId/${prod.id}`)"
            ></i>
            <i class="fas fa-pencil-alt icon" @click="fUpdateProd(prod.id)"></i>
            <i class="far fa-trash-alt icon" @click="fDeleteProd(prod.id)"></i>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ModalCreateProduct from "@/components/ModalMenu/ModalCreateProduct.vue";
import ModalUpdateProduct from "@/components/ModalMenu/ModalUpdateProduct.vue";

export default {
  components: {
    ModalCreateProduct,
    ModalUpdateProduct,
  },
  data() {
    return {
      VisibleModalCreateProduct: false,
      VisibleModalUpdateProduct: false,
      prods: [
        // {
        //   id: 0,
        //   title: "",
        //   content: "",
        //   price: "",
        //   category: "",
        //   img: "",
        //   rating: "",
        //   comments: "",
        // },
      ],
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
    };
  },
  methods: {
    fOpenModalCreateProduct() {
      this.VisibleModalCreateProduct = true;
    },
    fHideModalProduct() {
      this.VisibleModalCreateProduct = false;
      this.VisibleModalUpdateProduct = false;

      if (localStorage.getItem("newProd")) {
        this.prods.push(JSON.parse(localStorage.getItem("newProd")));
        localStorage.removeItem("newProd");
      }

      localStorage.removeItem("activeProd");
    },
    fUpdateProd(id) {
      this.VisibleModalUpdateProduct = true;

      let activeProd = {
        id: this.prods[id].id,
        title: this.prods[id].title,
        content: this.prods[id].content,
        price: this.prods[id].price,
        category: this.prods[id].category,
        img: this.prods[id].img,
        rating: this.prods[id].rating,
        comments: this.prods[id].comments,
      };

      localStorage.setItem("activeProd", JSON.stringify(activeProd));
    },
    fDeleteProd(id) {
      this.prods.splice(id, 1);

      for (let i = 0; i < this.prods.length; i++) {
        this.prods[i].id = i;
      }

      localStorage.setItem("SaveProd", JSON.stringify(this.prods));
    },
  },
  mounted() {
    if (this.SaveProd) {
      for (let i = 0; i < this.SaveProd.length; i++) {
        this.prods.push({
          id: this.SaveProd[i].id,
          title: this.SaveProd[i].title,
          content: this.SaveProd[i].content,
          price: this.SaveProd[i].price,
          category: this.SaveProd[i].category,
          img: this.SaveProd[i].img,
          rating: this.SaveProd[i].rating,
          comments: this.SaveProd[i].comments,
        });
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.admin_products {
  .create_prod {
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

  .list_prod {
    margin: 20px 0;

    .prod {
      height: 90px;
      padding: 15px;
      background: rgba(194, 194, 194, 0.226);
      border-radius: 5px;
      display: flex;
      margin: 20px 0;

      .prod_info {
        width: 50%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        line-height: 1.3em;
        height: 5.4em;

        .prod_body {
          margin-top: 5px;
        }
      }

      .prod_stat {
        span {
          font-weight: bold;
        }
        margin: auto 0 auto 30px;
        width: 30%;
      }

      .prod_btn {
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