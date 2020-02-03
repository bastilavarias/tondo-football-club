<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <iframe width="100%" height="315" :src="`https://www.youtube.com/embed/${youtubeId}`" frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
      </v-col>
      <v-col cols="6">
        <h2 class="text-capitalize" v-if="title">{{ title }}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error explicabo id quos vero? Alias at atque aut
           consequatur deleniti earum eligendi, explicabo fuga illo omnis, recusandae temporibus? Debitis doloremque eos
           ex expedita impedit, laudantium officiis quasi quos ullam voluptate. Architecto esse itaque, mollitia nulla
           numquam odio officia sunt tempora voluptates!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "youtube-embed",

        props: {
            youtubeId: {
                type: String,
                required: true
            },

            title: {
                type: String,
                required: false
            }
        }
    };
</script>
