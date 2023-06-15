<template>
  <div class="corf_page">
    <div class="history">
      <ul>
        <li @click="$router.push('/')">Главная</li>
        /
        <li>Корзина</li>
      </ul>
    </div>

    <div class="content">
      <h2>Корзина</h2>

      <div v-if="this.buys.length === 0">Корзина пуста.</div>
      <div v-else class="corf_list">
        <div>
          <div v-for="corf in buys" :key="corf.id" class="corf">
            <img :src="corf.count[0].img" />

            <div class="corf_info">
              <div class="corf_head">
                <h3 @click="$router.push(`/ProductId/${corf.count[0].id}`)">
                  {{ corf.count[0].title }}
                </h3>

                <i
                  class="fas fa-times"
                  style="cursor: pointer; margin: auto 0"
                  @click="fDelete(corf.id)"
                ></i>
              </div>

              <span class="corf_price">{{ corf.count[0].price }} ₽</span>

              <div class="corf_footer">
                <div>
                  <input type="submit" value="-" @click="fIncrBuy(corf.id)" />
                  <input type="text" readonly :value="corf.count.length" />
                  <input type="submit" value="+" @click="fAddBuy(corf.id)" />
                </div>

                <div>
                  {{
                    Number(corf.count[0].price * corf.count.length).toFixed(2)
                  }}
                  ₽
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="corf_pay">
          <h2>Итого к оплате: {{ sumPay.toFixed(2) }} ₽</h2>

          <input type="submit" value="К оплате" @click="fPay" />
        </div>
      </div>
    </div>

    <h2 style="font-size: 30px; margin-top: 40px">Каталог</h2>
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
</template>

<script>
export default {
  data() {
    return {
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
      activeAccount: JSON.parse(localStorage.getItem("activeAccount")),
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
      sumPay: 0,
      prods: [],
      buys: [],
    };
  },
  methods: {
    fInBuyCorf(id) {
      this.SaveBuy.push(this.SaveProd[id]);

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      this.$store.state.nCountToysCorf += 1;
      location.reload();
    },
    fDelete(id) {
      this.SaveBuy.splice(this.buys[id].slot, this.buys[id].count.length);

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      location.reload();
    },
    fAddBuy(id) {
      this.SaveBuy.push(this.SaveProd[this.buys[id].count[0].id]);

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      this.$store.state.nCountToysCorf += 1;
      location.reload();
    },
    fIncrBuy(id) {
      this.SaveBuy.splice(this.buys[id].slot, 1);

      localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

      this.$store.state.nCountToysCorf -= 1;
      location.reload();
    },
    fPay() {
      alert("К тебе выехали, готовь деньжища");

      localStorage.removeItem("SaveBuy");

      location.reload();
    },
  },
  mounted() {
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

    if (this.prods.length > 4) {
      this.prods.splice(0, this.prods.length - 4);
    }

    this.SaveBuy.sort((a, b) => {
      return a.id - b.id;
    });
    localStorage.setItem("SaveBuy", JSON.stringify(this.SaveBuy));

    if (this.SaveBuy.length != 0) {
      for (let i = 0; i < this.SaveBuy.length; i++) {
        if (this.buys.length === 0) {
          this.buys.push({
            id: this.buys.length,
            slot: i,
            count: [
              {
                id: this.SaveBuy[i].id,
                title: this.SaveBuy[i].title,
                content: this.SaveBuy[i].content,
                img: this.SaveBuy[i].img,
                price: this.SaveBuy[i].price,
              },
            ],
          });
        } else if (this.SaveBuy[i - 1].id === this.SaveBuy[i].id) {
          this.buys[this.buys.length - 1].count.push({
            id: this.SaveBuy[i].id,
            title: this.SaveBuy[i].title,
            content: this.SaveBuy[i].content,
            img: this.SaveBuy[i].img,
            price: this.SaveBuy[i].price,
          });
        } else {
          this.buys.push({
            id: this.buys.length,
            slot: i,
            count: [
              {
                id: this.SaveBuy[i].id,
                title: this.SaveBuy[i].title,
                content: this.SaveBuy[i].content,
                img: this.SaveBuy[i].img,
                price: this.SaveBuy[i].price,
              },
            ],
          });
        }
        this.sumPay += Number(this.SaveBuy[i].price);
      }
    }

    // console.log(this.buys, this.SaveBuy);
  },
};
</script>

<style lang="scss" scoped>
.corf_page {
  margin: 20px 150px;

  .content {
    font-size: 22px;

    h2 {
      font-size: 42px;
      margin-bottom: 40px;
    }

    .corf_list {
      display: flex;

      .corf {
        width: 96%;
        display: flex;
        border-radius: 5px;
        margin: 0 0 40px 0;

        img {
          width: 13%;
          padding: 5px;
        }

        .corf_info {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;

          .corf_head {
            display: flex;
            justify-content: space-between;

            h3 {
              transition: color 0.2s ease-in;

              &:hover {
                color: #6ebcda;
              }
            }
          }

          .corf_price {
            color: rgb(226, 106, 36);
            font-size: 15px;
          }

          .corf_footer {
            display: flex;
            justify-content: space-between;

            input {
              width: 40px;
              height: 30px;
              font-weight: bold;
              //     margin: 20px 0;
              background-color: rgb(226, 106, 36);
              color: white;
              // font-size: 13px;
              outline: none;
              border: none;
              cursor: pointer;
              text-align: center;
            }
          }
        }
      }

      .corf_pay {
        width: 20%;
        height: 100%;
        background: rgba(194, 194, 194, 0.226);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;

        h2 {
          font-size: 28px;
          margin-bottom: 20px;
        }

        input {
          width: 100%;
          height: 40px;
          margin: auto auto;
          background-color: rgb(226, 106, 36);
          color: white;
          font-size: 18px;
          outline: none;
          border: none;
          cursor: pointer;
        }
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
}
</style>