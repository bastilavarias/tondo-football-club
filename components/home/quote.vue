<template>
  <div :style="`background-image: url('${quoteContent.image}')`" class="holder shadow-inset">
    <v-container fill-height>
      <v-row justify="center" align-content="center">
        <blockquote class="blockquote white--text">
          {{quoteContent.message}}<cite>- {{quoteContent.author}}</cite>
        </blockquote>

      </v-row>
    </v-container>
  </div>
</template>

<script>
    import information from "../../information";
    import GenericParallax from "../generic/parallax";

    export default {
        name: "home-quote",
        components: {GenericParallax},
        mixins: [information],

        computed: {
            quoteContent() {
                return this.information.featured.quote;
            }
        }
    };
</script>

<style scoped>
  .shadow-inset {
    -webkit-box-shadow: inset -1px -1px 300px 200px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: inset -1px -1px 300px 200px rgba(0, 0, 0, 0.75);
    box-shadow: inset -1px -1px 300px 200px rgba(0, 0, 0, 0.75);
  }

  cite {
    color: white;
    text-align: right;
    display: block;
  }

</style>
