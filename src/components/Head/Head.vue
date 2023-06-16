<template>
  <div class="head">
    <HeadMenu @click="OpenModalMenu" />
    <HeadLogo @click="fClickLogo" />
    <HeadIcon />
  </div>
</template>

<script>
import HeadMenu from "@/components/Head/HeadMenu.vue";
import HeadLogo from "@/components/Head/HeadLogo.vue";
import HeadIcon from "@/components/Head/HeadIcon.vue";

export default {
  components: {
    HeadMenu,
    HeadLogo,
    HeadIcon,
  },

  data() {
    return {};
  },

  methods: {
    OpenModalMenu() {
      this.$emit("OpenModal");
    },

    fClickLogo() {
      this.$router.push('/Toys_Store/')
      window.scrollTo(0,0)
    }
  },
};
</script>

<style lang="scss" scoped>
.head {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 150px;
  border-bottom: 1px solid rgb(163, 163, 163);
  font-size: 25px;

  &.fixed {
    position: fixed;
    left: 0;
    top: 0;
  }
}
</style>