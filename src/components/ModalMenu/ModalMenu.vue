<template>
  <div class="modal___menu">
    <div class="modal___bg" @click="HideModalMenu">
      <div @click.stop class="modal___window">
        <h3>Меню</h3>
        <ul>
          <li @click="fMainMenu">Главная</li>
          <li @click="fCatalogMenu">Каталог</li>
          <li @click="fAboutShop">О магазине</li>
          <li @click="fUserRoomMenu">Личный кабинет</li>
          <li @click="fBlogMenu">Блог</li>
        </ul>

        <div class="contact">
          <h4>Контакты</h4>
          <span>+7(800) 800-80-80</span>
          <br />
          <span>г. Москва, ул. Новорязанская, 18, стр. 11</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-menu",

  methods: {
    HideModalMenu() {
      this.$emit("HideModal");
    },

    fMainMenu() {
      this.$router.push("/");
      this.$emit("HideModal");
    },

    fCatalogMenu() {
      this.$router.push("/Catalog");
      this.$emit("HideModal");
    },

    fAboutShop() {
      this.$router.push("/AboutShop");
      this.$emit("HideModal");
    },

    fUserRoomMenu() {
      this.$router.push("/UsersRoom");
      this.$emit("HideModal");
    },

    fBlogMenu() {
      this.$router.push("/Blog");
      this.$emit("HideModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal___menu {
  position: relative;
  z-index: 10;

  .modal___bg {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .modal___window {
    position: fixed;
    left: 0;
    top: 0;
    width: 400px;
    height: 100vh;
    background-color: white;
    padding: 70px 25px;

    h3 {
      font-size: 40px;
    }

    ul {
      border-top: 1px solid rgb(163, 163, 163);
      border-bottom: 1px solid rgb(163, 163, 163);
      font-size: 22px;
      list-style-type: none;
      margin: 100px 0;
      padding: 20px 0;

      li {
        margin: 20px 0;
        cursor: pointer;
        transition: color 0.2s ease-in;

        &:hover {
          color: #6ebcda;
        }
      }
    }

    .contact {
      font-size: 20px;
    }
  }
}
</style>