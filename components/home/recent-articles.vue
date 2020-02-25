<template>
  <generic-holder title="Recent Articles">
    <v-container>
      <v-row>
        <template v-for="(article, index) in recentArticles">
          <v-col cols="12" sm="6" :key="index">
            <article-preview-item :title="article.title" :slug="article.slug" :date="article.date"
                                  :author="article.author" :content="article.content"></article-preview-item>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </generic-holder>
</template>

<script>
    import GenericHolder from "../generic/holder";
    import ArticlePreviewItem from "../article/preview-item";
    import information from "../../information";

    export default {
        name: "home-recent-articles",
        components: {ArticlePreviewItem, GenericHolder},
        mixins: [information],

        computed: {
            recentArticles() {
                return this.information.article.recent;
            }
        }
    };
</script>
