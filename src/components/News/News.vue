<template>
  <div>
    <Head></Head>
    <div class="news-page">
      <div class="news-list clearfix">
        <div class="news-list-img left pointer">
          <router-link to="/NewsDetail"><img src="../../img/404cfx.jpg" /></router-link>
        </div>
        <div class="news-list-info">
          <div class="height110 pointer">
            <h3>文章标题，最多两行，超出隐藏；文章标题，最多两行，超出隐藏；</h3>
            <h5>简介，最多两行，超出隐藏；简介，最多两行，超出隐藏；简介，最多两行，超出隐藏；</h5>
          </div>
          <div class="news-info-author">
            <span>作者|发布日期</span>
            <div class="news-collection right"><i class="iconfont icon-shoucang"></i>收藏</div>
          </div>
        </div>
      </div>
      <div class="news-list clearfix">
        <div class="news-list-img left pointer">
          <img src="../../img/404cfx.jpg" />
        </div>
        <div class="news-list-info">
          <div class="height110 pointer">
            <h3>文章标题，最多两行，超出隐藏；文章标题，最多两行，超出隐藏；</h3>
            <h5>简介，最多两行，超出隐藏；简介，最多两行，超出隐藏；简介，最多两行，超出隐藏；</h5>
          </div>
          <div class="news-info-author">
            <span>作者|发布日期</span>
            <div class="news-collection right"><i class="iconfont icon-shoucang"></i>收藏</div>
          </div>
        </div>
      </div>
      <div class="news-list clearfix">
        <div class="news-list-img left pointer">
          <img src="../../img/404cfx.jpg" />
        </div>
        <div class="news-list-info">
          <div class="height110 pointer">
            <h3>文章标题，最多两行，超出隐藏；文章标题，最多两行，超出隐藏；</h3>
            <h5>简介，最多两行，超出隐藏；简介，最多两行，超出隐藏；简介，最多两行，超出隐藏；</h5>
          </div>
          <div class="news-info-author">
            <span>作者|发布日期</span>
            <div class="news-collection right"><i class="iconfont icon-shoucang"></i>收藏</div>
          </div>
        </div>
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
@import url("../../css/news.less");
</style>
