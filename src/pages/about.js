import React from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { Layout, Section, Item, ContainerXL } from '../components'

export default function Testimonials() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout>
          <Section background="hero">
            <ContainerXL>
              <Item transparent>
                <h2> A Licensed Professional Here to Guide You</h2>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>


                <h4>Medical Background</h4>



                <p> Trained initially as a nurse in the Royal Victoria Hospital, staffing in Gynae Ward I went on to train as a midwife in the Royal Maternity.After this 1 took up a post as a staff midwife at the Ulster Hospital Dundonald going on to become a sister in the Special Care Baby Unit there.After a break to raise my family, I returned to the Ulster Hospital as a midwife.
                </p>

                <h4>Training as a Therapist</h4>

                <p> Following my return to work, I undertook and gained an honours degree in psychology after which I gained a distinction in a MSc in integrative counselling from the University of Ulster.With this achademic background I continued to gain practical experience in; trauma work, PTSD, disascociation, anxiety conditions, bereavement, depression, relationship issues and suicidal ideation, mainly from my work in Corpus Christi Counselling Service.As a result I recieved BACP accreditation as a therapist.Following this after undergoing EMDR training I gained accreditation as an EMDR therapist.During the following year I undertook a Hypnotherapy Course in London and in 2009, and later completed a course in Inter Personal Therapy, for experienced practioners at the Anna Freud Center in London.In 2012 I gained Consultant status in EMDR that qualifies me to supervise other EMDR Practitioners.
                </p>


                <h4> Supervision </h4>



                <p>Having gained my accreditation as a therapist, I trained as a Supervisor for Counsellors / Therapists.This was done under the auspices of PCI College Dublin and subsequently  gained my Accreditation as a supervisor.In this capacity I act as an accredited supervisor for students for both the University of Ulster and the Northern Regional College.This is done as part of my private practice, however I continue to volunteer as a supervisor for Cruse Belfast.
                  
                </p>
               
              </Item>
            </ContainerXL>
          </Section>


        </Layout>
      </>
      </ThemeProvider>
  )
}
