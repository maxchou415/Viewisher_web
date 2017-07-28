<template>
  <div class="">
    {{article}}
  </div>
</template>

<script>
  export default {
    name: 'articleDetails',
    data () {
      return {
        article: '',
        error: ''
      }
    },
    methods: {
      fetchArticle () {
        let title = this.$route.params.title
        this.$http.get(`public/article/${title}`).then(response => {
          this.error = false
          this.article = response.body.data[0]
        }, response => {
          this.error = true
        })
      }

    },
    mounted () {
      this.fetchArticle()
    },
    watch: {
      '$route.params.title' () {
          this.fetchArticle()
      }
    },
    // Meta Tag config
    metaInfo () {
      if(this.error === true) {
        return {
          title: `找不到文章 - Viewisher`,
          meta: [
            { property: 'og:title', content: `找不到文章 - Viewisher` },
            { property: 'og:description', content: `找不到文章 - Viewisher` },
            { property: 'og:type', content: `article` }
          ]
        }
      } else {
        return {
          title: `${this.article.title} - Viewisher`,
          meta: [
            { property: 'og:title', content: `${this.article.title} - Viewisher` },
            { property: 'og:description', content: `${this.article.content}` },
            { property: 'og:type', content: `article` },
            { property: 'og:image', content: `${this.article.featurePhoto}` }
          ]
        }

      }
    }
  }
</script>

<style scoped>

</style>
