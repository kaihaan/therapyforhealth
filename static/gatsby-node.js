const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")


exports.onCreateWebpackConfig = ({ getConfig, stage, actions, loaders }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }

  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [
              loaders.js()
            ]
          }
        ]
      }
    })
  }
}

// Paginate

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(
    `
          {
            allContentfulArticle {
              edges {
                node {
                  slug
                }
              }
            }
          }
        `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running Posts Paginate GraphQL query.`)
    return
  }

  // Get an array of posts from the query result
  const posts = result.data.allContentfulArticle.edges

  // Create post pages - with 'n' posts per page 
  const postsPerPage = 1
  const numPages = Math.ceil(posts.length / postsPerPage)

  // decorate posts with mext & last slugs 
  for (let i = 0; i < posts.length; i++) {
    posts[i].last = i === 0 ? '' : posts[i - 1].node.slug
    posts[i].next = i === posts.length - 1 ? '' : posts[i + 1].node.slug
  }

  // console.log(posts)

  posts.forEach((post, i) => {

    createPage({
      path: `/articles/${post.node.slug}`,
      component: path.resolve("./src/components/programatic/post-page/post-page.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        hasNextPage: i !== numPages - 1,
        hasPrevPage: i !== 0,
        nextPageLink: `/articles/${post.next}`,
        prevPageLink: `/articles/${post.last}`,
        slug: `/articles/${post.node.slug}`
       },
    })
  })


  // Create pages of teaser-fragments, with n post-fragments per page
  // needs the slug (from contentful) to embed page link
  // so you can page through links - or jump to linked page
  const indexPostsPerPage = 10
  const indexNumPages = Math.ceil(posts.length / indexPostsPerPage)
  Array.from({ length: indexNumPages }).forEach((_, i) => {
    createPage({
      path: `/articles/index/${i + 1}`,
      component: path.resolve("./src/components/programatic/articles-page/articles.js"),
      context: {
        limit: indexPostsPerPage,
        skip: i * indexPostsPerPage,
        numPages,
        currentPage: i + 1,
        hasNextPage: i !== indexNumPages - 1,
        hasPrevPage: i !== 0,
        nextPageLink: `/articles/index/${i + 2}`,
        prevPageLink: `/articles/index/${i}`,
        slug: `/articles/${i + 1}`
      },
    })
  })
}