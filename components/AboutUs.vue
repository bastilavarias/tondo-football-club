<template>
  <section id="about-us">
    <v-container>
      <v-row>
        <v-col cols="4">
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias, amet deserunt ex in neque nobis
             possimus quibusdam reiciendis sunt totam, unde? A at consequatur debitis dicta esse fuga, fugit hic ipsa
             iure minus, mollitia optio quaerat quasi qui similique sit unde? Aperiam architecto autem deserunt illo
             necessitatibus non perferendis!</p>
        </v-col>
        <v-col cols="8">
          <v-img :src="require('../assets/aboutUsImage.jpg')" contain></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    export default {
        name: "about-us"
    };
</script>
