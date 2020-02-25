import imageCDN from "./imageCDN";

const articleModule = {
  banner: {
    title: "Nosi Balasi",
    subtitle: "Welcome to our",
    image: imageCDN.banner.nosiBalasi
  },

  recent: [
    {
      title: "A great opening match against the giants of Deportivo Matu",
      slug: "a-great-opening-match-against-the-giants-of-deportivo-matu",
      date: "Feb 9,2020",
      author: {
        name: "Mark Dennis Balbin"
      },
      content: {
        banner: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/s960x960/85231820_654129905128612_2470505750330343424_o.jpg?_nc_cat=106&_nc_sid=a61e81&_nc_oc=AQnte-92Gtjr58DaVVeo5cXMt2k2BzrPrLzz0gFrRoyKnZET7pbDZRK9JUDU4yiTWyc&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=7&oh=28fc4bba2c80e75fff6efd7b9a7a5250&oe=5EC4A584",
        text: "Tondo F.C and Deportivo Matu was the 1st match of the 1st division of the 5th season of AIA Philam Life 7’s Football league in Mckinley hill stadium Feb 9, 2020. Tondo F. C’s first win in this team, losing 3 games for the last 3 seasons. But this season is a different story. Tondo were able to score 1st in the game. Roberto Orlandez Jr. combining with MJ Libre resulting to a goal. Few minutes later the giants of Deportivo Matu equalize the score from a header coming from a throw in.  The debut match of the youngest player in the squad of Tondo FC, Clarence Ayuban (age 17) finds an opening in the second half. Minutes before the 2nd half ends, Tondo F.C defense opens up for a long shot from Matu player (2-2). Extra time was given for the game to find the winner. James Ayuban struck to ball hard from the left side resulting to a golden goal, giving the Tondo F.C players a glorious celebration to end the game 3-2."
      }
    },

    {
      title: "Tondo F.C falls short against DMatsunaga",
      slug: "tondo-f.c-falls-short-against-dmatsunaga",
      date: "Feb 23, 2020",
      author: {
        name: "Mark Dennis Balbin"
      },
      content: {
        banner: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/87519313_663930030815266_7560565741582286848_n.jpg?_nc_cat=101&_nc_sid=a61e81&_nc_oc=AQko3mTVGHKK80Wy751MUO8IV_7FbraDzXLGGg94Sl4HOVOHBKjukDVYdxx47ZuR7PQ&_nc_ht=scontent.fmnl5-1.fna&oh=7302e5dd4621e3af51736f00545da223&oe=5EBC16FC",

        text: "A 4-2 lost against DMatsunaga on a heated 3pm match last Sunday February 23,2020 at AIA Philam Life 7’sFootball league. Roberto Orlandez Jr. struck the 1st goal of the match on a rebound after Jonel Dela Cruz able to kick the ball and blocked by the keeper of DMatsunaga. After a few minutes DMatsunaga player found an opening from the right side of the defense line and made it to 1-1. As the weather goes hotter the head of the players from both sides were heating up. The Brazillian players of DMatsunaga were able to capitalize 1 more goal on the 1st half (1-2) and another 2 goals on the 2nd half. But 3 mins before the match end. DMatsunaga fouled Melvic Pitogo(Tondo FC) in front of the penalty box. A freekick goal from Pitogo made the final score 2-4."
      }
    },
  ],

  featured: {
    title: "Advantages and disadvantages of Supremo League",
    slug: "advantages-and-disadvantages-of-supremo-league",
    date: "Feb 22, 2020",
    author: {
      name: "Mark Dennis Balbin"
    },
    content: {
      banner: "https://scontent.fmnl5-1.fna.fbcdn.net/v/t1.0-9/s960x960/85120661_652859991922270_2237456452572676096_o.jpg?_nc_cat=110&_nc_sid=a61e81&_nc_eui2=AeFBQUTNt2QBKf9P2n0DVZvz189F496e9Ncb9_-7S-NABr8JSKcRLHDUTqGqQsEkl3jghPpZFuiXeZBo_Ho8FngpWtEAicqWJ2q8mx6qRgr65Q&_nc_oc=AQncuPm8ugJo_7KAC1WXybPNdxUzkVbQDG6pIMoFgKr-UzZ9DGTwtiv-bXbNBfN-fno&_nc_pt=1&_nc_ht=scontent.fmnl5-1.fna&_nc_tp=7&oh=87e32ff1a9157d04c5161e2834772f61&oe=5EFC7889",
      text: "Supremo Futsal league is still having its problem on its 3rd week. The league is designed to have different Basketball courts as it’s venue for the league games. Its challenge is this courts doesn’t accept a fix schedule from different organization because barangay programs during the weekend might change on a weekly basis. Last Saturday, Feb 22 the league games for u16 were cancelled because of a sudden change in the schedule of the court. League organizers cannot fix the schedule also in one partnered private court because they are also having their own programs this weekend. Another problem for the Supremo League since it is free for the participants, teams may not come or maybe late during the game. Manilenos United who are part of the u10 and u12 in Feb 22 schedule games in brgy 118 did not show up, resulting to a default game but then since this is a developing league a makeup game on that day was the solution for all the teams who showed to have a game. Another advantage of the league is that it promotes the sport in local barangay were non-football audience loves watching the games. This can make football more popular starting in the barangay areas of Manila."
    }
  },
};

articleModule.posted = [
  articleModule.featured,
  ...articleModule.recent,
];

export default articleModule;
