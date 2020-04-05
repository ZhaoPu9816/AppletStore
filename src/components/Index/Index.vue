<template>
  <div>
    <!-- 顶部导航 -->
    <Head></Head>
    <!--轮播-->
    <div class="carousel">
      <el-carousel :interval="3000" height="450px" arrow="always">
        <el-carousel-item v-for="item in imagesbox" :key="item.id">
          <img :src="item.idView" class="carousel-img" />
        </el-carousel-item>
      </el-carousel>
      <div class="select">
        <input type="text" placeholder="输入小程序关键词" /><button class="pointer"><i class="iconfont icon-sousuo1"></i><span>搜索</span></button>
      </div>
    </div>
    <!--分类导航-->
    <nav>
      <ul class="nav">
        <a href="javascript:;"><li>首页</li></a>
        <a href="javascript:;"><li>最新发布</li></a>
        <a href="javascript:;"><li>热门推荐</li></a>
        <a href="javascript:;"><li>最新资讯</li></a>
        <a href="javascript:;"><li>小程序交易</li></a>
        <a href="javascript:;"><li>发布小程序</li></a>
      </ul>
    </nav>
    <!--最新发布-->
    <div class="box new-app">
      <div class="box-title">
        <h3>最新发布</h3>
      </div>
      <div class="box-content">
        <ul>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <router-link to="/Detail"><img src="../../img/yqloading.gif" /></router-link>
                </div>
                <div class="app-show-name left">
                  <h4><router-link to="/Detail">小程序名称</router-link></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--热门推荐-->
    <div class="box hot-app">
      <div class="box-title">
        <h3>热门推荐</h3>
      </div>
      <div class="box-content">
        <ul>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
          <li>
            <div class="app-show">
              <div class="app-show-top iblock">
                <div class="app-show-img left">
                  <a href="javascript:;"><img src="../../img/yqloading.gif" /></a>
                </div>
                <div class="app-show-name left">
                  <h4><a href="javascript:;">小程序名称</a></h4>
                  <p>分类</p>
                </div>
                <a href="javascript:;">
                  <i class="iconfont icon-erweima right app-show-ewm">
                    <div class="app-show-ewmbox">
                      <div>
                        <img src="../../img/ewm.png" />
                      </div>
                      <h5>扫码体验</h5>
                    </div>
                  </i>
                </a>
              </div>
              <div class="introduce">
                <p>小程序简介：超出两行隐藏；小程序简介：超出两行隐藏；小程序简介：超出两行隐藏</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--新闻-->
    <div class="box news">
      <div class="box-title">
        <h3>最新资讯</h3>
      </div>
      <div class="content">
        <div class="home">
          <div class="title">
            <h3>资讯列表</h3>
          </div>
          <div class="divider"></div>
          <ul class="news-lists">
            <li><a href="javascript:;">资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；</a></li>
            <div class="divider"></div>
            <li><a href="javascript:;">资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；</a></li>
            <div class="divider"></div>
            <li><a href="javascript:;">资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；</a></li>
            <div class="divider"></div>
            <li><a href="javascript:;">资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；资讯标题：超出一行隐藏；</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!--底部-->
    <Down></Down>
  </div>
</template>

<script>
import {jQuery} from 'js/jquery-2.1.0.js'
// import {carousel} from 'js/carousel.js'
// import {barrage} from 'js/barrage.js'
// import {sendBarrage} from 'js/sendBarrage.js'
import Head from './Head.vue'
import Down from './Down.vue'
export default {
  data () {
    return {
      imagesbox: [{
        id: 1,
        idView: require('../../img/lunbo1.jpg')
      }, {
        id: 2,
        idView: require('../../img/lunbo2.jpg')
      }, {
        id: 3,
        idView: require('../../img/lunbo3.jpg')
      }]
    }
  },
  mounted () {
    console.log(jQuery)
    // console.log(carousel)
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
@import url("../../iconfont/iconfont.css");
@import url("../../css/public.css");
#app {
  height: 100%;
}
</style>
<style scoped lang="less" src="../../css/index.less"></style>
<style scoped lang="less" src="../../css/sign.less"></style>
<style scoped lang="less" src="../../css/personal.less"></style>
