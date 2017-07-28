import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import articleDetails from '@/components/articleDetails'
import artcialByCategory from '@/components/artcialByCategory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Article',
      component: Article
    },
    {
      path: '/article/:title',
      name: 'articleDetails',
      component: articleDetails
    },
    {
      path: '/category/:category',
      name: 'artcialByCategory',
      component: artcialByCategory
    }
  ]
})
