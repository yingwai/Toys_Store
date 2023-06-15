<template>
  <div class="admin_users">
    <h2>Список зарегистрированных пользователей</h2>

    <div class="list_users">
      <div class="users" v-for="user in users" :key="user.id">
        <div class="number_id">
          <h4>{{ user.id + 1 }}</h4>
        </div>

        <div class="data">
          <h4>Логин: </h4>
          <p>{{ user.fio }}</p>
        </div>
        <div class="data">
          <h4>Номер телефон: </h4>
          <p>{{ user.tel }}</p>
        </div>
        <div class="data">
          <h4>Email: </h4>
          <p>{{ user.email }}</p>
        </div>

        <div class="users_btn">
          <div class="btn"><i class="far fa-comments"></i></div>
          <div class="btn">
            <i
              class="fas fa-user-slash block_user"
              @click="fBlockUser(user.id)"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataUsers: JSON.parse(localStorage.getItem("SaveUsers")),
      activeAccount: JSON.parse(localStorage.getItem("activeAccount")),
      users: [],
    };
  },
  methods: {
    fBlockUser(id) {
      let blockUser = document.querySelectorAll(".users");

      if (this.DataUsers[id].block === false) {
        this.DataUsers[id].block = true;

        blockUser[id].classList.add("block");

        if (this.activeAccount.id === this.DataUsers[id].id) {
          localStorage.removeItem("isAuth");
          localStorage.removeItem("activeAccount");
          this.$router.push("/LogRoom");

          this.$store.state.isAuth = null;

          setTimeout(() => {
            alert("Ваш аккаунт был заблокирован.");
          }, 10);
        }

        localStorage.setItem("SaveUsers", JSON.stringify(this.DataUsers));
      } else {
        this.DataUsers[id].block = false;

        blockUser[id].classList.remove("block");

        localStorage.setItem("SaveUsers", JSON.stringify(this.DataUsers));
      }
    },
  },
  mounted() {
    for (let i = 0; i < this.DataUsers.length; i++) {
      this.users.push({
        id: this.DataUsers[i].id,
        fio: this.DataUsers[i].fio,
        tel: this.DataUsers[i].tel,
        email: this.DataUsers[i].email,
      });
    }

    let blockUser;
    setTimeout(() => {
      blockUser = document.querySelectorAll(".users");

      for (let i = 0; i < this.DataUsers.length; i++) {
        if (this.DataUsers[i].block === true) {
          blockUser[i].classList.add("block");
        }
      }
    }, 1);
  },
};
</script>

<style lang="scss" scoped>
.admin_users {
  .list_users {
    font-size: 18px;
    margin: 10px 0;

    .users {
      margin: 10px 0;
      background: rgba(194, 194, 194, 0.226);
      border-radius: 5px;
      padding: 15px;
      display: flex;
      align-items: center;

      &.block {
        background: rgba(172, 0, 0, 0.774);
      }

      .number_id {
        width: 5%;
      }
      .data {
        display: flex;
        width: 25%;
      }

      .users_btn {
        display: flex;

        .btn {
          margin: 0 25px;
          cursor: pointer;
          font-size: 22px;
        }
      }
    }
  }
}
</style>