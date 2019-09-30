module.exports = {
  siteMetadata: {
    title: `Thyself Website`,
    description: `Thyself Inc. has the ambitious goal of transforming the world with Personality Psychology Applications`,
    author: `Zulfikar Moinuddin Ahmed`,
    pageContent: [
      {
        name: "About",
        text:
          "At Princeton I studied Mathematics and Literature graduated magna cum laude in 1995 with the prize for the most original Mathematics thesis, then I was in graduate school at Columbia and worked with Daniel Stroock at MIT but did not complete my doctorate.  I worked at Lehman Brothers Fixed Income Derivative Research in 1995 then later was the head quant of Gresham Investment Management in 2007.  I was Scientist II at a pharma biotech, worked at startup technology company Babel Research 2007-8.  Thyself Inc. is the product of a long period of time as it became clear to me that Personality Psychology has enormous potential as psychology is maturing as a science.  Large scale statistical data analysis can provide enormous advances in quantitative Personality Psychology and this company is based on my 16 factor refinement of Big Five that can produce almost uniqueness of individuals by Personality going far beyond all extant Personality type methods.",
        img: "zulfikar_moinuddin_ahmed_about.img",
      },
      {
        name: "Contact",
        text:
          "Contact us at our business address or send a message at info@thyselfdna.com",
        img: "contact.img",
      },
    ],
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "products",
        link: "/products",
      },
      {
        name: "research",
        link: "/research",
      },
      /*
      {
        name: "psychologists",
        link: "/psychologists",
      },
      */
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    //{
    //  resolve: "gatsby-plugin-root-import",
    //  options: {
    //    "~": `$(__dirname)/src/`,
    //  },
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
