<template>
  <div class="form_res">
    <p>Email</p>
    <input type="email" value="" class="btnRes" />

    <div>
      <button @click="fResPass">Восстановить пароль</button>
      <span @click="clickLog">Назад</span>
    </div>
    <div class="error"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataUsers: JSON.parse(localStorage.getItem("SaveUsers")),
    };
  },
  methods: {
    clickLog() {
      this.$emit("ClickLog");
    },
    fResPass() {
      let btnRes = document.querySelector('.btnRes')
      let error = document.querySelector(".error");
      let beAcc = false
      let remPass = null

      for (let i = 0; i < this.DataUsers.length; i++) {
        if (btnRes.value === this.DataUsers[i].email) {
          beAcc = true

          if (beAcc === true) {
            remPass = this.DataUsers[this.DataUsers[i].id].pass
          }
        }
      };

      if (beAcc === true) {
        console.log(remPass)
        error.innerHTML = ''
      } else {
        error.innerHTML = 'Данный email не зарегистрирован.'
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form_res {
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