<template>
  <div class="head___icon">
    <input type="text" class="btn_search" v-if="btnVisible" autofocus v-on:keydown.enter="fSearch"/>
    <input type="text" class="btn_search_lock" v-else readonly />
    <i class="fas fa-search" @click="fSearch"></i>
    <i class="fas fa-shopping-basket" @click="this.$router.push('/Corf')"
      >({{ this.$store.state.nCountToysCorf }})</i
    >
    <i class="fas fa-user" @click="fAuth"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SaveBuy: JSON.parse(localStorage.getItem("SaveBuy")),
      btnVisible: false,
      search: "",
    };
  },
  methods: {
    fAuth() {
      if (this.$store.state.isAuth) {
        this.$router.push("/UsersRoom");
      } else {
        this.$router.push("/LogRoom");
      }
    },
    fSearch() {
      let btnSearch = document.querySelector(".btn_search");

      if (this.btnVisible === true) {
        if (this.$route.href === "/Search") {
          localStorage.setItem("Search", btnSearch.value);

          location.reload();
        } else {
          localStorage.setItem("Search", btnSearch.value);

          this.btnVisible = false;

          this.$router.push("/Search");
        }
      } else {
        this.btnVisible = true;
      }
    },
  },
  mounted() {
    if (this.SaveBuy) {
      this.$store.state.nCountToysCorf = this.SaveBuy.length
    }
  }
};
</script>

<style lang="scss" scoped>
.head___icon {
  .btn_search {
    height: 100%;
    width: 200px;
    padding: 5px;
    font-size: 17px;
    margin: 0 0 0 -240px;
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border: 0px solid black;
    border-radius: 5px;
  }

  .btn_search_lock {
    height: 100%;
    width: 200px;
    padding: 5px;
    font-size: 17px;
    margin: 0 0 0 -240px;
    outline: none;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
    border: 0px solid black;
    border-radius: 5px;
    opacity: 0;
    cursor: default;
  }

  i {
    margin: 0px 20px;
    cursor: pointer;
    transition: color 0.2s ease-in;

    &:hover {
      color: #6ebcda;
    }
  }
}
</style>