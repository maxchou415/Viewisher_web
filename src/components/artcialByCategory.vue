<template>
  <div class="">
    <ul v-for="item in articleList">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'artcialByCategory',
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
      let category = this.$route.params.category
      this.$http.get(`public/article/category/${category}`).then(response => {
        this.articleList = response.body.data
      })
    },
    goToPage (destination) {
      this.$router.push(destination)
    }
  },
  mounted () {
    this.fetchArticle()
  },
  watch: {
    '$route.params.category' () {
        this.fetchArticle()
    }
  }
}
</script>

<style scoped>

</style>
