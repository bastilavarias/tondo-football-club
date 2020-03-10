<template>
  <footer class="white--text" id="main-footer">
    <div class="primary">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <h1 class="title font-weight-bold white--text text-uppercase">The Tondo Football Club</h1>
            <p class="white--text body-1">
              {{about.message}}
              <v-btn icon dark small exact :to="{name: 'about-us'}" exact-active-class="d-none">
                <v-icon small>mdi-chevron-right</v-icon>
              </v-btn>
            </p>
          </v-col>
          <v-col cols="12" md="4">
            <h1 class="title font-weight-bold white--text text-uppercase">Contact</h1>
            <template v-for="(contact, index) in contacts">
              <span class="white--text body-1 d-block mb-1" :key="index">
                <v-icon dark class="mr-1">{{contact.iconName}}</v-icon>
                {{contact.name}}
              </span>
            </template>
          </v-col>
          <v-col cols="12" md="4">
            <vue-gallery :images="featuredPhotos" :index="currentFeaturedPhotoIndex" @close="currentFeaturedPhotoIndex = null"></vue-gallery>
            <h1 class="title font-weight-bold white--text text-uppercase">Featured Photos</h1>
            <v-row dense>
              <template v-for="(photo, index) in featuredPhotos">
                <v-col cols="4">
                  <v-img @click="currentFeaturedPhotoIndex = index" max-height="75" :src="photo" :lazy-src="photo" :key="index"></v-img>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="secondary">
      <v-container>
        <v-row justify="space-around" justify-md="space-between" align="center">
          <span>Tondo Football Club  © {{currentYear}}</span>
          <div>
            <template v-for="(link, index) in socials">
              <v-btn icon dark
                     :href="link.url"
                     target="_blank"
                     :key="index">
                <v-icon>{{link.iconName}}</v-icon>
              </v-btn>
            </template>
          </div>
        </v-row>
      </v-container>
    </div>
  </footer>
</template>

<script>
    import information from "../../information";

    export default {
        name: "main-footer",

        mixins: [information],

        data() {
          return {
              currentFeaturedPhotoIndex: null,
              featuredPhotos: []
          }
        },

        computed: {
            tondoFootballClub() {
                return this.information.tondoFootballClub;
            },

            socials() {
                return this.tondoFootballClub.socials;
            },

            contacts() {
                return this.tondoFootballClub.contacts;
            },

            about() {
                return this.tondoFootballClub.about;
            },

            navigations() {
                return this.tondoFootballClub.navigations;
            },

            currentYear() {
                return new Date().getFullYear();
            }
        },

        created() {
            this.featuredPhotos = this.tondoFootballClub.featuredPhotos;
        }
    };
</script>

<style scoped>
  #main-footer {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
