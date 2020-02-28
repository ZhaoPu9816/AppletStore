import Vue from 'vue'
import Router from 'vue-router'
// 主页
import Index from 'components/Index/Index.vue'
// 详情
import Detail from 'components/Detail/Detail.vue'
// 个人中心
import Personal from 'components/Personal/Personal.vue'
import PersonalData from 'components/Personal/PersonalData.vue'
import Collection from 'components/Personal/Collection.vue'
import Release from 'components/Personal/Release.vue'
// 登录
import Sign from 'components/Sign/Sign.vue'
import Retrieve from 'components/Sign/Retrieve.vue'
// 文章
import News from 'components/News/News.vue'
import NewsDetail from 'components/News/NewsDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/Detail',
      component: Detail
    }, {
      path: '/Personal',
      component: Personal,
      children: [{
        path: '/',
        component: PersonalData
      }, {
        path: '/Collection',
        component: Collection
      }, {
        path: '/Release',
        component: Release
      }]
    }, {
      path: '/Sign',
      component: Sign
    }, {
      path: '/Retrieve',
      component: Retrieve
    }, {
      path: '/News',
      component: News
    }, {
      path: '/NewsDetail',
      component: NewsDetail
    }
  ]
})
