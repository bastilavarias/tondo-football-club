<template>
  <section>
    <div style="height: 100px;"></div>
    <v-container>
      <generic-content-holder class="white" has-separator title="Featured Articles">
        <div class="mb-10"></div>
        <v-row>
          <template v-for="(post, index) in featuredArticles">
            <v-col cols="12" md="4" lg="3">
              <article-item-view :key="index" :title="post.title" :content="post.body"></article-item-view>
            </v-col>
          </template>
        </v-row>
      </generic-content-holder>
      <div class="mb-10"></div>
      <generic-content-holder class="white" has-separator title="Posted Articles">
        <div class="mb-10"></div>
        <v-row>
          <template v-for="(post, index) in posts">
            <v-col cols="12" md="4" lg="3">
              <article-item-view :key="index" :title="post.title" :content="post.body"></article-item-view>
            </v-col>
          </template>
        </v-row>
      </generic-content-holder>
    </v-container>
  </section>

</template>

<script>
    import GenericContentHolder from "../components/generic-content-holder";
    import utilities from "../plugins/utilities";
    import ArticleItemView from "../components/article-item-view";

    export default {
        name: "articles",
        components: {ArticleItemView, GenericContentHolder},

        data() {
            return {
                posts: []
            };
        },

        mixins: [utilities],

        computed: {
            featuredArticles() {
                return this.posts.slice(0, 4);
            }
        },

        mounted() {
            fetch("//jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    this.posts = json.slice(0, 12);
                    console.log(this.posts);
                });
        }
    };
</script>
