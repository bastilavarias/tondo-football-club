<template>
  <v-card style="width: 100%; height: auto;" tile color="transparent" flat>
    <div :style="`background-image: url('${image}')`" class="image-holder"></div>
    <div class="mb-1"></div>
    <div class="text-center px-1 py-1">
      <h1 class="title">{{name}}</h1>
      <p class="body-2 text-uppercase font-weight-bold">{{position}}</p>
    </div>
  </v-card>
</template>

<script>
    import utilities from "../plugins/utilities";

    export default {
        name: "player-item",

        mixins: [utilities],

        props: {
            name: {
                type: String,
                required: true
            },

            image: {
                type: String,
                required: true
            },

            position: {
                type: String,
                required: true
            },
        }
    };
</script>

<style scoped>
  .image-holder {
    background-position: top;
    background-size: contain;
    min-height: 18rem;
    background-repeat: no-repeat;
  }
</style>
