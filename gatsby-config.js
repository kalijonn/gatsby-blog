module.exports = {
  siteMetadata: {
    title: `My First Gatsby Site`,
    siteUrl: `https://kalijonn-gatsby-tut.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
  ],
};
