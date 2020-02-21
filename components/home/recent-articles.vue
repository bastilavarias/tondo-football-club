<template>
  <generic-holder title="Recent Articles">
    <v-container>
      <v-row>
        <template v-for="n in 3">
          <v-col cols="12" md="4">
            <article-preview-item></article-preview-item>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </generic-holder>
</template>

<script>
  import GenericHolder from "../generic/holder";
  import ArticlePreviewItem from "../article/preview-item";
  export default {
      name: "home-recent-articles",
      components: {ArticlePreviewItem, GenericHolder}
  }
</script>
