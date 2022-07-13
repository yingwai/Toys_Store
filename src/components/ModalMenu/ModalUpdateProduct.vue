<template>
  <div class="modal___menu">
    <div class="modal___bg" @click="fHide">
      <div @click.stop class="modal___window">
        <div class="title_modal">
          <h3>Редактирование товара</h3>
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
              <option disabled value="Выберите категорию игрушки">
                Выберите категорию игрушки
              </option>
              <option value="Конструктор">Конструктор</option>
              <option value="Плюшевые">Плюшевые</option>
              <option value="Пластмассовые">Пластмассовые</option>
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
          <input type="submit" value="Изменить" @click="fUpdateProd" />
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
      activeProd: JSON.parse(localStorage.getItem("activeProd")),
    };
  },
  methods: {
    fUpdateProd() {
      let updateProd;
      let btnTitle = document.querySelector(".title");
      let btnContent = document.querySelector(".content");
      let btnPrice = document.querySelector(".price");
      let btnCategory = document.querySelector(".category");
      let btnFile = document.querySelector(".btn_file");

      if (btnTitle.value.length >= 3) {
        if (btnContent.value.length >= 3) {
          if (btnCategory.value != "Выберите категорию игрушки") {
            let newPrice = Number(btnPrice.value).toFixed(2)

            updateProd = {
              id: this.activeProd.id,
              title: btnTitle.value,
              content: btnContent.value,
              price: newPrice,
              category: btnCategory.value,
              img: btnFile.value,
              rating: this.activeProd.rating,
              comments: this.activeProd.comments,
            };

            for (let i = 0; i < this.SaveProd.length; i++) {
              if (this.activeProd.id === i) {
                this.SaveProd[i] = updateProd;
                localStorage.setItem("SaveProd", JSON.stringify(this.SaveProd));
              }
            }

            this.$emit("HideModalProduct");
          } else {
            alert("Выберите категорию игрушки.");
          }
        } else {
          alert("Заполните или увеличьте содержание блога");
        }
      } else {
        alert("Заполните тему блога");
      }
    },
    fHide() {
      this.$emit("HideModalProduct");
    },
  },
  mounted() {
    let btnTitle = document.querySelector(".title");
    let btnContent = document.querySelector(".content");
    let btnPrice = document.querySelector(".price");
    let btnCategory = document.querySelector(".category");
    let btnFile = document.querySelector(".btn_file");
    btnTitle.value = this.activeProd.title;
    btnContent.value = this.activeProd.content;
    btnPrice.value = this.activeProd.price;
    btnCategory.value = this.activeProd.category;
    btnFile.value = this.activeProd.img;
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