import imageCDN from "./imageCDN";

export default {
  banner: {
    title: "The Supremo Futsal League",
    subtitle: "#1 Football League In Manila",
    image: imageCDN.banner.supremoFutsalLeague
  },

  about: {
    message: "A year round football activities that will happen in different basketball courts for Futsal league and in Don Bosco Tondo football field for the football league. \n" +
      "Develop the players capability in playing and will increase the popularity of the sport within Tondo and in Manila. Targeting thousands of community members to participate.",

    title: "Supremo Futsal League",

    logo: imageCDN.logo.supremoFutsalLeague
  },

  leagueTable: {
    headers: [
      {
        text: "Team",
        value: "details.name"
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
        text: "Game Played",
        value: "statistic.gp"
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
    ]
  },

  team: {
    list: [

      // U10 Mix
      {
        details: {
          name: "Tondo FC",
          category: {
            age: 10,
            gender: "Mix"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 3,
          ga: 4,
          gd: 4
        },
        points: 6
      },
      {
        details: {
          name: "Batang Laurel",
          category: {
            age: 10,
            gender: "Mix"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 3,
          ga: 6,
          gd: 5
        },
        points: 6
      },
      {
        details: {
          name: "Sta Ana Football Team",
          category: {
            age: 10,
            gender: "Mix"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 1
        },
        statistic: {
          gp: 3,
          ga: 5,
          gd: 6
        },
        points: 6
      },
      {
        details: {
          name: "Manileños United",
          category: {
            age: 10,
            gender: "Mix"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 3,
        },
        statistic: {
          gp: 3,
          ga: 9,
          gd: -10
        },
        points: 0
      },

      // U12 Mix
      {
        details: {
          name: "Tondo FC",
          category: {
            age: 12,
            gender: "Mix"
          }
        },
        standing: {
          win: 4,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 4,
          ga: 5,
          gd: 9
        },
        points: 12
      },
      {
        details: {
          name: "Baseco",
          category: {
            age: 12,
            gender: "Mix"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 2,
        },
        statistic: {
          gp: 4,
          ga: 7,
          gd: 3
        },
        points: 6
      },
      {
        details: {
          name: "Sta Ana Football Team",
          category: {
            age: 12,
            gender: "Mix"
          }
        },
        standing: {
          win: 3,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 4,
          ga: 12,
          gd: 2
        },
        points: 9
      },
      {
        details: {
          name: "MRAES",
          category: {
            age: 12,
            gender: "Mix"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 3,
        },
        statistic: {
          gp: 4,
          ga: 14,
          gd: -6
        },
        points: 3
      },
      {
        details: {
          name: "Manileños United",
          category: {
            age: 12,
            gender: "Mix"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 3,
        },
        statistic: {
          gp: 4,
          ga: 9,
          gd: -8
        },
        points: 0
      },

      // U14 Boys
      {
        details: {
          name: "Tondo FC",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 3,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 4,
          ga: 5,
          gd: 21
        },
        points: 9
      },
      {
        details: {
          name: "Manileños United",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 4,
        },
        statistic: {
          gp: 4,
          ga: 20,
          gd: -20
        },
        points: 0
      },
      {
        details: {
          name: "FC United",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 3,
          ga: 6,
          gd: 8
        },
        points: 6
      },
      {
        details: {
          name: "Valenzuelanos FC",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 4,
        },
        statistic: {
          gp: 4,
          ga: 38,
          gd: -33
        },
        points: 3
      },
      {
        details: {
          name: "Sta Ana FT",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 3,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 3,
          ga: 3,
          gd: 22
        },
        points: 9
      },

      // U14 Girls
      {
        details: {
          name: "Tondo FC",
          category: {
            age: 14,
            gender: "Girls"
          }
        },
        standing: {
          win: 4,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 4,
          ga: 8,
          gd: 12
        },
        points: 12
      },
      {
        details: {
          name: "Manila Team",
          category: {
            age: 14,
            gender: "Girls"
          }
        },
        standing: {
          win: 0,
          draw: 1,
          loss: 3,
        },
        statistic: {
          gp: 4,
          ga: 11,
          gd: -4
        },
        points: 1
      },
      {
        details: {
          name: "Valenzuelanos FC",
          category: {
            age: 14,
            gender: "Girls"
          }
        },
        standing: {
          win: 1,
          draw: 1,
          loss: 2,
        },
        statistic: {
          gp: 4,
          ga: 18,
          gd: -8
        },
        points: 4
      },

      // U16 Boys
      {
        details: {
          name: "Tondo FC",
          category: {
            age: 16,
            gender: "Boys"
          }
        },
        standing: {
          win: 1,
          draw: 1,
          loss: 0,
        },
        statistic: {
          gp: 2,
          ga: 8,
          gd: 1
        },
        points: 3
      },
      {
          details: {
          name: "Baseco",
          category: {
            age: 16,
            gender: "Boys"
          }
        },
        standing: {
          win: 0,
          draw: 1,
          loss: 1,
        },
        statistic: {
          gp: 2,
          ga: 8,
          gd: -4
        },
        points: 1
      },
      {
        details: {
          name: "FC United",
          category: {
            age: 16,
              gender: "Boys"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 2,
          ga: 2,
          gd: 8
        },
        points: 6
      },
      {
        details: {
          name: "Tondos United",
          category: {
            age: 16,
            gender: "Boys"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 2,
        },
        statistic: {
          gp: 2,
          ga: 9,
          gd: -5
        },
        points: 0
      },

      // U16 Girls
      {
        details: {
          name: "Tondo FC",
          category: {
            age: 16,
            gender: "Girls"
          }
        },
        standing: {
          win: 0,
          draw: 1,
          loss: 1,
        },
        statistic: {
          gp: 2,
          ga: 4,
          gd: -3
        },
        points: 1
      },
      {
        details: {
          name: "Baseco",
          category: {
            age: 16,
            gender: "Girls"
          }
        },
        standing: {
          win: 0,
          draw: 1,
          loss: 1,
        },
        statistic: {
          gp: 2,
          ga: 7,
          gd: -1
        },
        points: 1
      },
      {
        details: {
          name: "FC United",
          category: {
            age: 16,
            gender: "Girls"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 2,
          ga: 3,
          gd: 5
        },
        points: 6
      },
      {
        details: {
          name: "Tondos United",
          category: {
            age: 16,
            gender: "Girls"
          }
        },
        standing: {
          win: 0,
          draw: 2,
          loss: 0
        },
        statistic: {
          gp: 2,
          ga: 4,
          gd: 0
        },
        points: 2
      }
    ],

    categories: [
      {
        age: 10,
        gender: "Mix"
      },
      {
        age: 12,
        gender: "Mix"
      },
      {
        age: 14,
        gender: "Boys"
      },
      {
        age: 14,
        gender: "Girls"
      },
      {
        age: 16,
        gender: "Boys"
      },
      {
        age: 16,
        gender: "Girls"
      },
    ]
  },


  schedule: {
    upcomingMatches: [
      {
        category: {
          age: 10,
          gender: "Mix"
        },
        matches: [
          {
            team: {
              a: "Tondo FC",
              b: "Batang Laurel"
            },
            time: {
              value: "10:00",
              ampm: "am"
            }
          },
          {
            team: {
              a: "Sta Ana Ft",
              b: "Manilenos United"
            },
            time: {
              value: "10:45",
              ampm: "am"
            }
          },
        ]
      },
      {
        category: {
          age: 12,
          gender: "Mix"
        },
        matches: [
          {
            team: {
              a: "MRAES",
              b: "Tondo FC"
            },
            time: {
              value: "11:30",
              ampm: "am"
            }
          },
          {
            team: {
              a: "Manilenos United",
              b: "Baseco"
            },
            time: {
              value: "12:15",
              ampm: "pm"
            }
          },
          {
            team: {
              a: "Tondo FC",
              b: "Sta Ana FT"
            },
            time: {
              value: "12:50",
              ampm: "pm"
            }
          },
        ]
      }
    ]
  }
};
