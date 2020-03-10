<template>
  <div class="py-5 py-md-8">
    <v-row justify="center" align="center">
      <v-img :src="selectaLogo" max-width="180" height="auto"></v-img>
    </v-row>
  </div>
</template>

<script>
  import imageCDN from "../../information/imageCDN";

  export default {
      name: "generic-sponsors",
      computed: {
          selectaLogo() {
              return imageCDN.logo.selecta;
          }
      }
  }
</script>
