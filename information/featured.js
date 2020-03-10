import imageCDN from "./imageCDN";

export default {
  message: {
    title: {
      tondo: "Tondo",
      football: "Football",
      club: "Club"
    },
    subtitle: "Welcome to the official website of",
    image: imageCDN.banner.landingPage
  },

  upcomingMatch: {
    background: imageCDN.banner.upcomingMatch
  },

  schedule: {
    league: {
      supremoFutsalLeague: {
        details: {
          name: "Supremo Futsal League",
          description: "#1 Futsal League in Manila",
          logo: imageCDN.logo.supremoFutsalLeague,
          venue: "Brgy 118 Chesa St. Tondo Manila",
          date: "February 15, 2020"
        },
        events: [
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
              age: 10,
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
          },
        ]
      },

      sevenSFootballLeague: {
        details: {
          date: "22/03",
          time: "6:30 PM"
        },
        team: {
          a: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC
          },
          b: {
            name: "Mondo",
            logo: imageCDN.logo.mondoInternationalFC
          },
        }
      }
    }
  },

  matchResults: [
    {
      league: {
        name: "7s Football League",
        logo: imageCDN.logo.sevenSFootballLeague
      },
      category: "Men's Open",
      date: "Mar 22, 2020",
      team: {
        a: {
          name: "Tondo FC",
          logo: imageCDN.logo.tondoFC,
          score: 3
        },
        b: {
          name: "Laro FC",
          logo: imageCDN.logo.laroFC,
          score: 1
        }
      },
    },
    {
      league: {
        name: "Supremo Futsal League",
        logo: imageCDN.logo.supremoFutsalLeague
      },
      category: "U14 Boys",
      date: "Mar 7, 2020",
      team: {
        a: {
          name: "Tondo FC",
          logo: "no-logo",
          score: 3
        },
        b: {
          name: "Sta Ana FT",
          logo: "no-logo",
          score: 7
        }
      },
    },
    {
      league: {
        name: "Supremo Futsal League",
        logo: imageCDN.logo.supremoFutsalLeague
      },
      category: "U14 Boys",
      date: "Mar 7, 2020",
      team: {
        a: {
          name: "Tondo FC",
          logo: "no-logo",
          score: 18
        },
        b: {
          name: "Valenzuelanos FC",
          logo: "no-logo",
          score: 0
        }
      },
    },
    {
      league: {
        name: "Supremo Futsal League",
        logo: imageCDN.logo.supremoFutsalLeague
      },
      category: "U14 Girls",
      date: "Mar 7, 2020",
      team: {
        a: {
          name: "Tondo FC",
          logo: "no-logo",
          score: 8
        },
        b: {
          name: "Valenzuelanos FC",
          logo: "no-logo",
          score: 2
        }
      },
    },
    {
      league: {
        name: "Supremo Futsal League",
        logo: imageCDN.logo.supremoFutsalLeague
      },
      category: "U14 Girls",
      date: "Mar 7, 2020",
      team: {
        a: {
          name: "Tondo FC",
          logo: "no-logo",
          score: 4
        },
        b: {
          name: "Manila Team",
          logo: "no-logo",
          score: 2
        }
      },
    }
  ],

  quote: {
    message: "Tondo is known for it’s less positive image. Through the years, our club made an effort to change the image and build a positive impact in our society. Now Tondo is seen as place where football talents are discovered and respected. We will wave this flag in the streets of Tondo with love, pride and glory celebrating the great stories we make.",
    image: imageCDN.banner.kids,
    author: "Mark Dennis Balbin"
  }
};
