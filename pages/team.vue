<template>
  <section>
    <generic-parallax title="Team" subtitle="Know more about the" :image="require('../assets/banners/aboutUs.jpg')"></generic-parallax>
    <div :style="`background-image: url('${require('../assets/backgrounds/pattern-gray-background.png')}')`">
      <v-container>
        <v-row dense>
          <template v-for="n in 6">
            <v-col cols="12" sm="6" md="3" :key="n">
              <player-item :key="n"></player-item>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
    import PlayerItem from "../components/player-item";
    import GenericContentHolder from "../components/generic-content-holder";
    import utilities from "../plugins/utilities";
    import GenericParallax from "../components/generic-parallax";

    export default {
        name: "team",

        components: {GenericParallax, GenericContentHolder, PlayerItem},

        mixins: [utilities]
    };
</script>
