<template>
  <div class="footer">
    <FooterLogo @click="fClickLogo" />
    <FooterMenu />
  </div>
</template>

<script>
import FooterLogo from "@/components/Footer/FooterLogo.vue";
import FooterMenu from "@/components/Footer/FooterMenu.vue";

export default {
  components: {
    FooterLogo,
    FooterMenu,
  },
  methods: {
    fClickLogo() {
      this.$router.push('/')
      window.scrollTo(0,0)
    }
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin: 50px 150px 0px 150px;
}
</style>