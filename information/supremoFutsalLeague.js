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
    ],

    items: [

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
    ]
  },

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
  ],

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
  }, // Change Latter


  matchResults: [
    // U10 Mix
    {
      category: {
        age: 10,
        gender: "Mix"
      },
      details: [
        {
          date: "February 15, 2020",
          teams: [
            {
              a: {
                name: "Tondo FC",
                score: 3
              },
              b: {
                name: "Bat. Laurel",
                score: 2
              }
            },
            {
              a: {
                name: "Sta Ana FT",
                score: 6
              },
              b: {
                name: "Man. United",
                score: 1
              }
            }
          ]
        },
        {
          date: "February 22, 2020",
          teams: [
            {
              a: {
                name: "Sta Ana FT",
                score: 3
              },
              b: {
                name: "Bat. Laurel",
                score: 4
              }
            },
            {
              a: {
                name: "Man. United",
                score: 0
              },
              b: {
                name: "Tondo FC",
                score: 5
              }
            }
          ]
        },
        {
          date: "February 29, 2020",
          teams: [
            {
              a: {
                name: "Tondo FC",
                score: 1
              },
              b: {
                name: "Sta Ana FT",
                score: 3
              }
            },
            {
              a: {
                name: "Baseco",
                score: 1
              },
              b: {
                name: "Sta Ana FT",
                score: 3
              }
            }
          ]
        },
      ]
    },

    // U12 Mix
    {
      category: {
        age: 12,
        gender: "Mix"
      },
      details: [
        {
          date: "February 15, 2020",
          teams: [
            {
              a: {
                name: "MRAES",
                score: 3
              },
              b: {
                name: "Tondo FC",
                score: 4
              }
            },
            {
              a: {
                name: "Man. United",
                score: 4
              },
              b: {
                name: "Baseco",
                score: 6
              }
            },
            {
              a: {
                name: "Tondo FC",
                score: 7
              },
              b: {
                name: "Sta Ana FT",
                score: 2
              }
            },
          ]
        },
        {
          date: "February 22, 2020",
          teams: [
            {
              a: {
                name: "Baseco",
                score: 3
              },
              b: {
                name: "MRAES",
                score: 0
              }
            },
            {
              a: {
                name: "Sta Ana FT",
                score: 2
              },
              b: {
                name: "Man. United",
                score: 0
              }
            },
            {
              a: {
                name: "Baseco",
                score: 0
              },
              b: {
                name: "Tondo FC",
                score: 1
              }
            },
            {
              a: {
                name: "Sta Ana FT",
                score: 7
              },
              b: {
                name: "MRAES",
                score: 4
              }
            },
          ]
        },
        {
          date: "February 29, 2020",
          teams: [
            {
              a: {
                name: "Baseco",
                score: 1
              },
              b: {
                name: "Sta Ana FT",
                score: 3
              }
            }
          ]
        },
      ]
    },

    //  U14 Boys
    {
      category: {
        age: 14,
        gender: "Boys"
      },
      details: [
        {
          date: "February 15, 2020",
          teams: [
            {
              a: {
                name: "FC United",
                score: 7
              },
              b: {
                name: "Valenz. FC",
                score: 2
              }
            },
            {
              a: {
                name: "Tondo FC",
                score: 5
              },
              b: {
                name: "Man. United",
                score: 0
              }
            },
          ]
        },
        {
          date: "February 22, 2020",
          teams: [
            {
              a: {
                name: "Sta Ana FT",
                score: 13
              },
              b: {
                name: "Valenz. FC",
                score: 0
              }
            },
            {
              a: {
                name: "Sta Ana FT",
                score: 7
              },
              b: {
                name: "MRAES",
                score: 4
              }
            }
          ]
        },
        {
          date: "March 7, 2020",
          teams: [
            {
              a: {
                name: "Tondo FC",
                score: 3
              },
              b: {
                name: "Sta Ana FT",
                score: 7
              }
            },
            {
              a: {
                name: "Tondo FC",
                score: 18
              },
              b: {
                name: "Valenz. FC",
                score: 0
              }
            },
          ]
        },
      ]
    },

    //  U14 Girls
    {
      category: {
        age: 14,
        gender: "Girls"
      },
      details: [
        {
          date: "February 15, 2020",
          teams: [
            {
              a: {
                name: "Valenz. FC",
                score: 2
              },
              b: {
                name: "Manila Team",
                score: 1
              }
            },
            {
              a: {
                name: "Manila Team",
                score: 1
              },
              b: {
                name: "Tondo FC",
                score: 2
              }
            },
          ]
        },
        {
          date: "February 29, 2020",
          teams: [
            {
              a: {
                name: "Tondo FC",
                score: 6
              },
              b: {
                name: "Valenz. FC",
                score: 3
              }
            },
            {
              a: {
                name: "Valenz. FC",
                score: 3
              },
              b: {
                name: "Manila Team",
                score: 3
              }
            },
          ]
        },
        {
          date: "March 7, 2020",
          teams: [
            {
              a: {
                name: "Tondo FC",
                score: 8
              },
              b: {
                name: "Valenz. FC",
                score: 2
              }
            },
            {
              a: {
                name: "Tondo FC",
                score: 4
              },
              b: {
                name: "Manila",
                score: 2
              }
            }
          ]
        },
      ]
    },

    //  U16 Boys
    {
      category: {
        age: 16,
        gender: "Boys"
      },
      details: [
        {
          date: "February 15, 2020",
          teams: [
            {
              a: {
                name: "FC United",
                score: 5
              },
              b: {
                name: "Tondos United",
                score: 1
              }
            },
            {
              a: {
                name: "Baseco",
                score: 4
              },
              b: {
                name: "Tondo FC",
                score: 4
              }
            },
          ]
        },
        {
          date: "February 29, 2020",
          teams: [
            {
              a: {
                name: "Baseco",
                score: 1
              },
              b: {
                name: "FC United",
                score: 5
              }
            },
            {
              a: {
                name: "Tondos United",
                score: 4
              },
              b: {
                name: "Tondo FC",
                score: 5
              }
            },
          ]
        },
      ]
    },

    //  U16 Girls
    {
      category: {
        age: 16,
        gender: "Girls"
      },
      details: [
        {
          date: "February 8, 2020",
          teams: [
            {
              a: {
                name: "Tondo FC",
                score: 1
              },
              b: {
                name: "FC United",
                score: 3
              }
            },
            {
              a: {
                name: "Baseco",
                score: 4
              },
              b: {
                name: "Tondos United",
                score: 4
              }
            },
          ]
        },
        {
          date: "February  29, 2020",
          teams: [
            {
              a: {
                name: "FC United",
                score: 3
              },
              b: {
                name: "Baseco",
                score: 2
              }
            },
            {
              a: {
                name: "Tondo FC",
                score: 0
              },
              b: {
                name: "Tondos United",
                score: 0
              }
            },
          ]
        },
      ]
    }
  ],

  upcomingMatch: {
    date: "March 15, 2020",
    venue: "To be announce",
    matches: [
      {
        category: "U10 Mix Championship",
        teams: [
          {
            team: {
              a: "Batang Laurel",
              b: "Sta Ana FT"
            },
            time: {
              value: "10:00",
              ampm: "am"
            }
          }
        ]
      },
      {
        category: "U12 Mix Championship",
        teams: [
          {
            team: {
              a: "Tondo FC",
              b: "Sta Ana FT"
            },
            time: {
              value: "11:00",
              ampm: "am"
            }
          }
        ]
      }
    ]
  }
};
