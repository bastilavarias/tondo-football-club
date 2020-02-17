<template>
  <vue-carousel :per-page="1" center-mode :paginationEnabled="false" navigationEnabled :navigationClickTargetSize="0"
                class="vue-carousel" :navigationNextLabel="navigationNextIcon"
                :navigationPrevLabel="navigationPreviousIcon">
    <template v-for="(result, index) in matchResults">
      <vue-slide :key="n">
        <home-match-result-item :league-name="result.leagueName" :league-logo="result.leagueLogo" :team-a="result.teamA"
                                :team-b="result.teamB" :poster-image="result.posterImage"></home-match-result-item>
      </vue-slide>
    </template>
  </vue-carousel>
</template>

<script>
    import HomeMatchResultItem from "./match-result-item";
    import "../../assets/css/customCarouselStyles.css";

    const matchResults = [
        {
            leagueName: "7s Football League",
            leagueLogo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2F7sLeague.png?alt=media&token=b1c90ecf-f5cc-427c-8894-975bc7eb7f72",
            teamA: {
                name: "Tondo FC",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FtondoFC.png?alt=media&token=32a2de98-7daa-4c97-8391-b1500a778e44",
                score: "3"
            },
            teamB: {
                name: "Matu",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FMatu.png?alt=media&token=0fd96c02-e938-4b5c-bb26-6c5ee69e8308",
                score: "2"
            },
            posterImage: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86746708_658190478055888_1404674152282980352_o.jpg?_nc_cat=102&_nc_oc=AQnnpKK0EokRHrUt41fDlVnI4IXu6aYHZHTHnbpfUsBGVAp-zi8l-uH7Z_YxZPhXsys&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=eb212ad6e64cc68cc9d5ec33f35d7df2&oe=5EC9B04D"
        }
    ];

    export default {
        name: "home-match-results",
        components: {HomeMatchResultItem},

        data() {
            return {
                matchResults
            };
        },

        computed: {
            navigationNextIcon() {
                return `<svg class="vue-carousel-icon" viewBox="0 0 24 24">
    <path fill="currentColor" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
</svg>`;
            },
            navigationPreviousIcon() {
                return `<svg class="vue-carousel-icon" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" />
</svg>`;
            },
        }
    };
</script>
