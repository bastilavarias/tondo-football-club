<template>
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
</template>

<script>
    import information from "../../information";

    export default {
        name: "generic-objectives",
        mixins: [information]
    };
</script>
