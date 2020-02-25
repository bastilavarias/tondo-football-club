<template>
  <div
    :style="`background-image: url('${image}'); background-position: ${backgroundPosition ? backgroundPosition : 'center'} !important;`"
    class="background-image">
    <div class="parallax-content">
      <v-container fill-height>
        <div style="padding-top: 15rem;">
          <h1 class="title font-weight-thin text-capitalize" v-if="subtitle">{{subtitle}}</h1>
          <h1 class="display-1 font-weight-bold text-capitalize">{{title}}</h1>
        </div>
      </v-container>
    </div>
    <div class="dark-overlay-inset"></div>
  </div>
</template>

<script>
    import utilities from "../../plugins/utilities";

    export default {
        name: "generic-parallax",
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
            },

            backgroundPosition: {
                type: String,
                required: false
            }
        },

        mixins: [utilities]
    };
</script>

<style scoped>
  .background-image {
    position: relative;
    height: 450px;
    background-repeat: no-repeat;
    background-size: cover;
    color: #ffffff;
  }

  .dark-overlay-inset,
  .parallax-content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .dark-overlay-inset {
    -webkit-box-shadow: inset 10px -85px 300px 105px rgba(0, 0, 0, 0.8);
    -moz-box-shadow: inset 10px -85px 300px 105px rgba(0, 0, 0, 0.8);
    box-shadow: inset 10px -85px 300px 105px rgba(0, 0, 0, 0.8);
    z-index: 2;
  }

  .parallax-content {
    z-index: 3;
  }
</style>
