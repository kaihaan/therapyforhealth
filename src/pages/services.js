import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, Image, ContainerLg } from '../components'

export default function Services() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>

          { /* SERVICES I OFFER */}

          <Section background="hero">
            <ContainerLg background="light">
              <Item>
                <h4> Services I Offer
              </h4>
                <h5>Making you feel better</h5>
              </Item>
            </ContainerLg>
          </Section>

          { /* x3 Rows... Service on each one  */}

          <Section background="light">

            <ContainerLg transparent>
              <Image image="/flower.jpg" />
            </ContainerLg>

            <ContainerLg transparent>
              <Item>
                <h4>Individual Therapy</h4>
                <h5> A Happier, Healthier You</h5>
                <p>Feeling a bit down lately and nothing seems to lift your spirits? It might be time to seek help from a licensed professional. At Therapy For Health, my Individual Therapy sessions help patients develop positive attitudes towards life’s most complex circumstances. Call me today and allow me to help you see the glass half full in everything that life has to offer.
                </p>
              </Item>
            </ContainerLg>
            
          </Section>

          <Section background="light">

            <ContainerLg transparent>
              <Image image="/flower.jpg" />
            </ContainerLg>

            <ContainerLg background="light">
              <Item>
                <h4>Trauma Therapy</h4>
                <h5>In Safe Hands</h5>
                <p> Many of us in Northern Ireland have had a history of Trauma.  This can be a single trauma  such as a road traffic accident or more complex issues from our childhood such as violence and abuse.  I am an EMDR Consultant, a therapy that is evidenced based to heal traumatic memories.  I have had many years of experience in working in, "Trouble" affected areas in Belfast where safety and trust are essential.
              </p>
              </Item>
            </ContainerLg>
          </Section>

          <Section background="light">
            <ContainerLg transparent>
              <Image image="/flower.jpg" />
            </ContainerLg>
            <ContainerLg background="light">
              <Item>
                <h4>Supervision</h4>
                <h5>Quality of care</h5>
                <p>
                  As an accredited supervisor of Counsellors and also an EMDR Consultant and Practitioner where I supervise EMDR practitioners; I undertake supervision of students from the University of Ulster and accredited practitioners working independently and within organisations.  It is a professional obligation for all therapists to attend regular supervision from experienced accredited supervisors.
              </p>
              </Item>
            </ContainerLg>

          </Section>
        </Layout>
      </>
    </ThemeProvider>
  )
}
