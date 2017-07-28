<template>
  <div class="">
    <ul v-for="item in articleList">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Article',
  metaInfo: {
    title: 'Viewisher'
  },
  data () {
    return {
      articleList: ''
    }
  },
  methods: {
    fetchArticle () {
      this.$http.get('public/article/all').then(response => {
        this.articleList = response.body.data
      })
    }

  },
  mounted () {
    this.fetchArticle()
  }
}
</script>

<style scoped>

</style>
