<template>
  <tab-bar>
    <tab-bar-item link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/hoem_active.png" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/category_active.png" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart">
      <img slot="icon" src="~assets/img/tabbar/shopcart.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/shopcart_active.png" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="active-icon" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="text">个人</div>
    </tab-bar-item>
  </tab-bar>
</template>
  <script>
    import TabBar from 'common/tabbar/TabBar'
    import TabBarItem from 'common/tabbar/TabBarItem'

    export default {
      name: "MainTabBar",
      components: {
        TabBar, TabBarItem
      }
    }
  </script>

<style scoped>

</style>
