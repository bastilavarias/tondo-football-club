<template>
  <section id="featured-articles">
    <v-container>
      <v-card flat color="transparent" dark>
        <v-col cols="12">
          <h2>Featured Articles</h2>
          <v-row>
            <template v-for="n in 3">
              <v-col cols="12" :md="n === 3 ? 'auto' : '6'" :key="n">
                <article-item></article-item>
              </v-col>
            </template>
          </v-row>
        </v-col>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn class="transparent" dark depressed>Read More</v-btn>
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

<style scoped>
  #featured-articles {
    background-color: #D02026;
    min-height: 8rem;
    color: #F5F5F5;
  }
</style>
