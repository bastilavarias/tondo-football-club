import imageCDN from "./imageCDN";

export default {
  message: {
    title: "Tondo Football Club",
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
          name: "7s Football League",
          date: "February 22, 2020",
          time: "4:30 PM",
          venue: "Mckinley Hills BGC",
          logo: imageCDN.logo.sevenSFootballLeague
        },
        team: {
          a: {
            name: "Tondo FC",
            logo: imageCDN.logo.tondoFC
          },
          b: {
            name: "Matu",
            logo: imageCDN.logo.deportivoMatuFC
          },
        }
      }
    }
  },

  announcements: [
    {
      poster: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86746708_658190478055888_1404674152282980352_o.jpg?_nc_cat=102&_nc_eui2=AeH92ZqUQ7x7iO7yIpZdEZ0aIPqbJb4K7miKZm2JU8drWOjP1SEwrBuz0lVszDUSzQPMsmvZZye-0VX2GS5fEsRE_194EPK8pIg5sXPq00Musg&_nc_oc=AQmSrOrZI207RI2kH7iGbOBNHQfIcJJoQtWtniiukmCYtk_IfpMV7_ESE0H4--K3kuk&_nc_pt=1&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=513694fd8b2361545a5a9166b6f7b5d1&oe=5EC9B04D",
      content: {
        title: "Tondo FC Won!",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam consequuntur eos ex inventore laborum minus natus obcaecati totam, vel?\n"
      }
    },
    {
      poster: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-0/p640x640/86746708_658190478055888_1404674152282980352_o.jpg?_nc_cat=102&_nc_eui2=AeH92ZqUQ7x7iO7yIpZdEZ0aIPqbJb4K7miKZm2JU8drWOjP1SEwrBuz0lVszDUSzQPMsmvZZye-0VX2GS5fEsRE_194EPK8pIg5sXPq00Musg&_nc_oc=AQmSrOrZI207RI2kH7iGbOBNHQfIcJJoQtWtniiukmCYtk_IfpMV7_ESE0H4--K3kuk&_nc_pt=1&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=6&oh=513694fd8b2361545a5a9166b6f7b5d1&oe=5EC9B04D",
      content: {
        title: "Tondo FC Won!",
        description: "    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam consequuntur eos ex inventore laborum minus natus obcaecati totam, vel?\n"
      }
    }
  ],

  quote: {
    message: "Tondo is known for it’s less positive image. Through the years, our club made an effort to change the image and build a positive impact in our society. Now Tondo is seen as place where football talents are discovered and respected. We will wave this flag in the streets of Tondo with love, pride and glory celebrating the great stories we make.",
    image: imageCDN.banner.kids,
    author: "Mark Dennis Balbin"
  }
};
