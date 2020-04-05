<template>
  <!--我的收藏-->
  <div class="personal-collection">
    <div class="box-title">我的收藏</div>
    <div class="iblock zp-col-12">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-star-off"></i>小程序</span>
          <div class="collection-box">
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
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-document"></i>文章</span>
          文章收藏
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="less">
@import url("../../css/index.less");
@import url("../../css/personal.less");
</style>
