<template>
  <div class="contacts">
    <h2>Контакты</h2>

    <p>Контактное лицо (ФИО)</p>
    <input type="text" class="btnAcc" />

    <p>Контактный телефон</p>
    <input type="tel" class="btnAcc" />

    <p>Email</p>
    <input type="email" class="btnAcc" />

    <div class="password">
      <div class="radio" @click="fShowPassword"></div>
      <p>Изменить пароль</p>
    </div>

    <transition name="fade">
      <div v-if="PassworVisible === true" style="margin: 20px 0">
        <p>Старый пароль</p>
        <input type="password" class="btnPass" />

        <p>Новый пароль</p>
        <input type="password" class="btnPass" />

        <p>Подтверждение пароля</p>
        <input type="password" class="btnPass" />
      </div>
    </transition>

    <input type="submit" class="submit" value="Изменить" @click="CorrectData" />
    <div class="error"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PassworVisible: false,
      activeAccount: JSON.parse(localStorage.getItem("activeAccount")),
      DataUsers: JSON.parse(localStorage.getItem("SaveUsers")),
    };
  },

  methods: {
    fShowPassword() {
      let radio = document.querySelector(".radio");

      if (this.PassworVisible === false) {
        radio.style.background = "#e26a24";
        this.PassworVisible = true;
      } else {
        radio.style.background = "white";
        this.PassworVisible = false;
      }
    },
    CorrectData() {
      let btnAcc = document.querySelectorAll(".btnAcc");
      let btnPass = document.querySelectorAll(".btnPass");
      let error = document.querySelector(".error");

      if (this.PassworVisible === false) {
        this.DataUsers[this.activeAccount.id].fio = btnAcc[0].value;
        this.activeAccount.fio = btnAcc[0].value;

        this.DataUsers[this.activeAccount.id].tel = btnAcc[1].value;
        this.activeAccount.tel = btnAcc[1].value;

        this.DataUsers[this.activeAccount.id].email = btnAcc[2].value;
        this.activeAccount.email = btnAcc[2].value;

        localStorage.setItem(
          "activeAccount",
          JSON.stringify(this.activeAccount)
        );
        localStorage.setItem("SaveUsers", JSON.stringify(this.DataUsers));
      } else {
        if (btnPass[0].value === this.DataUsers[this.activeAccount.id].pass) {
          if (btnPass[1].value.length >= 8) {
            if (btnPass[1].value === btnPass[2].value) {
              this.DataUsers[this.activeAccount.id].fio = btnAcc[0].value;
              this.activeAccount.fio = btnAcc[0].value;
  
              this.DataUsers[this.activeAccount.id].tel = btnAcc[1].value;
              this.activeAccount.tel = btnAcc[1].value;
  
              this.DataUsers[this.activeAccount.id].email = btnAcc[2].value;
              this.activeAccount.email = btnAcc[2].value;
  
              this.DataUsers[this.activeAccount.id].pass = btnPass[2].value;
              this.activeAccount.pass = btnPass[2].value;
              btnPass[0].value = ''
              btnPass[1].value = ''
              btnPass[2].value = ''
  
              localStorage.setItem(
                "activeAccount",
                JSON.stringify(this.activeAccount)
              );
              localStorage.setItem("SaveUsers", JSON.stringify(this.DataUsers));
              error.innerHTML = "";
            } else {
              error.innerHTML = "Пароль не совпадает";
            }
          } else {
            error.innerHTML = "Пароль должен содержать как минимум 8 символов";
          }
        } else {
          error.innerHTML = "Неверно введённый пароль";
        }
      }

      console.log(this.DataUsers[this.activeAccount.id]);
    },
  },

  mounted() {
    let btnAcc = document.querySelectorAll(".btnAcc");

    for (let i = 0; i < btnAcc.length; i++) {
      btnAcc[0].value = this.activeAccount.fio;
      btnAcc[1].value = this.activeAccount.tel;
      btnAcc[2].value = this.activeAccount.email;
    }
  },
};
</script>

<style lang="scss" scoped>
.contacts {
  h2 {
    font-size: 42px;
    margin: 0 0 20px 0;
  }

  p {
    font-size: 20px;
    margin: 0 0 10px 0;
  }

  input {
    height: 25px;
    width: 100%;
    padding: 5px;
    margin-bottom: 15px;
    outline: none;
    font-size: 18px;
  }

  .password {
    display: flex;
    align-items: center;
    width: 400px;

    .radio {
      height: 15px;
      width: 15px;
      border: 2px solid rgb(226, 106, 36);
      border-radius: 3px;
      margin: 0 10px 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      margin: auto 0;
    }
  }

  .submit {
    width: 220px;
    height: 40px;
    background-color: rgb(226, 106, 36);
    border: 0px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    margin: 20px 0;
  }
}

.error {
  color: rgb(221, 0, 0);
  font-size: 17px;
  margin: -10px 0;
}
</style>