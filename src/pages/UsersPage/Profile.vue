<template>
  <div class="profile">
    <h2 @click="test">Профиль</h2>

    <p><span>ФИО:</span> {{ this.activeAccount.fio }}</p>
    <p><span>Номер телефона:</span> {{ this.activeAccount.tel }}</p>
    <p><span>Почта:</span> {{ this.activeAccount.email }}</p>
    <div
      style="
        color: rgb(226, 106, 36);
        cursor: pointer;
        font-size: 18px;
        width: 120px;
      "
      @click="clickSwitchPage"
    >
      Изменить данные.
    </div>
    <div
      style="
        color: rgb(226, 106, 36);
        cursor: pointer;
        font-size: 18px;
        width: 170px;
        margin-top: 20px;
      "
      @click="fAdminPass"
    >
      Профиль администратора.
    </div>

    <div v-if="isAdmin === true">
      <ul>
        <li @click="fSwitchPage" value="1">Пользователи</li>
        <li @click="fSwitchPage" value="2">Товары</li>
        <li @click="fSwitchPage" value="3">Блог</li>
        <li @click="fSwitchPage" value="4">Слайдер</li>
      </ul>

      <div class="admin_panel">
        <div v-if="codePanel === 1"><Users /></div>
        <div v-else-if="codePanel === 2"><Products /></div>
        <div v-else-if="codePanel === 3"><BlogSetting /></div>
        <div v-else-if="codePanel === 4"><SlaiderImg /></div>
      </div>
    </div>
  </div>
</template>

<script>
import Users from "@/pages/AdminPage/Users.vue";
import Products from "@/pages/AdminPage/Products.vue";
import BlogSetting from "@/pages/AdminPage/BlogSetting.vue";
import SlaiderImg from "@/pages/AdminPage/SlaiderImg.vue";

export default {
  components: {
    Users,
    Products,
    BlogSetting,
    SlaiderImg,
  },
  data() {
    return {
      activeAccount: JSON.parse(localStorage.getItem("activeAccount")),
      isAdmin: false,
      codePanel: 1,
    };
  },
  methods: {
    clickSwitchPage() {
      this.$emit("clickSwitchPage");
    },
    fAdminPass() {
      if (prompt("Пароль:") === "admin") {
        this.isAdmin = true;
      }
    },
    fSwitchPage(event) {
      this.codePanel = event.target.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  h2 {
    font-size: 42px;
    margin: 0 0 20px 0;
  }

  p {
    font-size: 20px;
    margin: 0 0 10px 0;
  }

  span {
    font-weight: bold;
  }

  ul {
    color: rgb(226, 106, 36);
    cursor: pointer;
    font-size: 18px;
    width: 170px;
    margin-top: 20px;
    list-style-type: none;
    display: flex;

    li {
      margin-right: 15px;
      cursor: pointer;
    }
  }

  .admin_panel {
    margin: 30px 0;
  }
}
</style>