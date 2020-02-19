<template>
  <vue-carousel :per-page="1" center-mode :paginationEnabled="false" :navigationClickTargetSize="0"
                class="vue-carousel" autoplay loop paginationEnabled paginationActiveColor="#882021" paginationColor="#efefef">
    <template v-for="(announcement, index) in announcements">
      <vue-slide :key="index">
        <div style="height: 31.25rem; width: 100%;">
          <home-announcement-item :poster="announcement.poster"
                                  :content="announcement.content"></home-announcement-item>
        </div>
      </vue-slide>
    </template>
  </vue-carousel>
</template>

<script>
    import information from "../../information";
    import HomeAnnouncementItem from "./announcement-item";

    export default {
        name: "home-announcements",
        components: {HomeAnnouncementItem},
        mixins: [information],

        computed: {
            announcements() {
                return this.information.featured.announcements;
            }
        }
    };
</script>

<style lang="scss">
  .VueCarousel-pagination {
    transform: translateY(-150%) translateX(0) !important;
  }
</style>
