<template>
  <div class="newsdetail-background">
    <Head></Head>
    <div class="newsdetail">
      <div class="newsdetail-cover">
        <div class="newsdetail-title">
          文章标题,超出两行隐藏;文章标题,超出两行隐藏;文章标题,超出两行隐藏;文章标题,超出两行隐藏;
        </div>
      </div>
      <div class="newsdetail-content">
        <p>微信公众号提供了中国互联网上最好的原创内容保护机制，而且它还在不断进化。</p>
        <p>10 月 14 日，公众号的转载功能和样式迎来了两个小更新。</p>
        <p>针对可更改原文，但需显示来源的转载，也即俗称的「单白」，被转载文章的顶部除了显示来源公众号的名称和作者，还会出现源公众号的卡片，显示该公众号头像、名称和简介，用户点击卡片可跳转到源公众号的主页。</p>
        <p>本次更新前，被转载文章顶部不显示卡片，仅显示源公众号的名称（含小头像）和作者，其中公众号名称可点击跳转。</p>
        <p>含公众号简介的卡片，增加了源公众号曝光的面积，也能让读者对其有一个直观的了解。对专注生产优质原创内容的公众号来说，这个更新对涨粉有更大的帮助。</p>
        <p>另外一个更新针对转载者。公众号运营者在转载其他公众号文章时，可以在开头添加一段 120 字的「编辑荐语」。这是微信公众号官方的预设模块，将显示在文章来源的上方，其中「编辑荐语」文案也可以自定义，，如「知晓程序推荐」，最多支持 10 个字。</p>
      </div>
      <div class="newsdetail-comment">
        <div>评论</div>
        <textarea class="newsdetail-say" maxlength="200" placeholder="最多输入200字"></textarea>
      </div>
    </div>
    <Down></Down>
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
@import url("../../css/newsdetail.less");
.newsdetail-background {
  background-color: rgb(245,245,245);
}
</style>
