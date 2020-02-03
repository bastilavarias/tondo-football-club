<template>
  <section id="featured-articles">
    <v-container>
      <v-card flat>
        <h2>Featured Articles</h2>
        <v-row>
          <v-col cols="12" md="6">
            <article-item></article-item>
          </v-col>
          <v-col cols="12" md="6">
            <article-item></article-item>
          </v-col>

          <v-col cols="12" md="6">
            <article-item></article-item>
          </v-col>
          <v-col cols="12" md="6">
            <article-item></article-item>
          </v-col>
        </v-row>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn depressed color="transparent">Read more</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </section>
</template>

<script>
    import ArticleItem from "./ArticleItem";

    export default {
        name: "featured-articles",
        components: {ArticleItem}
    };
</script>
