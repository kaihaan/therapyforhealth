import React from "react"
import { graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../styles/global"
import { theme } from "../styles/theme"
import {
  Layout,
  Section,
  Item,
  Image,
  ContainerXL,
  ContainerLg,
  ContainerMd,
  ContactForm,
} from "../components"
import { contactContext } from "../context/contact.context.ts"
import { useActive } from "../context/contact.hook.tsx"

export default function Home({ data, location, href }) {
  // create our Scroll to Contact state manager
  // provide it to all children

  const active = useActive("Layout")

  return (
    <ThemeProvider theme={theme}>
      <contactContext.Provider value={active}>
        <GlobalStyles />

        {/* HEADER */}

        <Layout>
          <Section background="video" video="/static/woods.mp4">
            <ContainerLg background="light">
              <Item>
                <h3>Personal Therapy</h3>
                <p>
                  Patricia is a Consultant EMDR therapist working in Belfast
                  Northern Ireland. She has experience with trauma, anxiety,
                  abuse, bereavement, and self worth
                </p>
              </Item>
            </ContainerLg>
          </Section>

          {/* QUOTE */}

          <Section background="dark" useDiv>
            <ContainerXL transparent>
              <Item transparent>
                <h5>
                  “Man should know his own self and know those things which lead
                  to loftiness or baseness to shame or to honour to affluence or
                  to poverty"
                </h5>
                <h6>Baha'u'llah </h6>
              </Item>
            </ContainerXL>
          </Section>

          {/* ABOUT THERAPY */}

          <Section background="light">
            <ContainerLg background="light">
              <Item>
                <h4>{data.allContentfulAbout.edges[0].node.title}</h4>
                <p>
                {data.allContentfulAbout.edges[0].node.body.body}
                </p>
              </Item>
            </ContainerLg>

            <ContainerLg background="light">
              <Image imageUrl={data.allContentfulAbout.edges[0].node.image.file.url} />
            </ContainerLg>
          </Section>

          {/* THREE SERVICES */}

          {/* x3 Rows... Service on each one  */}
          <Section background="dark">
            {data.allContentfulServices.edges.map(entry => (
              <ContainerMd background="light" key={entry.node.id}>
                <Item valign="top">
                  <Image imageUrl={entry.node.serviceImage.file.url} />
                  <h4>{entry.node.heading}</h4>
                  <h5>{entry.node.subHeading}</h5>
                  <p>{entry.node.serviceDescription.serviceDescription}</p>
                </Item>
              </ContainerMd>
            ))}
          </Section>

          {/* CONTACT */}

          <Section
            background="light"
            activeState={active.activeState}
            setActive={active.setActive}
            scrollTarget="contactForm"
          >
            <ContainerLg>
              <Item halign="left">
                <p>Please use these details,</p>
                <p>or the contact form</p>
                <hr />
                <p>78 Sunnyside St</p>
                <p> Belfast, BT7 3ED</p>
                <p>United Kingdom</p>
                <a href="mailtopatricia@therapyforhealth.co.uk">
                  patricia@therapyforhealth.co.uk
                </a>
                <p>+44 7834 917 309</p>
              </Item>
            </ContainerLg>
            <ContainerLg>
              <Item halign="left">
                <ContactForm />
              </Item>
            </ContainerLg>
          </Section>
        </Layout>
      </contactContext.Provider>
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
    allContentfulAbout {
      edges {
        node {
          body {
            body
          }
          id
          image {
            file {
              url
            }
          }
          title
        }
      }
    }
  }
`
