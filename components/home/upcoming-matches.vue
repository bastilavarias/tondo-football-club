<template>
  <vue-carousel :per-page="1" center-mode :paginationEnabled="false" navigationEnabled :navigationClickTargetSize="0"
                class="vue-carousel" :navigationNextLabel="navigationNextIcon"
                :navigationPrevLabel="navigationPreviousIcon">
    <template v-for="n in 3">
      <vue-slide :key="n">
        <home-upcoming-match-item></home-upcoming-match-item>
      </vue-slide>
    </template>
  </vue-carousel>
</template>

<script>
    import HomeMatchResultItem from "./match-result-item";
    import "../../assets/css/customCarouselStyles.css";
    import HomeUpcomingMatchItem from "./upcoming-match-item";

    export default {
        name: "home-upcoming-matches",
        components: {HomeUpcomingMatchItem, HomeMatchResultItem},

        computed: {
            navigationNextIcon() {
                return `<svg class="vue-carousel-icon primary--text" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>`;
            },
            navigationPreviousIcon() {
                return `<svg class="vue-carousel-icon primary--text" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>`;
            },
        }
    };
</script>
