<template>
  <div :style="`background-image: url('${image}')`" class="content-background pt-10">
    <div style="color: #ffffff;" class="text-center">
     <v-container>
       <h1 class="display-2 font-weight-bold mb-10">{{title}}</h1>
       <p class="subtitle-1" v-if="subtitle">{{subtitle}}</p>
     </v-container>
    </div>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "generic-content-holder",

        props: {
            title: {
                type: String,
                required: true
            },

            subtitle: {
                type: String,
                required: false
            },

            image: {
                required: true
            }
        }
    };
</script>

<style scoped>
  .content-background {
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    -webkit-box-shadow: inset 0px 0px 300px 200px rgba(192,57,43,0.8);
    -moz-box-shadow: inset 0px 0px 300px 200px rgba(192,57,43,0.8);
    box-shadow: inset 0px 0px 300px 200px rgba(192,57,43,0.8);
  }
</style>
