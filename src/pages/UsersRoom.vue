<template>
  <div class="users_room">
    <div class="panel_left">
      <ul>
        <li class="list_page" @click="fSwitchPage" value="1">Профиль</li>
        <li class="list_page" @click="fSwitchPage" value="2">
          История заказов
        </li>
        <li class="list_page" @click="fSwitchPage" value="3">Адрес доставки</li>
        <li class="list_page" @click="fSwitchPage" value="4">
          Скидки, бонусы и купоны
        </li>
        <li class="list_page" @click="fSwitchPage" value="5">
          Контактные данные
        </li>
        <li class="list_page" @click="fSwitchPage" value="6">Выход</li>
      </ul>
    </div>
    <div class="panel_right">
      <div v-if="codePage === 1"><Profile @clickSwitchPage="fSwitch" /></div>
      <div v-else-if="codePage === 2"><History /></div>
      <div v-else-if="codePage === 3"><Address /></div>
      <div v-else-if="codePage === 4"><Bonuses /></div>
      <div v-else-if="codePage === 5"><Contacts /></div>
    </div>
  </div>
</template>

<script>
import Profile from "@/pages/UsersPage/Profile.vue";
import History from "@/pages/UsersPage/History.vue";
import Address from "@/pages/UsersPage/Address.vue";
import Bonuses from "@/pages/UsersPage/Bonuses.vue";
import Contacts from "@/pages/UsersPage/Contacts.vue";

export default {
  components: {
    Profile,
    History,
    Address,
    Bonuses,
    Contacts,
  },

  data() {
    return {
      codePage: 1,
    };
  },

  methods: {
    fSwitchPage(event) {
      this.codePage = event.target.value;

      if (this.codePage === 6) {
        localStorage.removeItem("isAuth");
        localStorage.removeItem("activeAccount");
        this.$router.push("/LogRoom");

        this.$store.state.isAuth = null;
      }
    },

    fSwitch() {
      this.codePage = 5;
    },
  },
};
</script>

<style lang="scss" scoped>
.users_room {
  margin: 30px 150px;
  display: flex;

  .panel_left {
    margin-top: 20px;
    margin-right: 80px;

    ul {
      font-size: 18px;
      text-decoration: underline;
      list-style-type: none;
      color: rgb(226, 106, 36);
      cursor: pointer;

      li {
        margin-bottom: 10px;
      }
    }
  }

  .panel_right {
    width: 100%;
  }
}
</style>