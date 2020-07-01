import React from 'react'
import { graphql, Link } from 'gatsby'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../../styles/global';
import { theme } from '../../../styles/theme';
import Stub from '../stub/stub'
import { Layout } from '../..'


export default function Articles(props) {

  //  `/articles/${edge.node.slug}`

  const { data, pageContext } = props

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        {data.posts.edges.map((edge) => {
          console.log(edge.node.slug)
          return <Stub background="light" post={edge.node} link={`/articles/${edge.node.slug}`} key={edge.node.id} />
        })}

        {pageContext && pageContext.hasNextPage && (
          <Link to={pageContext.nextPageLink}>Next page</Link>
        )}

        {pageContext && pageContext.hasPrevPage && (
          <Link to={pageContext.prevPageLink}>Next page</Link>
        )}
      </Layout>
    </ThemeProvider>
  )
}



export const pageQuery = graphql`
  fragment StubFragment on ContentfulArticle {
    id
    slug
    author
    datePublished(formatString: "MMMM Do, YYYY")
    title
    image {
      file {
        url
      }
    }
  }
  query ArticleIndexPageQuery($skip: Int, $limit: Int) {
    posts: allContentfulArticle(
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...StubFragment
        }
      }
    }
  }
`