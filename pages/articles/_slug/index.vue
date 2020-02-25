<template>
  <v-container>
    <div style="margin-bottom: 5rem;"></div>
    <v-img :src="article.content.banner" width="auto" height="400" class="mx-auto"></v-img>
    <section ref="content">
      <v-row>
        <v-col cols="12" md="2"></v-col>
        <v-col cols="12" md="8">
          <v-btn light depressed @click="$router.go(-1)" class="mt-5 mb-5">
            <v-icon class="mr-1">mdi-chevron-left</v-icon>
            <span>Back</span>
          </v-btn>
          <h1 class="display-1 font-weight-bold mb-5 text-capitalize">
            {{article.title}}
          </h1>
          <p class="body-1">{{article.content.text}}</p>
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

        created() {
            setTimeout(() => this.$vuetify.goTo(this.$refs.content.offsetTop), 500);
        }
    };
</script>
