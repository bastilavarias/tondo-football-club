import imageCDN from "./imageCDN";

export default {
  banner: {
    title: "7s Football League",
    subtitle: "League Participation",
    image: imageCDN.banner.sevenSFootballLeague
  },

  about: {
    title: "About 7s League",
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam at beatae commodi est et eum illo incidunt laborum, nesciunt nobis, numquam pariatur possimus quaerat, quam quis rem saepe sapiente sed! Ducimus ex fugit hic, iste magni necessitatibus non odit optio quibusdam rem, repellat, saepe sapiente. Amet itaque minus mollitia tempore?",
    logo: imageCDN.logo.sevenSFootballLeague
  },

  schedules: [
    {
      category: {
        age: "Open",
        gender: "Men"
      },
      matches: [
        {
          date: "Feb 16, 2020",
          time: "8:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 3
          },
          teamB: {
            name: "Deportivo Matu FC",
            logo: imageCDN.logo.deportivoMatuFC,
            score: 2
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Feb 23, 2020",
          time: "3:00 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "D. Matsunaga FC",
            logo: imageCDN.logo.dMatsunagaFA,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Mar 01, 2020",
          time: "4:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Spoly FC",
            logo: imageCDN.logo.spolyFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Mar 08, 2020",
          time: "3:00 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Laro FC",
            logo: imageCDN.logo.laroFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Mar 22, 2020",
          time: "6:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Mondo International FC",
            logo: imageCDN.logo.mondoInternationalFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Mar 29, 2020",
          time: "7:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Monte Manila FC",
            logo: imageCDN.logo.monteManilaFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Apr 19, 2020",
          time: "8:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Manila Diggers",
            logo: imageCDN.logo.manilaDiggers,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "Apr 26, 2020",
          time: "8:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Superbad Pride FC",
            logo: imageCDN.logo.superbadPrideFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "May 03, 2020",
          time: "7:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Real Amigos Philippine Eagle FC",
            logo: imageCDN.logo.realAmigosPhilippineEagleFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "May 10, 2020",
          time: "6:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Who Smart FC",
            logo: imageCDN.logo.whoSmartFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "May 17, 2020",
          time: "6:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Manhur Fatima FC",
            logo: imageCDN.logo.manhurFatimaFC,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        },
        {
          date: "May 24, 2020",
          time: "4:30 PM",
          teamA: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC,
            score: 0
          },
          teamB: {
            name: "Super Eagles PH",
            logo: imageCDN.logo.superEaglesPH,
            score: 0
          },
          venue: "McKinley Hills Stadium"
        }
      ]
    }
  ],

  team: {
    categories: [
      {
        age: "Open",
        gender: "Men"
      }
    ]
  },

  leagueTable: {
    headers: [
      {
        text: "Team",
        value: "details.name"
      },
      {
        text: "Game Played",
        value: "statistic.gp"
      },
      {
        text: "Win",
        value: "standing.win"
      },
      {
        text: "Draw",
        value: "standing.draw"
      },
      {
        text: "Loss",
        value: "standing.loss"
      },
      {
        text: "Goal For",
        value: "statistic.gf"
      },
      {
        text: "Goal Against",
        value: "statistic.ga"
      },
      {
        text: "Goal Difference",
        value: "statistic.gd"
      },
      {
        text: "Points",
        value: "points"
      }
    ],

    items: [
      {
        category: {
          age: "Open",
          gender: "Men"
        },

        teams: [
          {
            details: {
              name: "DMatsunaga FA",
              logo: imageCDN.logo.dMatsunagaFA
            },

            statistic: {
              gp: 2,
              gf: 10,
              ga: 1,
              gd: 9
            },

            standing: {
              win: 2,
              loss: 0
            },

            points: 6
          },
          {
            details: {
              name: "Who Smart FC",
              logo: imageCDN.logo.whoSmartFC
            },

            statistic: {
              gp: 2,
              gf: 6,
              ga: 3,
              gd: 3
            },

            standing: {
              win: 2,
              loss: 0
            },

            points: 6
          },
          {
            details: {
              name: "Monte Manila FC",
              logo: imageCDN.logo.monteManilaFC
            },

            statistic: {
              gp: 2,
              gf: 9,
              ga: 7,
              gd: 2
            },

            standing: {
              win: 2,
              loss: 0
            },

            points: 6
          },
          {
            details: {
              name: "Mondo International FC",
              logo: imageCDN.logo.mondoInternationalFC
            },

            statistic: {
              gp: 2,
              gf: 8,
              ga: 4,
              gd: 4
            },

            standing: {
              win: 1,
              loss: 1
            },

            points: 3
          },
          {
            details: {
              name: "Superbad Pride FC",
              logo: imageCDN.logo.superbadPrideFC
            },

            statistic: {
              gp: 2,
              gf: 8,
              ga: 4,
              gd: 4
            },

            standing: {
              win: 1,
              loss: 1
            },

            points: 3
          },
          {
            details: {
              name: "Manhur - Fatima FC",
              logo: imageCDN.logo.manhurFatimaFC
            },

            statistic: {
              gp: 2,
              gf: 4,
              ga: 2,
              gd: 2
            },

            standing: {
              win: 1,
              loss: 1
            },

            points: 3
          },
          {
            details: {
              name: "Deportivo Matu FC",
              logo: imageCDN.logo.deportivoMatuFC
            },

            statistic: {
              gp: 2,
              gf: 4,
              ga: 3,
              gd: 1
            },

            standing: {
              win: 1,
              loss: 1
            },

            points: 3
          },
          {
            details: {
              name: "Tondo FC",
              logo: imageCDN.logo.tondoFC
            },

            statistic: {
              gp: 1,
              gf: 3,
              ga: 2,
              gd: 1
            },

            standing: {
              win: 1,
              loss: 0
            },

            points: 3
          },
          {
            details: {
              name: "Spoly FC",
              logo: imageCDN.logo.spolyFC
            },

            statistic: {
              gp: 2,
              gf: 2,
              ga: 5,
              gd: -3
            },

            standing: {
              win: 1,
              loss: 1
            },

            points: 3
          },
          {
            details: {
              name: "Real Amigos Philippine Eagle FC",
              logo: imageCDN.logo.realAmigosPhilippineEagleFC
            },

            statistic: {
              gp: 1,
              gf: 5,
              ga: 6,
              gd: -1
            },

            standing: {
              win: 0,
              loss: 1
            },

            points: 0
          },
          {
            details: {
              name: "Super Eagles FC",
              logo: imageCDN.logo.superEaglesPH
            },

            statistic: {
              gp: 2,
              gf: 2,
              ga: 4,
              gd: -2
            },

            standing: {
              win: 0,
              loss: 2
            },

            points: 0
          },
          {
            details: {
              name: "Laro FC",
              logo: imageCDN.logo.laroFC
            },

            statistic: {
              gp: 2,
              gf: 1,
              ga: 11,
              gd: -10
            },

            standing: {
              win: 0,
              loss: 2
            },

            points: 0
          },
          {
            details: {
              name: "Manila Diggers",
              logo: imageCDN.logo.manilaDiggers
            },

            statistic: {
              gp: 2,
              gf: 1,
              ga: 11,
              gd: -10
            },

            standing: {
              win: 0,
              loss: 2
            },

            points: 0
          },
        ]
      }
    ]
  }
};
