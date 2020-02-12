<template>
  <section>
    <v-parallax :src="require('../assets/banners/supremoLeague.jpg')" height="450">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 :class="`${isOnMobile ? 'display-2' : 'display-3'} font-weight-bold`">Supremo League</h1>
          <div class="mb-2"></div>
          <div class="custom-short-separator mx-auto"></div>
        </v-col>
      </v-row>
    </v-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row>
        <v-col cols="12" md="3" xl="2">
          <v-avatar :size="200" tile>
            <v-img :src="require('../assets/logos/supremoLeague.png')"></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="12" md="9" xl="10">
          <generic-content-holder class="white" :title="content.title"
                                  font-type="display-1" has-separator>
            <v-container>
              <p class="subtitle-1">{{content.about}}</p>
            </v-container>
          </generic-content-holder>
        </v-col>
      </v-row>
    </v-container>
    <div class="mb-10"></div>
    <generic-content-holder class-name="bg-dirty-white" title="Supremo League Gallery" is-centered has-separator
                            font-type="display-1">
      <div class="mb-10"></div>
      <generic-gallery></generic-gallery>
    </generic-content-holder>
  </section>
</template>

<script>
    import utilities from "../plugins/utilities";
    import GenericContentHolder from "../components/generic-content-holder";
    import GenericGallery from "../components/generic-gallery";

    const content = {
        title: "Supremo Futsal League",
        about: "A year round football activities that will happen in different basketball courts for Futsal league and in Don Bosco Tondo football field for the football league. \n" +
            "Develop the players capability in playing and will increase the popularity of the sport within Tondo and in Manila. Targeting thousands of community members to participate."
    };

    export default {
        name: "supremo-league",

        components: {
            GenericGallery, GenericContentHolder
        },

        mixins: [utilities],

        data() {
            return {
                content,
                tab: null
            };
        }
    };
</script>
