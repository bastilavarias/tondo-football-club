<template>
  <v-card min-height="300" color="transparent" tile flat>
    <v-container>
      <slot name="header"></slot>
      <vue-carousel :per-page="1" center-mode :paginationEnabled="false" navigationEnabled
                    :navigationClickTargetSize="0"
                    class="vue-carousel" :navigationNextLabel="navigationNextIcon"
                    :navigationPrevLabel="navigationPreviousIcon">
        <slot></slot>
      </vue-carousel>
    </v-container>
  </v-card>
</template>

<script>
    export default {
        name: "match-schedules",

        props: {
            navigationIconClass: {
                type: String,
                required: true
            }
        },

        computed: {
            navigationNextIcon() {
                return `<svg class="vue-carousel-icon ${this.navigationIconClass}" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>`;
            },

            navigationPreviousIcon() {
                return `<svg class="vue-carousel-icon ${this.navigationIconClass}" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>`;
            }
        }
    };
</script>

<style lang="scss">
  .vue-carousel-icon {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  .VueCarousel {
    background-color: transparent;
  }

  .VueCarousel-slide {
    background-color: transparent;
  }

  .VueCarousel-navigation-next {
    transform: translateY(-290%) translateX(0) !important;
  }

  .VueCarousel-navigation-prev {
    transform: translateY(-290%) translateX(0) !important;

  }
</style>
