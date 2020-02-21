<template>
  <section>
    <generic-parallax :title="bannerContent.title" :subtitle="bannerContent.subtitle"
                      :image="bannerContent.image"></generic-parallax>
    <div class="mb-10"></div>
    <v-container>
      <v-row dense>
        <v-col cols="12" md="10">
          <v-card class="mb-5" color="transparent" flat>
            <v-card-title>Upcoming Match</v-card-title>
            <v-card-text>
              <template v-for="(match, index) in upcomingMatches">
                <match-schedule-item :key="index" :date="match.date" :time="match.time" :team-a="match.teamA"
                                     :team-b="match.teamB" :venue="match.venue"></match-schedule-item>
              </template>
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>Match Schedules</v-card-title>
            <match-schedule-item-preview></match-schedule-item-preview>
            <match-schedule-item-preview></match-schedule-item-preview>
            <match-schedule-item-preview></match-schedule-item-preview>
            <match-schedule-item-preview></match-schedule-item-preview>
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
    import GenericParallax from "../../components/generic/generic-parallax";
    import GenericQuickLinks from "../../components/generic/generic-quick-links";
    import MatchScheduleItem from "../../components/match-schedule-item";
    import MatchScheduleItemPreview from "../../components/match-schedule-item-preview";

    const quickLinks = [
        {
            name: "Fixtures & Results",
            to: {name: "fixtures-and-results-7s-football-league"}
        },
        {
            name: "Team",
            to: {name: "team"}
        }
    ];

    const upcomingMatches = [
        {
            date: "Feb 23, 2020",
            time: "3:00 PM",
            teamA: {
                name: "Tondo FC",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FtondoFC.png?alt=media&token=32a2de98-7daa-4c97-8391-b1500a778e44"
            },
            teamB: {
                name: "D. Matsunaga FA",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FDmatsunaga.png?alt=media&token=203800bd-df65-4865-ae0f-e6fbf69421ed"
            },
            venue: "McKinley Hills Stadium"
        },
        {
            date: "Mar 01, 2020",
            time: "4:30 PM",
            teamA: {
                name: "Tondo FC",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FtondoFC.png?alt=media&token=32a2de98-7daa-4c97-8391-b1500a778e44"
            },
            teamB: {
                name: "Spoly",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2Fspoly.png?alt=media&token=996eaf74-dde7-4e20-97f0-d22041b5824b"
            },
            opponentTeamName: "Spoly",
            venue: "McKinley Hills Stadium"
        },
        {
            date: "Mar 08, 2020",
            time: "3:00 PM",
            teamA: {
                name: "Tondo FC",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2FtondoFC.png?alt=media&token=32a2de98-7daa-4c97-8391-b1500a778e44"
            },
            teamB: {
                name: "Laro FC",
                logo: "https://firebasestorage.googleapis.com/v0/b/tondo-football-club-website.appspot.com/o/logos%2Flaro.png?alt=media&token=53908a4f-c927-4057-87ba-30ad02b9c567"
            },
            venue: "McKinley Hills Stadium"
        },
    ];

    const bannerContent = {
        title: "7s Football League",
        subtitle: "Match Schedules",
        image: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86445101_658191731389096_4975666062763753472_o.jpg?_nc_cat=103&_nc_oc=AQmQ1UL0wFQKZqS-p2CwgEIW0zMivM8HY4yvnHKm_oNcLx3g6K_U4TwVDkvyjG4eKYw&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=c188c90e5a61bc4ee47a1ba45cc064ce&oe=5EFE76F6"
    };


    export default {
        components: {
            MatchScheduleItemPreview,
            MatchScheduleItem, GenericQuickLinks, GenericParallax
        },

        data() {
            return {
                quickLinks,
                upcomingMatches,
                bannerContent
            };
        }
    };
</script>
