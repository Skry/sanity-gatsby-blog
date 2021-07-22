export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60f8c916b6e9531d22c1a35a",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-u6gb5a4r",
                  apiId: "70e500fa-0ca7-4927-845d-1237f75a49f9",
                },
                {
                  buildHookId: "60f8c917badf001cc8adf372",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-otizw774",
                  apiId: "0f7bb455-9cac-40ec-8ad8-77e5b55cf9be",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Skry/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-otizw774.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
