<template>
  <v-container>
    <v-card color="transparent" flat>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="featuredArticle.content.banner"></v-img>
        </v-col>
        <v-col cols="12" md="6">

          <v-card-title class="display-1 font-weight-bold text-capitalize">{{featuredArticle.title}}</v-card-title>
          <v-card-text>
            {{cutText(featuredArticle.content.text, 397)}}
          </v-card-text>
          <v-btn color="primary" depressed :class="`text-capitalize ${screenBreakPoint.mdAndDown ? 'mb-2' : 'mr-2'}`"
                 :block="screenBreakPoint.mdAndDown" :to="{name: 'articles-slug', params: {slug: featuredArticle.slug}}">
            <span>Read this article</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
          <v-btn color="primary" depressed class="text-capitalize" outlined :block="screenBreakPoint.mdAndDown"
                 :to="{name: 'articles'}" exact-active-class="d-none">
            <span>See Articles</span>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
    import utilities from "../../plugins/utilities";
    import information from "../../information";


    export default {
        name: "article-featured",

        mixins: [utilities, information],

        computed: {
            featuredArticle() {
                return this.information.article.featured;
            }
        }
    }
    ;
</script>
