<template>
  <v-row no-gutters>
    <v-col cols="12" md="6">
      <iframe width="100%" height="300" src="https://www.youtube.com/embed/Ee5XXUkTo9A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </v-col>
    <v-col cols="12" md="6">
      <v-container>
        <v-card color="transparent" flat>
          <v-card-title class="display-1 font-weight-bold">Cultural Architects Of Tondo</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae ducimus hic illo modi nam
                       vero? Ab accusamus aliquid consequatur consequuntur dolores eligendi enim hic in ipsam laborum
                       magni minus, molestiae nemo nesciunt nihil, nobis nostrum numquam odit pariatur placeat porro
                       quasi quibusdam quis reiciendis repellat sint sit totam voluptates?
          </v-card-text>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
  import GenericHolder from "../generic/holder";
  export default {
      name: "home-embeded-video",
      components: {GenericHolder}
  }
</script>
