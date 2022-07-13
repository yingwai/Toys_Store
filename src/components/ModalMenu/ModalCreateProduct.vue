<template>
  <div class="modal___menu">
    <div class="modal___bg" @click="fHide">
      <div @click.stop class="modal___window">
        <div class="title_modal">
          <h3>Создание нового товара</h3>
        </div>
        <div class="body">
          <div style="display: flex; margin: 20px 0; gap: 15px">
            Обложка:
            <input type="file" class="file" accept=".png, .jpg, .jpeg" />
            <input
              type="text"
              class="btn_file"
              placeholder="Ссылка на изображение"
            />
          </div>
          <input
            type="text"
            class="btn_body title"
            placeholder="Наименование товара"
            maxlength="80"
          />

          <div style="display: flex">
            <input
              type="number"
              step="10.00"
              class="btn_body price"
              placeholder="Цена товара, 0.00₽"
              maxlength="55"
            />
            <select name="category" class="btn_body category">
              <option value="Выберите категорию игрушки">
                Выберите категорию игрушки
              </option>
              <option value="Плюшевые">Плюшевые</option>
              <option value="Пластмассовые">Пластмассовые</option>
              <option value="Конструктор">Конструктор</option>
            </select>
          </div>
          <textarea
            name="text"
            id="text"
            cols="30"
            rows="10"
            class="btn_body content"
            placeholder="Описание товара"
          ></textarea>
        </div>
        <div class="footer">
          <input type="submit" value="Добавить" @click="fAddProd" />
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
      SaveProd: JSON.parse(localStorage.getItem("SaveProd")),
    };
  },
  methods: {
    fAddProd() {
      let newProd;
      let newId;
      let btnTitle = document.querySelector(".title");
      let btnPrice = document.querySelector(".price");
      let btnCategory = document.querySelector(".category");
      let btnContent = document.querySelector(".content");
      let btnFile = document.querySelector(".btn_file");

      if (btnTitle.value.length >= 3) {
        if (btnContent.value.length >= 3) {
          if (btnPrice.value.length >= 3) {
            if (btnCategory.value != "Выберите категорию игрушки") {
              let newPrice = Number(btnPrice.value).toFixed(2)

              if (this.SaveProd) {
                newId = this.SaveProd.length;
                newProd = {
                  id: newId,
                  title: btnTitle.value,
                  content: btnContent.value,
                  price: newPrice,
                  category: btnCategory.value,
                  img: btnFile.value,
                  rating: 0,
                  comments: [],
                };
              } else {
                newId = 0;
                newProd = [
                  {
                    id: newId,
                    title: btnTitle.value,
                    content: btnContent.value,
                    price: btnPrice.value,
                    category: btnCategory.value,
                    img: btnFile.value,
                    rating: 0,
                    comments: [],
                  },
                ];
              }

              if (this.SaveProd) {
                this.SaveProd.push(newProd);
                localStorage.setItem("SaveProd", JSON.stringify(this.SaveProd));
                localStorage.setItem("newProd", JSON.stringify(newProd));
              } else {
                localStorage.setItem("SaveProd", JSON.stringify(newProd));
                localStorage.setItem("newProd", JSON.stringify(newProd));
              }

              this.$emit("HideModalProduct");

              btnTitle.value = "";
              btnContent.value = "";
              btnPrice.value = "";
              btnCategory.value = "Выберите категорию игрушки";
              btnFile.value = "";
            } else {
              alert("Выберите категорию игрушки.");
            }
          } else {
            alert("Заполните поле цены товара.");
          }
        } else {
          alert("Заполните или увеличьте описание товара");
        }
      } else {
        alert("Заполните наименование товара");
      }
    },
    fHide() {
      this.$emit("HideModalProduct");
    },
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

          &.title {
            height: 40px;
            font-size: 20px;
            font-weight: bold;
            margin: 0 0 20px 0;
            border: 1px solid black;
            border-radius: 3px;
          }

          &.price {
            height: 30px;
            font-size: 16px;
            margin: 0 0 20px 0;
            border: 1px solid black;
            border-radius: 3px;
          }

          &.category {
            height: 42px;
            width: 50%;
            font-size: 16px;
            margin: 0 -12px 20px 50px;
            border: 1px solid black;
            border-radius: 3px;
          }

          &.content {
            height: 60%;
            resize: none;
            font-size: 16px;
            border: 1px solid black;
            border-radius: 3px;
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