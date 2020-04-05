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
    <div class="personal-tab">
      <el-tabs :tab-position="tabPosition" style="height: 500px;">
        <el-tab-pane class="personal-tab-pane" label="个人资料">个人资料</el-tab-pane>
        <el-tab-pane label="我的收藏">我的收藏</el-tab-pane>
        <el-tab-pane label="发布小程序">发布小程序</el-tab-pane>
        <el-tab-pane label="小程序管理">小程序管理</el-tab-pane>
        <el-tab-pane label="小程序推广">小程序推广</el-tab-pane>
        <el-tab-pane label="推广管理">推广管理</el-tab-pane>
        <el-tab-pane label="认领小程序">认领小程序</el-tab-pane>
        <el-tab-pane label="转卖小程序">转卖小程序</el-tab-pane>
        <el-tab-pane label="用户充值">用户充值</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Head from '../Index/Head.vue'
import Down from '../Index/Down.vue'
export default {
  data () {
    return {
      tabPosition: 'left'
    }
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
