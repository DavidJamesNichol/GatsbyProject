const path = require("path")

exports.createPages = async({graphql, actions}) => {
    const {createPage} = actions

    const {data} = await graphql(`
  query {
    projects:allContentfulProject {
      edges {
        node {
          slug
          category
        }
      }
    }
    clients:allContentfulClient{
      edges {
        node {
          slug
          category
        }
      }
    }
  }
  `)
  data.projects.edges.forEach(({node}) => {
    createPage({
      path:  `projects/${node.slug}`,
      component: path.resolve("./src/templates/projectTemplate.js"),
      context: {
        category: node.category,
      },
    })
  })
data.clients.edges.forEach(({node}) => {
  createPage({
    path:  `clients/${node.slug}`,
    component: path.resolve("./src/templates/clientTemplate.js"),
    context: {
      category: node.category,
    },
  })
})
}