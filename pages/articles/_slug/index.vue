<template>
  <v-container>
    <div style="margin-bottom: 5rem;"></div>
    <v-btn light depressed @click="$router.go(-1)" class="mt-5 mb-5">
      <v-icon class="mr-1">mdi-chevron-left</v-icon>
      <span>Back</span>
    </v-btn>
    <v-img :src="article.content.banner" max-height="200" contain class="mb-10"></v-img>
    <section ref="content">
      <v-row>
        <v-col cols="12" md="10">
          <v-card flat color="transparent">
            <v-list-item>
              <v-list-item-avatar color="grey"></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="headline">{{article.title}}</v-list-item-title>
                <v-list-item-subtitle>by Kurt Wagner • Posted on March 3, 2020</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-text>
              {{article.content.text}}
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="2"></v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
    import information from "../../../information";
    import GenericParallax from "../../../components/generic/parallax";

    export default {
        components: {GenericParallax},
        mixins: [information],

        computed: {
            slug() {
                return this.$route.params.slug;
            },

            postedArticles() {
                return this.information.article.posted;
            },

            article() {
                return this.postedArticles.find(article => article.slug === this.slug);
            }
        },

        head() {
            return {
                title: this.article.title
            }
        },

        created() {
            setTimeout(() => this.$vuetify.goTo(this.$refs.content.offsetTop), 500);
        }
    };
</script>
