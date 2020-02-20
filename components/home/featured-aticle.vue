<template>
  <v-row no-gutters>
    <v-col cols="12" md="6">
      <v-img
        src="https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/78303102_589263181615285_2025236698228588544_n.jpg?_nc_cat=105&_nc_oc=AQm2zbTDtfYogKHlkv_GCmaV8NwqANwAIFGdY6QPTIs8vQbiIDkDnIKcqX4QHcv-1Zg&_nc_ht=scontent.fmnl5-1.fna&oh=98a84442489c5dbc5ebde3d498ac31ff&oe=5EFD7693"></v-img>
    </v-col>
    <v-col cols="12" md="6">
      <v-container>
        <v-card color="transparent" flat>
          <v-card-title class="display-1 font-weight-bold">Lorem ipsum dolor sit amet.</v-card-title>
          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut beatae ducimus hic illo modi nam
                       vero? Ab accusamus aliquid consequatur consequuntur dolores eligendi enim hic in ipsam laborum
                       magni minus, molestiae nemo nesciunt nihil, nobis nostrum numquam odit pariatur placeat porro
                       quasi quibusdam quis reiciendis repellat sint sit totam voluptates?
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" depressed class="text-capitalize">
              <span>Read this article</span>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
            <v-btn color="primary" depressed class="text-capitalize" outlined>
              <span>See Articles</span>
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
    import utilities from "../../plugins/utilities";

    export default {
        name: "home-featured-article",

        mixins: [utilities]
    };
</script>
