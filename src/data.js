import img1 from "./assets/img1.avif";
import img5 from "./assets/img5.avif";
import img6 from "./assets/img6.avif";

export const cardJson = [
  {
    image: img1,
    date: "28 Oct 2024",
    title: "Exploring New Horizons in My Latest Post",
    des: "In this post, we dive into fresh ideas and explore exciting opportunities. Join me as we look ahead to innovative strategies shaping the future!",
    linkName: "/blog/thirdBlogDetail",
  },
  {
    image: img5,
    date: "24 Oct 2024",
    title: "A Step Forward: My Second Post",
    des: "This post shares insights into how collaboration and creative strategies can drive meaningful change in the modern world. Let’s explore new pathways together!",
    linkName: "/blog/secondBlogDetail",
  },
  {
    image: img6,
    date: "20 Oct 2024",
    title: "Kicking Things Off: My First Post",
    des: "Welcome to my very first post! Let’s get started by exploring exciting opportunities and fresh approaches that can lead us to success.",
    linkName: "/blog/firstBlogDetail",
  },
];

export const categoriesBlog = [
  {
    link: "/sandybeach",
    name: "Sandy Beaches",
    para: "Discover the tranquil beauty of sandy beaches and immerse yourself in the calming embrace of the ocean breeze.",
    card: cardJson[2],
  },
  {
    link: "/foresttrails",
    name: "Forest Trails",
    para: "Step into nature with forest trails that lead you through serene paths, offering peace and a connection with the outdoors.",
    card: cardJson[0],
  },
  {
    link: "/citystreets",
    name: "City Streets",
    para: "Explore the vibrancy of city streets, where every corner tells a story of life, culture, and the pulse of urban living.",
    card: cardJson[1],
  },
];

export const blogPageDeail = [
  {
    link: "thirdBlogDetail",
    blogPage: cardJson[0],
    para: "Spending time in nature is one of the best ways to recharge. Whether it's a walk along the beach or a hike through the forest, being outdoors helps you feel connected and relaxed. While enjoying nature, you can also play games like frisbee or beach volleyball, which can be fun and healthy. When with your girlfriend, take time to appreciate the beauty around you, hold hands, and create memories. For family time, enjoy a picnic or a casual walk together. These moments of simple joy strengthen bonds and bring everyone closer. Don’t forget to enjoy the peaceful silence that nature offers, allowing you to be present in the moment.",
  },
  {
    link: "secondBlogDetail",
    blogPage: cardJson[1],
    para: "The forest is a perfect escape from the busy world. It’s the ideal place to explore new paths, enjoy nature’s calm, and engage in playful activities like treasure hunts or hide-and-seek. With your girlfriend, you can take romantic strolls, enjoying the serenity and whispering the secrets of the forest to each other. For family activities, pack a backpack with snacks and drinks, and spend the day discovering new trails together. This is a great way to bond, share stories, and create lasting memories. The forest offers a beautiful setting for both adventure and relaxation, making it the perfect destination for everyone.",
  },
  {
    link: "firstBlogDetail",
    blogPage: cardJson[2],
    para: "City streets bring a whole new energy, perfect for exploring with your loved ones. You can enjoy the vibrant atmosphere, play games at local parks, or have fun in nearby arcades. With your girlfriend, wander through the city’s streets, discovering new spots, stopping for coffee, and enjoying the hustle and bustle. For family time, spend the day shopping, sightseeing, or watching street performances. These urban adventures can be exciting and filled with laughter. There’s always something to do, whether it’s trying out a new restaurant, exploring a hidden corner of the city, or simply enjoying each other’s company.",
  },
];
