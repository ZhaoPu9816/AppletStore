<template>
  <div class="iblock zp-col-12">
    <Head></Head>
    <!--个人中心-->
    <div class="personal">
      <div class="personal-left left">
        <div class="personal-head">
          <div class="personal-head-img">
            <img src="../../img/yqloading.gif" />
          </div>
        </div>
        <div class="personal-list iblock">
          <ul>
            <router-link to=""></router-link>
            <li><router-link to="/Personal"><i class="iconfont icon-gerenzhongxin"></i>个人资料</router-link></li>
            <li><router-link to="/Collection"><i class="iconfont icon-shoucang"></i>我的收藏</router-link></li>
            <li><router-link to="/Release"><i class="iconfont icon-fabu"></i>发布小程序</router-link></li>
            <li><router-link to=""><i class="iconfont icon-xiaochengxu"></i>小程序管理</router-link></li>
            <li><router-link to=""><i class="iconfont icon-tuiguang1"></i>小程序推广</router-link></li>
            <li><router-link to=""><i class="iconfont icon-tuiguang"></i>推广管理</router-link></li>
            <li><router-link to=""><i class="iconfont icon-renling"></i>认领小程序</router-link></li>
            <li><router-link to=""><i class="iconfont icon-jiaoyi01"></i>转卖小程序</router-link></li>
            <li><router-link to=""><i class="iconfont icon-chongzhi"></i>用户充值</router-link></li>
          </ul>
        </div>
      </div>
      <div class="personal-right right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../Index/Head.vue'
import Down from '../Index/Down.vue'
export default {
  data () {
    return {}
  },
  components: {
    Head,
    Down
  }
}
</script>

<style scoped lang="less">
@import url("../../css/personal.less");
</style>
