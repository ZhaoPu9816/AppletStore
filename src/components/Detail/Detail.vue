<template>
  <div>
    <!-- 顶部导航 -->
    <Head></Head>
    <div class="detail clearfix">
      <div class="detail-info">
        <div class="detail-title iblock">
          <div class="detail-head-img left">
            <img src="../../img/yqloading.gif" />
          </div>
          <h2 class="left">名称</h2>
          <div class="collection right"><i class="iconfont icon-shoucang"></i>收藏</div>
        </div>
        <!--基本信息-->
        <div class="box-title">基本信息</div>
        <div class="iblock zp-col-12">
          <div class="home left">
            <p><span class="width80 iblock">作者：</span>无名</p>
            <p><span class="width80 iblock">分类：</span>未分类</p>
            <p><span class="width80 iblock">平台：</span>微信</p>
            <p><span class="width80 iblock">发布日期：</span>2020-1-1</p>
          </div>
          <div class="detail-ewm-box right">
            <div class="detail-ewm-img">
              <img src="../../img/300.png" />
            </div>
            <p>扫码体验</p>
          </div>
        </div>
        <div class="home"></div>
        <!--介绍-->
        <div class="box-title">介绍</div>
        <div class="home">
          <p>小程序介绍：不超过200字；小程序介绍：不超过200字；小程序介绍：不超过200字</p>
        </div>
        <div class="home"></div>
        <!--截图-->
        <div class="box-title">截图</div>
        <div class="home">
          <ul class="screenshot">
            <li><img src="../../img/yqloading.gif" /></li>
            <li><img src="../../img/yqloading.gif" /></li>
            <li><img src="../../img/yqloading.gif" /></li>
            <li><img src="../../img/yqloading.gif" /></li>
            <li><img src="../../img/yqloading.gif" /></li>
          </ul>
        </div>
        <div class="home"></div>
        <!--评论-->
        <div class="detail-comment">
          <div class="box-title">评论</div>
          <div class="publish">
            <div class="screen">
              <div class="landscape"></div>
              <div class="filter"></div>
              <canvas id="canvas"></canvas>
              <div class="send">
                <div class="input clearfix">
                  <input type="text" class="text">
                  <div class="btn">发表评论</div>
                </div>
              </div>
              <div class="s_show">
                <div class="magictime twisterInUp">用户评论1</div>
                <div class="magictime twisterInUp">用户评论2</div>
                <div class="magictime twisterInUp">用户评论3</div>
                <div class="magictime twisterInUp">用户评论4</div>
                <div class="magictime twisterInUp">用户评论5</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <Down></Down>
  </div>
</template>

<script>
// import $ from "jquery"
// import {jQuery} from 'js/jquery-2.1.0.js'
// import {barrage} from 'js/barrage.js'
// import {sendBarrage} from 'js/sendBarrage.js'
import Head from '../Index/Head.vue'
import Down from '../Index/Down.vue'
export default {
  data () {
    return {}
  },
  mounted () {
    // console.log(jQuery)
    // console.log(barrage)
    // console.log(sendBarrage)
  },
  components: {
    Head,
    Down
  }
}
</script>

<style>
@import url("../../css/detail.css");
</style>
