export type RideType = {
  id: number;
  title: string;
  date: string;
  summary: string;
  images: string[];
  headerImg: string;
};

export const rides: RideType[] = [
  {
    id: 1,
    title: "T Shirt Exchange Ride",
    date: "2024-06-01",
    summary: "A celebration for our friend Jasen!.",
    images: new Array(11).fill(0).map((_, i) => `/shirtexchange/${i + 1}.jpg`),
    headerImg: "/shirtexchange/3.jpg",
  },
  {
    id: 2,
    title: "Coin Flip Rodeo",
    date: "2024-05-15",
    summary: "Random jaunt via the coin.",
    images: new Array(7)
      .fill(0)
      .map((_, i) => `/coinflip/coinflip-${i + 1}.jpg`),
    headerImg: "/coinflip/coinflip-2.jpg",
  },
  {
    id: 3,
    title: "Equinox Ride",
    date: "2024-04-02",
    summary: "Easter egg hunt around San Diego #lightchasers.",
    images: new Array(9).fill(0).map((_, i) => `/equinox/equinox-${i + 1}.jpg`),
    headerImg: "/equinox/equinox-4.jpg",
  },
  {
    id: 4,
    title: "MAAP Century Ride",
    date: "2024-02-03",
    summary: "Final ride of our road to 💯 series.",
    images: new Array(15)
      .fill(0)
      .map((_, i) => `/maap_century/maap_century-${i + 1}.jpg`),
    headerImg: "/maap_century/maap_century-4.jpg",
  },
  {
    id: 5,
    title: "YUMA",
    date: "2023-11-23",
    summary: "AKA Brawley Vegas, 200 mi of joy from san diego to yuma AZ",
    images: new Array(29).fill(0).map((_, i) => `/yuma/yuma-${i + 1}.jpg`),
    headerImg: "/yuma/yuma-4.jpg",
  },
];
