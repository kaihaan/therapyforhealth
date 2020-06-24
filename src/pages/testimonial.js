import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, ContainerXL, ContainerMd } from '../components'

export default function Testimonials() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Section background="hero">
            <ContainerXL>
              <Item transparent>
                <h2>Client Experiences</h2>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  "My relationship with my partner has not been good for the last year.  I could not understand what to do about it, things were getting really bad.  Counselling helped me sort it out."
                  </h5>
                <h6>
                  Young woman in a difficult relationship </h6>
              </Item>
            </ContainerXL>
          </Section>

          <Section background="light">
            <ContainerMd nopadding>
              <span style={{ borderTop: '3px solid #333', width: '30vw' }}> </span>
            </ContainerMd>
          </Section>

          <Section background="light">
            <ContainerXL transparent>
              <Item transparent>
                <h5>
                  "My family and friends were saying I needed to go to counselling, all the stuff in my past was coming up and I could not deal with it.  I did not want to go, who wants to go into all that pain.  In the end I found it a great relief."

                  </h5>
                <h6>
                  Adult abused as a child</h6>
              </Item>
            </ContainerXL>
          </Section>


          <Section background="light">
            <ContainerMd nopadding>
              <span style={{ borderTop: '3px solid #333', width: '30vw' }}> </span>
            </ContainerMd>
          </Section>

          <Section background="light">
            <ContainerXL transparent>
              <Item transparent>
                <h5>
                  "I will never get over the loss of my son but with your help I can manage to go on living."
                  </h5>
                <h6>
                  Bereaved mother
                </h6>
              </Item>
            </ContainerXL>
          </Section>


          <Section background="light">
            <ContainerMd nopadding>
              <span style={{ borderTop: '3px solid #333', width: '30vw' }}> </span>
            </ContainerMd>
          </Section>

          <Section background="light">
            <ContainerXL transparent>
              <Item transparent>
                <h5>
                  "I was having difficulties at work and was stressed out.  Whatever I did seemed to make it worse.  When I got home I was irritable and cross, my family was fed up with me.  I came to counselling because I did not know what else to do.  I did not believe talking would help, but it did it helped me wind down and think the issues through."
                  </h5>
                <h6>
                  Busness Executive
                </h6>
              </Item>
            </ContainerXL>
          </Section>



        </Layout>
      </>
    </ThemeProvider>
  )
}




