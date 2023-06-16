<template>
  <div class="head___list">
    <div
      class="list"
      @click="listCategoty(list.value)"
      v-for="list in lists"
      :key="list.value"
    >
      {{ list.name }}
    </div>
    <!-- <div class="list" @click="listCategoty" value="1">Плюшевые</div>
    <div class="list" @click="listCategoty">Пластмассовые</div>
    <div class="list" @click="listCategoty">Конструктор</div> -->
  </div>
</template>

<script>
// import Catalog from "@/components/pages/Catalog.vue";

export default {
  //   components: {
  //     Catalog,
  //   },
  data() {
    return {
      lists: [
        { name: "Плюшевые", value: "1" },
        { name: "Пластмассовые", value: "2" },
        { name: "Конструктор", value: "3" },
      ],
    };
  },
  methods: {
    listCategoty(value) {
      if (this.$route.href === '/Catalog') {
        location.reload()
      } else {
        this.$router.push("/Toys_Store/Catalog");
      }

      if (value === "1") {
        localStorage.setItem("listCategoty", JSON.stringify(this.lists[0]));
      } else if (value === "2") {
        localStorage.setItem("listCategoty", JSON.stringify(this.lists[1]));
      } else if (value === "3") {
        localStorage.setItem("listCategoty", JSON.stringify(this.lists[2]));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.head___list {
  display: flex;
  font-size: 22px;
  justify-content: center;
  margin-right: 120px;

  .list {
    margin: 0 20px;
    transition: color 0.2s ease-in;
    cursor: pointer;

    &:hover {
      color: #6ebcda;
    }
  }
}
</style>