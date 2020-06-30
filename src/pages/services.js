import React from "react"
import { graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, Image, ContainerLg } from '../components'

export default function Services({ data }) {

  // console.log('Service Page')
  // console.log(data.allContentfulServices)
  // console.log(data.allContentfulAsset.edges[0].node.file.url)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>

          { /* SERVICES I OFFER */}

          <Section background="transparent" imageUrl={data.allContentfulAsset.edges[0].node.file.url}>
            <ContainerLg background="light">
              <Item>
                <h4> Services I Offer
              </h4>
                <h5>Making you feel better</h5>
              </Item>
            </ContainerLg>
          </Section>

          { /* x3 Rows... Service on each one  */}

          {data.allContentfulServices.edges.map(entry => (
              <Section background="light" key={entry.node.id}>
                {console.log(entry)}
                <ContainerLg transparent>
                  <Image imageUrl={entry.node.serviceImage.file.url} />
                </ContainerLg>

                <ContainerLg transparent>
                  <Item>
                    <h4>{entry.node.heading}</h4>
                    <h5>{entry.node.subHeading}</h5>
                    <p>{entry.node.serviceDescription.serviceDescription}</p>
                  </Item>
                </ContainerLg>

              </Section>
            )
          )}

        </Layout>
      </>
    </ThemeProvider>
  )
}

export const query = graphql`
{
  allContentfulServices {
    edges {
      node {
        serviceImage {
          file {
            url
          }
        }
        serviceDescription {
          serviceDescription
        }
        heading
        subHeading
        id
      }
    }
  }
  allContentfulAsset(filter: {title: {eq: "red and yellow"}}) {
    edges {
      node {
        file {
          url
        }
      }
    }
  }
}

`