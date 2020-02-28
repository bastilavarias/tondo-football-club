import imageCDN from "./imageCDN";

export default {
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

      // U16 Boys
      {
        details: {
          name: "Tondo F.C",
          category: {
            age: 16,
            gender: "Boys"
          }
        },
        standing: {
          win: 0,
          draw: 1,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: 0
        },
        points: 1
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
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: 0
        },
        points: 1
      },
      {
        details: {
          name: "F.C United",
          category: {
            age: 16,
            gender: "Boys"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 1,
          gd: 4
        },
        points: 1
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
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 5,
          gd: -4
        },
        points: 0
      },

      // U16 Girls
      {
        details: {
          name: "Tondo F.C",
          category: {
            age: 16,
            gender: "Girls"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: -3
        },
        points: 0
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
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: 0
        },
        points: 1
      },
      {
        details: {
          name: "F.C United",
          category: {
            age: 16,
            gender: "Girls"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic:
          {
          gp: 1,
          ga: 1,
          gd: 0
        },
        points: 3
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
          draw: 1,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: 0
        },
        points: 1
      },

      // U14 Boys
      {
        details: {
          name: "Tondo F.C",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: 5
        },
        points: 3
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
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 5,
          gd: -5
        },
        points: 0
      },
      {
        details: {
          name: "F.C United",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 5,
          gd: -5
        },
        points: 3
      },
      {
        details: {
          name: "Valenzuelanos F.C",
          category: {
            age: 14,
            gender: "Boys"
          }
        },
        standing: {
          win: 0,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 7,
          gd: -5
        },
        points: 0
      },

      // U14 Girls
      {
        details: {
          name: "Tondo F.C",
          category: {
            age: 14,
            gender: "Girls"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: -2
        },
        points: 3
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
          draw: 0,
          loss: 2,
        },
        statistic: {
          gp: 2,
          ga: 4,
          gd: -2
        },
        points: 0
      },
      {
        details: {
          name: "Valenzuelanos F.C",
          category: {
            age: 14,
            gender: "Girls"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 1,
          gd: 1
        },
        points: 3
      },

      // U12 Open
      {
        details: {
          name: "Tondo F.C",
          category: {
            age: 12,
            gender: "Mix"
          }
        },
        standing: {
          win: 2,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 2,
          ga: 5,
          gd: 6
        },
        points: 6
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
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: 2
        },
        points: 3
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
          win: 0,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 7,
          gd: -5
        },
        points: 0
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
          win: 0,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 4,
          gd: -1
        },
        points: 0
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
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 6,
          gd: -4
        },
        points: 0
      },

      // U10 Open
      {
        details: {
          name: "Tondo F.C",
          category: {
            age: 10,
            gender: "Mix"
          }
        },
        standing: {
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 2,
          gd: 1
        },
        points: 3
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
          win: 0,
          draw: 0,
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 3,
          gd: -1
        },
        points: 0
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
          win: 1,
          draw: 0,
          loss: 0,
        },
        statistic: {
          gp: 1,
          ga: 1,
          gd: 5
        },
        points: 3
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
          loss: 1,
        },
        statistic: {
          gp: 1,
          ga: 6,
          gd: -4
        },
        points: 0
      },
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
