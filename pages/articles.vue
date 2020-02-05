<template>
  <v-container>
    <div style="margin-bottom: 4rem;"></div>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="9">
            <h2>Featured Articles</h2>
            <v-row>
              <template v-for="n in 3">
                <v-col cols="12" :md="n === 3 ? 'auto' : '6'" :key="n">
                  <article-item></article-item>
                </v-col>
              </template>
            </v-row>
          </v-col>
          <v-col cols="12" md="3">
            <v-card dark color="primary">
              <v-list dark color="primary">
                <h2 class="ml-4">Recent Articles</h2>
                <template v-for="n in 4">
                  <v-list-item :key="n">
                    <v-list-item-content>
                      <v-list-item-title>Title</v-list-item-title>
                      <v-list-item-subtitle>Posted by Sebastian Curtis T. Lavarias
                      </v-list-item-subtitle>
                      <v-list-item-subtitle>February 5, 2020
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <h2>Posted Articles</h2>
        <v-row>
          <template v-for="n in 10">
            <v-col cols="12" :md="6" :key="n">
              <article-item></article-item>
            </v-col>
          </template>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import ArticleItem from "../components/ArticleItem";

    export default {
        name: "articles",
        components: {ArticleItem}
    };
</script>
