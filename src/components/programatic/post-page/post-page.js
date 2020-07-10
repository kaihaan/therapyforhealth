import React from 'react'
import { graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../styles/global';
import { theme } from '../../../styles/theme';
import Post from '../post/post'
import { Layout } from '../..'

export default ({ data, pageContext }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {data.posts.edges.map((edge) => {
          return <Post background="light" halign="left" post={edge.node} key={edge.node.id} />
        })}

        {pageContext && pageContext.hasPrevPage && (
          <Link to={pageContext.prevPageLink}>Next page</Link>
        )}
        {pageContext && pageContext.hasNextPage && (
          <Link to={pageContext.nextPageLink}>Next page</Link>
        )}

      </Layout>
    </ThemeProvider>
  )
}


export const pageQuery = graphql`
  fragment PostFragment on ContentfulArticle {
    id
    author
    body {
      json
    }
    title
    image {
      file {
        url
      }
    }
  }
  query PaginatedPostsListPageQuery($skip: Int, $limit: Int) {
    posts: allContentfulArticle(
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...PostFragment
        }
      }
    }
  }
`