<template>
  <v-app>
    <v-app-bar app elevate-on-scroll :color="isScrolled ? 'white' : 'transparent'"
               :elevation="routeName === 'articles-slug' ? '2' : ''">
      <v-toolbar-title>
        <v-avatar :size="50">
          <v-img :src="tondoFCLogo"></v-img>
        </v-avatar>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="screenBreakPoint.lgAndDown">
        <v-app-bar-nav-icon :class="`${isScrolled || routeName === 'articles-slug' ? 'primary--text' : 'white--text'}`"
                            @click="sideDrawerState = !sideDrawerState">
          <v-icon>mdi-soccer</v-icon>
        </v-app-bar-nav-icon>
      </template>
      <template v-else>
        <v-toolbar-items>
          <template v-for="(route, index) in routes">
            <v-btn depressed
                   :class="`${isScrolled || routeName === 'articles-slug' ? 'nav-bar-button-scrolled' : 'nav-bar-button'}`"
                   :to="route.to" exact v-if="isObjectHasItems(route.subRoute)" :key="index"
                   :active-class="`${isScrolled ? 'nav-bar-button-scrolled-active' : 'nav-bar-button-active'}`"
            >
              {{route.title}}
            </v-btn>
            <v-menu offset-y open-on-hover transition="slide-y-transition"
                    bottom v-else
            >
              <template v-slot:activator="{ on }">
                <v-btn depressed
                       :class="`${isScrolled || routeName === 'articles-slug' ? 'nav-bar-button-scrolled' : 'nav-bar-button'} `"
                       v-on="on"
                >
                  <span>{{route.title}}</span>
                  <v-icon :color="isScrolled || routeName === 'articles-slug' ? 'primary' : 'white'">mdi-chevron-down
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-subheader>{{route.subRoute.subheader}}</v-subheader>
                <template v-for="(subRoute, index) in route.subRoute.items">
                  <v-list-item :to="subRoute.to" :key="index"
                               exact-active-class="nav-bar-menu font-weight-bold">
                    <v-list-item-content>
                      <v-list-item-title>{{subRoute.title}}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-menu>
          </template>
        </v-toolbar-items>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="sideDrawerState"
                         app
                         right
                         temporary
                         fixed
    >
      <v-list
        dense
        nav
      >
        <template v-for="(route, index) in routes">
          <v-list-item
            :key="index"
            link
            active-class="primary--text"
            :to="route.to"
            exact
            v-if="isObjectHasItems(route.subRoute)"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ route.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            :prepend-icon="route.icon"
            :value="false"
          >
            <template v-slot:activator>
              <v-list-item-title>{{route.title}}</v-list-item-title>
            </template>
            <v-subheader v-if="route.subRoute.subheader">{{route.subRoute.subheader}}</v-subheader>
            <template v-for="(subRoute, index) in route.subRoute.items">
              <v-list-item
                :key="index"
                link
                active-class="primary--text"
                :to="subRoute.to"
                exact
              >
                <v-list-item-avatar :size="30">
                  <v-img :src="subRoute.logo"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{subRoute.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </template>
          </v-list-group>
        </template>
      </v-list>
    </v-navigation-drawer>
    <section>
      <nuxt></nuxt>
    </section>
    <main-footer></main-footer>
  </v-app>
</template>

<script>
    import MainFooter from "./partials/main-footer";
    import "./default.css";
    import imageCDN from "../information/imageCDN";
    import utilities from "../plugins/utilities";

    export default {
        name: "default-layout",
        components: {MainFooter},

        data() {
            return {
                sideDrawerState: false,
                scrollYPosition: 0,
                routes: [
                    {
                        title: "Home",
                        icon: "mdi-home",
                        to: {name: "index"},
                        subRoute: {}
                    },
                    {
                        title: "Leagues", icon: "mdi-trophy",
                        subRoute: {
                            subheader: "League Participation",
                            items: [
                                {
                                    title: "7s Football League",
                                    to: {name: "leagues-7s-football-league"},
                                    logo: imageCDN.logo.sevenSFootballLeague
                                }
                            ]
                        }
                    },
                    {
                        title: "Programs", icon: "mdi-clipboard-list",
                        subRoute: {
                            subheader: "Community Programs",
                            items: [
                                {
                                    title: "Supremo Futsal League",
                                    to: {name: "programs-supremo-futsal-league"},
                                    logo: imageCDN.logo.supremoFutsalLeague
                                }
                            ]
                        }
                    },
                    {
                        title: "Team",
                        icon: "mdi-soccer-field",
                        to: {name: "team"},
                        subRoute: {}
                    },
                    {
                        title: "Nosi Balasi",
                        icon: "mdi-newspaper",
                        to: {name: "articles"},
                        subRoute: {}
                    },
                    {
                        title: "About Us",
                        icon: "mdi-information-variant",
                        subRoute: {
                            subheader: "More Links",
                            items: [
                                {
                                    title: "The Tondo Football Club",
                                    to: {name: "about-us"},
                                    logo: imageCDN.logo.tondoFC
                                }
                            ]
                        }
                    }
                ],
            };
        },

        mixins: [utilities],

        computed: {
            tondoFCLogo() {
                return imageCDN.logo.tondoFC;
            },

            isScrolled() {
                return this.scrollYPosition > 1;
            },

            routeName() {
                return this.$route.name;
            }
        },

        methods: {
            handleScroll() {
                this.scrollYPosition = window.scrollY;
            }
        },

        mounted() {
            window.addEventListener("scroll", this.handleScroll);
        },

        destroyed() {
            window.removeEventListener("scroll", this.handleScroll);
        }
    };
</script>

<style scoped>
  .nav-bar-button-scrolled,
  .nav-bar-button {
    text-transform: capitalize;
    transition: ease-in .2s;

  }

  .nav-bar-button-scrolled:hover,
  .nav-bar-button:hover {
    color: #882021;
  }

  .nav-bar-button {
    background-color: transparent !important;
    color: #ffffff;
  }

  .nav-bar-button::before {
    background-color: transparent;
    color: transparent;
  }

  .nav-bar-button::after {
    background-color: transparent;
    color: transparent;
  }

  .nav-bar-button-scrolled {
    color: #000000;
    background-color: transparent !important;
  }

  .nav-bar-button-scrolled::before {
    background-color: #FFFFFF !important;
    color: #FFFFFF !important;;
  }

  .nav-bar-button-scrolled::after {
    background-color: #FFFFFF !important;
    color: #FFFFFF !important;;
  }

  .nav-bar-button-active {
    color: #FFFFFF !important;
  }

  .nav-bar-button-scrolled-active {
    color: #882021 !important;
    border-bottom: .2rem solid #882021 !important;;
  }

  .nav-bar-menu {
    color: #882021;
  }
</style>
