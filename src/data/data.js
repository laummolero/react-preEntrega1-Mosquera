const products = [
  {
    id: "Alb001",
    name: "Band Aid - DAY6",
    description:
      "Day6's album Band Aid is their ninth EP, released on September 2, 2024, through Studio J and JYP Entertainment.",
    price: 20000,
    stock: 10,
    image: "/img/bandaid-album.jpg",
    category: "albums",
  },
  {
    id: "Alb002",
    name: "The Boook of Us: Entropy - DAY6",
    description:
      "The Book of Us: Entropy is the third Korean-language studio album by South Korean band Day6. It was released by JYP Entertainment on October 22, 2019.",
    price: 20000,
    stock: 10,
    image: "/img/entropy-album.jpg",
    category: "albums",
  },
  {
    id: "Alb003",
    name: "The Book of Us: Gravity - DAY6",
    description:
      "The Book of Us: Gravity is the fifth extended play by South Korean band Day6. It was released by JYP Entertainment on July 15, 2019.",
    price: 20000,
    stock: 10,
    image: "/img/gravity-album.jpg",
    category: "albums",
  },
  {
    id: "Alb004",
    name: "PROOF - BTS",
    description:
      "Proof is the first anthology album released by South Korean group BTS, on June 10, 2022, through Big Hit Music.",
    price: 65000,
    stock: 10,
    image: "/img/proof-album.jpg",
    category: "albums",
  },
  {
    id: "Alb005",
    name: "Wings - BTS",
    description:
      "Wings is the second Korean and fourth overall studio album by South Korean boy band BTS. The album was released on October 10, 2016, by Big Hit Entertainment.",
    price: 30000,
    stock: 10,
    image: "/img/wings-album.jpg",
    category: "albums",
  },
  {
    id: "Alb006",
    name: "The Most Beautiful Moments in Life. Part 2 - BTS",
    description:
      "The fourth extended play (EP) by South Korean boy band BTS. It was released on November 30, 2015, by Big Hit Entertainment.",
    price: 25000,
    stock: 10,
    image: "/img/the_most_beautiful_moment_in_life_pt2-album.jpg",
    category: "albums",
  },
  {
    id: "Alb007",
    name: "Fancy You - TWICE",
    description:
      "Fancy You is the seventh extended play by the South Korean girl group Twice. It was released by JYP Entertainment on April 22, 2019.",
    price: 30000,
    stock: 10,
    image: "/img/fancy_you-album.jpg",
    category: "albums",
  },
  {
    id: "Alb008",
    name: "More & More - TWICE",
    description:
      "More & More is the ninth extended play by South Korean girl group Twice. It was released by JYP Entertainment and Republic Records on June 1, 2020.",
    price: 30000,
    stock: 10,
    image: "/img/more&more-album.jpg",
    category: "albums",
  },
  {
    id: "Alb009",
    name: "Ready To Be - TWICE",
    description:
      "Ready to Be is the twelfth extended play by South Korean girl group Twice. It was released on March 10, 2023, through JYP Entertainment and Republic Records.",
    price: 30000,
    stock: 10,
    image: "/img/ready_to_be-album.jpg",
    category: "albums",
  },
  {
    id: "Lst001",
    name: "DAY6 OFFICIAL LIGHTBAND VER.3",
    description:
      "DAY6's official light band is a vibrant, multi-colored LED wristband, symbolizing unity and energy, often worn by fans during concerts and events.",
    price: 50000,
    stock: 15,
    image: "/img/myday-watch.jpg",
    category: "lightsticks",
  },
  {
    id: "Lst002",
    name: "TWICE OFFICIAL LIGHTSTICK",
    description:
      "Twice's official lightstick, known as the Candybong Infinity Ver. 3, features a colorful, sparkling design with multiple color options, symbolizing the vibrant and dynamic energy of the group.",
    price: 80000,
    stock: 15,
    image: "/img/candy-bong.jpg",
    category: "lightsticks",
  },
  {
    id: "Lst003",
    name: "BTS OFFICIAL LIGHTSTICK",
    description:
      "BTS's official lightstick is called the ARMY Bomb. It features a sleek, ergonomic design with customizable LED lights that sync with the music during concerts, creating a stunning visual experience for fans.",
    price: 60000,
    stock: 15,
    image: "/img/army-bomb.jpg",
    category: "lightsticks",
  },
  {
    id: "Sg001",
    name: "DAY6 2025 Season's Greetings",
    description: "DAY6 - 2025 SEASON'S GREETINGS [WAY TO TRIP]",
    price: 33000,
    stock: 5,
    image: "/img/day6-seasons.jpg",
    category: "seasongreetings",
  },
  {
    id: "Sg002",
    name: "TWICE 2025 Season's Greetings",
    description: "TWICE 2025 Season's Greetings [Collector]",
    price: 40000,
    stock: 5,
    image: "/img/twice-seasons.jpg",
    category: "seasongreetings",
  },
  {
    id: "Sg003",
    name: "Lee Junho 2025 Season's Greetings",
    description: "LEE JUNHO 2025 SEASON'S GREETINGS [THE STRANGER]",
    price: 34000,
    stock: 5,
    image: "/img/lee_junho-seasons.jpg",
    category: "seasongreetings",
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export { getProducts };
