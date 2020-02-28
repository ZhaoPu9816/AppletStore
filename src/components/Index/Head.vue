<template>
  <!-- 顶部导航 -->
  <div class="top-nav">
    <div class="top-nav-text">
      <div class="logo pointer left">
        <a href="index.html" class="iblock pointer left">
          <i class="iconfont icon-xiaochengxu left"></i>
          <span class="left">小程序商店</span>
        </a>
      </div>
      <ul>
        <router-link to="/"><li>小程序</li></router-link>
        <router-link to="/News"><li>文章</li></router-link>
      </ul>
      <div class="right">
        <router-link to="/Sign"><a class="login gray" href="">登录/注册</a></router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
