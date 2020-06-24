import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, Image, ContainerXL, ContainerLg, ContainerMd } from '../components'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        { /* HEADER */}

        <Layout>
          <Section background="video" video="/static/woods.mp4">
            <ContainerLg background="light">
              <Item>
                <h3>Personal Therapy</h3>
                <p> Patricia is a Consultant EMDR therapist working in Belfast Northern Ireland.  She has experience with trauma, anxiety, abuse, bereavement, and self worth
                </p>
              </Item>
            </ContainerLg>
          </Section>

          { /* QUOTE */}

          <Section background="dark">
            <ContainerXL transparent>
              <Item transparent>
                <h5> “Man should know his own self and know those things which lead to loftiness or baseness to shame or to honour to affluence or to poverty"
              </h5>
                <h6>Baha'u'llah </h6>
              </Item>
            </ContainerXL>
          </Section>


          { /* ABOUT THERAPY */}

          <Section background="light">
            <ContainerLg background="light">
              <Item>
                <h4>All About Therapy</h4>
                <p> According to the American Psychological Association, “Psychologists help people of all ages live happier, healthier and more productive lives.” Through the use of various psychotherapy methods and collaborative treatment measures, my patients develop life-changing habits to help them cope with all of life’s various obstacles. At Therapy For Health, my therapy sessions are designed to unravel painful issues and provide patients with effective tools to help them see the glass half full instead of half empty.
                </p>
              </Item>
            </ContainerLg>

            <ContainerLg background="light">
              <Image image="/flower.jpg" height />
            </ContainerLg>

          </Section>

          { /* THREE SERVICES */}

          <Section background="dark">
            <ContainerMd background="light">
              <Item>
                <Image image="/flower.jpg"/>
                <h4>Individual Therapy</h4>
                <h5> A Happier, Healthier You</h5>
                <p>Feeling a bit down lately and nothing seems to lift your spirits? It might be time to seek help from a licensed professional. At Therapy For Health, my Individual Therapy sessions help patients develop positive attitudes towards life’s most complex circumstances. Call me today and allow me to help you see the glass half full in everything that life has to offer.
                </p>
              </Item>
            </ContainerMd>

            <ContainerMd background="light">
              <Item>
                <Image image="/flower.jpg"  />
                <h4>Trauma Therapy</h4>
                <h5>In Safe Hands</h5>
                <p> Many of us in Northern Ireland have had a history of Trauma.  This can be a single trauma  such as a road traffic accident or more complex issues from our childhood such as violence and abuse.  I am an EMDR Consultant, a therapy that is evidenced based to heal traumatic memories.  I have had many years of experience in working in, "Trouble" affected areas in Belfast where safety and trust are essential.
              </p>
              </Item>
            </ContainerMd>

            <ContainerMd background="light">
              <Item>
                <Image image="/flower.jpg" />
                <h4>Supervision</h4>
                <h5>Quality of care</h5>
                <p>
                  As an accredited supervisor of Counsellors and also an EMDR Consultant and Practitioner where I supervise EMDR practitioners; I undertake supervision of students from the University of Ulster and accredited practitioners working independently and within organisations.  It is a professional obligation for all therapists to attend regular supervision from experienced accredited supervisors.
              </p>
              </Item>
            </ContainerMd>
          </Section>

          { /* CONTACT */}

          <Section background="hero">
            <ContainerLg>
              <Item halign="left">
                <p>78 Sunnyside St</p>
                <p> Belfast, BT7 3ED</p>
                <p>United Kingdom</p>
                <a href="mailtopatricia@therapyforhealth.co.uk">patricia@therapyforhealth.co.uk</a>
                <p>+44 7834 917 309</p>
              </Item>
            </ContainerLg>
            <ContainerLg>
            <Item halign="left">
              <p>CONTACT FORM HERE</p>
            </Item>
            </ContainerLg>
          </Section>
        </Layout>
      </>
    </ThemeProvider>
  )
}
