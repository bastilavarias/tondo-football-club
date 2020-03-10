<template>
  <section>
    <generic-parallax :title="banner.title" :subtitle="banner.subtitle"
                      :image="banner.image" background-position="bottom"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <article-featured></article-featured>
      <generic-holder title="Recent Posts">
        <v-row>
          <template v-for="(article, index) in recentArticles">
            <v-col cols="12" sm="6" :key="index">
              <article-preview-item :title="article.title" :slug="article.slug" :date="article.date"
                                    :author="article.author" :content="article.content"></article-preview-item>
            </v-col>
          </template>
        </v-row>
      </generic-holder>
    </v-container>
  </section>
</template>

<script>
    import GenericParallax from "../../components/generic/parallax";
    import ArticleFeatured from "../../components/article/featured";
    import GenericHolder from "../../components/generic/holder";
    import ArticlePreviewItem from "../../components/article/preview-item";
    import information from "../../information";

    export default {
        components: {ArticlePreviewItem, GenericHolder, ArticleFeatured, GenericParallax},

        mixins: [information],

        head() {
            return {
                title: "Nosi Balasi"
            }
        },

        computed: {
            article() {
                return this.information.article;
            },

            recentArticles() {
                return this.article.recent;
            },

            banner() {
                return this.article.banner;
            }
        },

    };
</script>
