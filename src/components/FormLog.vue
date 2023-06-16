<template>
  <div class="form_log">
    <p>Телефон или Email</p>
    <input type="text" value="" class="btnLog" />

    <p>Пароль</p>
    <input type="password" value="" class="btnLog" />

    <div>
      <button @click="clickAuth">Войти</button>
      <span @click="clickRes">Восстановить пароль</span>
      <span @click="clickReg">Зарегистрироваться</span>
    </div>
    <div class="error"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataUsers: JSON.parse(localStorage.getItem("SaveUsers")),
      objDataUsers: {
        fio: ``,
        tel: ``,
        email: ``,
        pass: ``,
        id: ``,
        block: ``,
      },
    };
  },
  methods: {
    clickReg() {
      this.$emit("clickReg");
    },
    clickRes() {
      this.$emit("clickRes");
    },
    clickAuth() {
      let btnLog = document.querySelectorAll(".btnLog");
      let error = document.querySelector(".error");
      let beAcc = false;
      let bePass = false;
      let isBlock = false;

      for (let i = 0; i < this.DataUsers.length; i++) {
        if (
          btnLog[0].value === this.DataUsers[i].email ||
          btnLog[0].value === this.DataUsers[i].tel
        ) {
          beAcc = true;

          if (btnLog[1].value === this.DataUsers[this.DataUsers[i].id].pass) {
            bePass = true;

            this.objDataUsers = {
              fio: this.DataUsers[this.DataUsers[i].id].fio,
              tel: this.DataUsers[this.DataUsers[i].id].tel,
              email: this.DataUsers[this.DataUsers[i].id].email,
              pass: this.DataUsers[this.DataUsers[i].id].pass,
              id: this.DataUsers[this.DataUsers[i].id].id,
              block: this.DataUsers[this.DataUsers[i].id].block,
            };

            if (this.DataUsers[this.DataUsers[i].id].block === true) {
              isBlock = true
            }
          }
        }
      }

      if (beAcc === true) {
        if (bePass === true) {
          if (isBlock === false) {
            localStorage.setItem(
              "activeAccount",
              JSON.stringify(this.objDataUsers)
            );
            localStorage.setItem("isAuth", true);
            this.$store.state.isAuth = true;

            this.$router.push("/Toys_Store/UsersRoom");

            error.innerHTML = "";
          } else {
            error.innerHTML = "Данный пользователь заблокирован";
          }
        } else {
          error.innerHTML = "Неверный логин или пароль";
        }
      } else {
        error.innerHTML = "Данный телефон или email не зарегестрирован";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form_log {
  font-size: 22px;
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    width: 350px;
    margin-bottom: 10px;
    font-size: 17px;
    outline: none;
  }

  button {
    width: 140px;
    height: 40px;
    margin: 20px 0;
    background-color: rgb(226, 106, 36);
    color: white;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
  }

  span {
    margin-left: 15px;
    font-size: 18px;
    color: rgb(226, 106, 36);
    cursor: pointer;
  }

  .error {
    color: rgb(221, 0, 0);
    font-size: 17px;
    margin: -10px 0;
  }
}
</style>