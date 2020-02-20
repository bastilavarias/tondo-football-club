<template>
  <v-card flat color="transparent">
    <v-container>
      <v-row>
        <v-col cols="12" md="2">
          <div class="text-center">
            <v-avatar :size="150" tile>
              <v-img
                :src="image"
              ></v-img>
            </v-avatar>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="10"
        >
          <v-card-title>{{title}}</v-card-title>
          <v-card-text>{{message}}</v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
    export default {
        name: "generic-about-us",

        props: {
            image: {
                required: true
            },

            title: {
                type: String,
                required: true
            },

            message: {
                type: String,
                required: true
            },

            about: {
                type: String,
                required: false
            },
        }
    };
</script>
