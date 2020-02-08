<template>
  <section>
    <v-parallax :src="require('../assets/banners/aboutUs.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 :class="`${isOnMobile ? 'display-2' : 'display-3'} font-weight-bold`">About Us</h1>
          <div class="mb-2"></div>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <generic-content-holder class-name="white" title="The Tondo Football Club" has-separator font-type="display-1">
            <v-container>
              <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores deserunt
                                    dignissimos in
                                    nostrum perspiciatis quisquam vero, voluptas. Commodi deleniti, ea facilis harum
                                    libero omnis ratione. A
                                    adipisci aliquid aspernatur consectetur deleniti ea earum est et ipsum iusto laborum
                                    modi neque nihil
                                    pariatur, porro quae repellat vel vitae voluptas voluptate.</p>
            </v-container>
          </generic-content-holder>
        </v-col>
        <v-col cols="12" md="6">
          <generic-content-holder class-name="white" title="Our Mission" has-separator font-type="display-1">
            <v-container>
              <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores deserunt
                                    dignissimos in
                                    nostrum perspiciatis quisquam vero, voluptas. Commodi deleniti, ea facilis harum
                                    libero omnis ratione. A
                                    adipisci aliquid aspernatur consectetur deleniti ea earum est et ipsum iusto laborum
                                    modi neque nihil
                                    pariatur, porro quae repellat vel vitae voluptas voluptate.</p>
            </v-container>
          </generic-content-holder>
        </v-col>
        <v-col cols="12" md="6">
          <generic-content-holder class-name="white" title="Our Vision" has-separator font-type="display-1">
            <v-container>
              <p class="subtitle-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores deserunt
                                    dignissimos in
                                    nostrum perspiciatis quisquam vero, voluptas. Commodi deleniti, ea facilis harum
                                    libero omnis ratione. A
                                    adipisci aliquid aspernatur consectetur deleniti ea earum est et ipsum iusto laborum
                                    modi neque nihil
                                    pariatur, porro quae repellat vel vitae voluptas voluptate.</p>
            </v-container>
          </generic-content-holder>
        </v-col>
      </v-row>
    </v-container>
    <generic-content-holder class="bg-dirty-white" title="Cultural Architects Of Tondo" has-separator is-centered font-type="display-1">
      <div class="mb-10"></div>
      <v-container>
        <iframe width="100%" :height="isOnMobile ? '400' : '500'" src="https://www.youtube.com/embed/Ee5XXUkTo9A"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </v-container>
    </generic-content-holder>
  </section>
</template>

<script>
    import MainNavBar from "../layouts/partials/main-nav-bar";
    import GenericContentHolder from "../components/generic-content-holder";
    import utilities from "../plugins/utilities";

    export default {
        name: "about-us",

        components: {GenericContentHolder, MainNavBar},

        mixins: [utilities]
    };
</script>

<style scoped>
</style>
