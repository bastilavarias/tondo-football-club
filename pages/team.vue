<template>
  <section>
    <generic-parallax :title="banner.title" :subtitle="banner.subtitle"
                      :image="banner.image"></generic-parallax>
    <div :style="`background-image: url('${background}')`">
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-card color="transparent" flat class="mb-10">
              <v-row dense>
                <v-col cols="12" md="6">
                  <v-img :src="coach.profile.image.landscape" :lazy-src="coach.profile.image.landscape" width="100%" max-height="300"></v-img>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card-title>{{coach.profile.name}}</v-card-title>
                  <v-card-subtitle class="font-weight-bold">{{coach.profile.position}}</v-card-subtitle>
                  <v-card-text>
                    <blockquote class="font-italic">"{{coach.quote}}"</blockquote>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <template v-for="(player, index) in lineup">
            <v-col cols="6" md="3" :key="index">
              <player-item :key="index" :name="player.name" :image="player.image" :position="player.position"></player-item>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
    import PlayerItem from "../components/player-item";
    import utilities from "../plugins/utilities";
    import GenericParallax from "../components/generic/parallax";
    import information from "../information";

    export default {
        name: "team",

        components: {GenericParallax, PlayerItem},

        head() {
            return {
                title: "Tondo Football Club Team"
            }
        },

        mixins: [utilities, information],

        computed: {
            team() {
                return this.information.team;
            },

            background() {
                return this.team.background;
            },

            banner() {
                return this.team.banner;
            },

            lineup() {
                return this.team.lineup;
            },

            coach() {
                return this.team.coach;
            }
        }
    };
</script>
