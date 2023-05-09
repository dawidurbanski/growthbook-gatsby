import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: `.env`,
});

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "CONTENTFUL_ACCESS_TOKEN not set. Please set it in your .env file."
  );
}

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error(
    "CONTENTFUL_SPACE_ID not set. Please set it in your .env file."
  );
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `GrowthBook Testing`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
