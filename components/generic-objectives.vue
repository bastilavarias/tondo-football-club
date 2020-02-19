<template>
  <div class="py-10">
    <v-container>
      <div class="text-center mb-10" v-if="title">
        <h1 class="display-1 font-weight-bold">
          {{title}}
        </h1>
        <div class="separator"></div>
      </div>
      <v-row>
        <template v-for="(objective, index) in information.tondoFootballClub.objectives">
          <v-col cols="12" :sm="index === 2 ? '12' : '6'" md="4" :key="index">
            <v-card min-height="250" color="white">
              <v-card-text>
                <v-row justify="center">
                  <v-icon x-large color="primary">{{objective.iconName}}</v-icon>
                </v-row>
                <div class="mt-5 text-center">
                  <span v-html="objective.message"></span>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
    import information from "../information";

    export default {
        name: "generic-objectives",

        props: {
            title: {
                type: String,
                required: false
            }
        },

        mixins: [information]
    };
</script>
