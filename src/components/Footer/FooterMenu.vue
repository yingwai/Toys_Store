<template>
  <div class="footer___menu">
    <div class="menu">
      <div class="menu___navigation">
        <ul>
          <li @click="$router.push('/Toys_Store/Catalog')">Каталог</li>
          <li @click="$router.push('/Toys_Store/AboutShop')">О магазине</li>
          <li @click="$router.push('/Toys_Store/UsersRoom')">Личный кабинет</li>
          <li @click="$router.push('/Toys_Store/Blog')">Блог</li>
        </ul>
      </div>

      <div class="menu___contacts">
        <h4>Контакты</h4>
        <span>+7(800) 800-80-80</span>
        <br />
        <span>г. Москва, ул. Новорязанская, 18, стр. 11</span>
      </div>
    </div>

    <div class="age">2022</div>
  </div>
</template>

<script>
export default {
  methods: {
    fClickLogo() {
      window.scrollTo(0,0)
    }
  },
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(163, 163, 163);

  ul {
    font-size: 19px;
    list-style-type: none;

    li {
      margin: 20px 0;
      cursor: pointer;
      transition: color 0.2s ease-in;

      &:hover {
        color: #6ebcda;
      }
    }
  }

  .menu___contacts {
    font-size: 20px;
  }
}

.age {
  font-size: 18px;
  margin: 12px;
  text-align: center;
}
</style>