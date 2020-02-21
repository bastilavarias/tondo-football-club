<template>
  <section>
    <generic-parallax :title="bannerContent.title" :subtitle="bannerContent.subtitle"
                      :image="bannerContent.image"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <generic-about-us title="About 7s League"
                        message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at beatae commodi est et eum illo incidunt laborum, nesciunt nobis, numquam pariatur possimus quaerat, quam quis rem saepe sapiente sed! Ducimus ex fugit hic, iste magni necessitatibus non odit optio quibusdam rem, repellat, saepe sapiente. Amet itaque minus mollitia tempore?"
                        :image="require('../../assets/logos/7sLeague.png')"></generic-about-us>
      <v-row dense>
        <v-col cols="12" md="10">
          <v-card class="mb-5">
            <v-card-title>League Table</v-card-title>
            <league-table></league-table>
          </v-card>
          <v-card>
            <v-card-title>Match Results</v-card-title>
            <match-result></match-result>
            <match-result></match-result>
            <match-result></match-result>
          </v-card>
        </v-col>
        <v-col cols="12" md="2">
          <generic-quick-links :links="quickLinks"></generic-quick-links>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
    import LeagueTable from "../../components/league-table";
    import GenericParallax from "../../components/generic/generic-parallax";
    import MatchResult from "../../components/match-result";
    import GenericQuickLinks from "../../components/generic/generic-quick-links";
    import AboutUs from "../../components/generic/generic-about-us";

    const bannerContent = {
        title: "7s Football League",
        subtitle: "Fixtures & Results",
        image: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86860256_658189931389276_5610456430906703872_o.jpg?_nc_cat=111&_nc_oc=AQnYgBw_KJ3DI720lIcvpukhrMzTHaiMUUQ-_DfAm3RPulWE3iLJolhuW_uU1koqRHc&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=c26b23a83772a921cce04db6d12d2a48&oe=5EC112A0"
    };

    const quickLinks = [
        {
            name: "Schedules",
            to: {name: "match-schedules-7s-football-league"}
        },
        {
            name: "Team",
            to: {name: "team"}
        }
    ];

    export default {
        components: {
            AboutUs,
            GenericQuickLinks,
            MatchResult, GenericParallax, LeagueTable
        },

        data() {
            return {
                quickLinks,
                tab: null,
                bannerContent
            };
        }
    };
</script>
