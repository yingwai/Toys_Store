<template>
  <div class="form_reg">
    <p>Контактное лицо (ФИО)</p>
    <input type="text" class="reg_fio" value="" />

    <p>Контактный телефон</p>
    <input type="tel" class="reg_tel" value="" />

    <p>Email</p>
    <input type="email" class="reg_email" value="" />

    <p>Пароль</p>
    <input type="password" class="reg_pass" value="" />

    <p>Подтверждение пароля</p>
    <input type="password" class="reg_confirm" value="" />

    <div>
      <button @click="fRegistr">Зарегистрироваться</button>
      <span @click="clickLog">Войти</span>
    </div>

    <div class="error"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataAllUsers: [],
      objDataUsers: {
        fio: ``,
        tel: ``,
        email: ``,
        pass: ``,
        id: ``,
      },
      DataUsers: JSON.parse(localStorage.getItem('SaveUsers')),
    };
  },
  methods: {
    fRegistr() {
      let regLog = document.querySelector(".reg_fio");
      let regTel = document.querySelector(".reg_tel");
      let regEmail = document.querySelector(".reg_email");
      let regPass = document.querySelector(".reg_pass");
      let regConfirm = document.querySelector(".reg_confirm");
      let error = document.querySelector(".error");

      if (regLog.value.length >= 2) {
        if (regTel.value.length >= 10) {
          if (regEmail.value.includes("@")) {
            if (regPass.value.length >= 8) {
              if (regConfirm.value === regPass.value) {
                if (this.DataUsers) {
                  this.objDataUsers = {
                    fio: regLog.value,
                    tel: regTel.value,
                    email: regEmail.value,
                    pass: regPass.value,
                    id: this.DataUsers.length,
                    block: false,
                  };
                } else {
                  this.objDataUsers = {
                    fio: regLog.value,
                    tel: regTel.value,
                    email: regEmail.value,
                    pass: regPass.value,
                    id: 0,
                    block: false,
                  };
                }

                this.DataAllUsers.push(this.objDataUsers);

                if (this.DataUsers) {
                  this.DataUsers.push(this.objDataUsers);
                  localStorage.setItem("SaveUsers", JSON.stringify(this.DataUsers));
                } else {
                  localStorage.setItem("SaveUsers", JSON.stringify(this.DataAllUsers));
                }

                localStorage.setItem("activeAccount", JSON.stringify(this.objDataUsers))
                localStorage.setItem("isAuth", true);

                regLog.value = ``
                regTel.value = ``
                regEmail.value = ``
                regPass.value = ``
                regConfirm.value = ``

                this.$router.push("/Toys_Store/UsersRoom");
              } else {
                error.innerHTML = "Пароль различается";
              }
            } else {
              error.innerHTML =
                "Пароль должен содержать как минимум 8 символов";
            }
          } else {
            error.innerHTML = "Email должен содержать @";
          }
        } else {
          error.innerHTML = "Необходимо ввести номер";
        }
      } else {
        error.innerHTML = "Необходимо ввести ФИО";
      }
    },
    clickLog() {
      this.$emit("clickLog");
    },
  },
};
</script>

<style lang="scss" scoped>
.form_reg {
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
    width: 170px;
    height: 40px;
    margin: 20px 0;
    color: white;
    background-color: rgb(226, 106, 36);
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