<template>
  <section>
    <generic-parallax :title="bannerContent.title" :subtitle="bannerContent.subtitle"
                      :image="bannerContent.image"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <article-featured></article-featured>
      <generic-holder title="Recent Posts">
        <v-row>
          <template v-for="n in 3">
            <v-col cols="12" md="4">
              <article-preview-item></article-preview-item>
            </v-col>
          </template>
        </v-row>
      </generic-holder>
    </v-container>
  </section>
</template>

<script>
    import GenericParallax from "../../components/generic/generic-parallax";
    import ArticleFeatured from "../../components/article/featured";
    import GenericHolder from "../../components/generic/holder";
    import ArticlePreviewItem from "../../components/article/preview-item";

    const bannerContent = {
        title: "Nosi Balasi",
        subtitle: "Welcome to our",
        image: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86860256_658189931389276_5610456430906703872_o.jpg?_nc_cat=111&_nc_oc=AQnYgBw_KJ3DI720lIcvpukhrMzTHaiMUUQ-_DfAm3RPulWE3iLJolhuW_uU1koqRHc&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=c26b23a83772a921cce04db6d12d2a48&oe=5EC112A0"
    };


    export default {
        components: {ArticlePreviewItem, GenericHolder, ArticleFeatured, GenericParallax},
        data() {
          return {
              bannerContent

          }
      }
  }
</script>
