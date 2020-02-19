<template>
  <div class="holder" :style="`background-image: url('${poster}')`">
    <div class="announcement-content">
      <v-container>
        <h1 class="white--text display-1 font-weight-bold d-block text-center">{{content.title}}</h1>
      </v-container>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home-announcement-item",

        props: {
            poster: {
                required: true,
                type: String
            },

            content: {
                required: true,
                type: Object
            }
        }
    };
</script>

<style scoped>
  .holder {
    -webkit-box-shadow: inset 0px -200px 69px 200px rgba(0,0,0,0.75);
    -moz-box-shadow: inset 0px -200px 69px 200px rgba(0,0,0,0.75);
    box-shadow: inset 0px -200px 69px 200px rgba(0,0,0,0.75);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .announcement-content {
    position: absolute;
    width: 100%;
    bottom: 20%;
    left: 0;
  }
</style>
