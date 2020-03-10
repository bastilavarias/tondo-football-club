import imageCDN from "./imageCDN";

export default {
  banner: {
    title: "Team",
    subtitle: "Know More About The\n",
    image: imageCDN.banner.team
  },

  coach: {
    quote: "Tondo Football Club is not just a club, it is a pride movement that aims to change the image of Tondo, Manila through football.",
    profile: {
      name: "Mark Dennis Balbin",
      position: "Head Coach / Manager",
      image: {
        landscape: imageCDN.players.markDennis,
        portrait: imageCDN.players.markDennisCropped
      }
    }
  },

  lineup: [
    {
      name: "Jazper Jimenez",
      image: imageCDN.players.jazperJimenez,
      position: "Goal Keeper"
    },
    {
      name: "Morrison Monte",
      image: imageCDN.players.morrisonMonte,
      position: "Goal Keeper"
    },
    {
      name: "Chester Danay",
      image: imageCDN.players.chesterDanay,
      position: "Midfielder"
    },
    {
      name: "Jonel Dela Cruz",
      image: imageCDN.players.jonelDelaCruz,
      position: "Forward"
    },
    {
      name: "Jovert Ayuban",
      image: imageCDN.players.jovertAyuban,
      position: "Defender"
    },
    {
      name: "Luxter Arsenio",
      image: imageCDN.players.luxterArsenio,
      position: "Winger"
    },
    {
      name: "Roger Batuigas",
      image: imageCDN.players.rogerBatuigas,
      position: "Defender"
    },
    {
      name: "Mark Dennis Balbin",
      image: imageCDN.players.markDennisCropped,
      position: "Head Coach / Manager"
    }
  ]
};
