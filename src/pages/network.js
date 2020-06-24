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
                <h3>Organisations I Work With</h3>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  A small part of Patricia's practice is here alongside other Psychiatrists, Psychiatrists and therapists.  The practice is based in Glengormley Co Antrim.
                   </h5>
                <h6>
                  Mirabilis</h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  She has worked in a volunteer capacity for over fifteen years in the Belfast Branch as a counsellor and laterally as a supervisor.  In the past she has been the chair of  their training committee and sat on the the Belfast Branch Board  and delivered training on behalf of Cruse.
                  </h5>
                <h6>
                  Cruse Bereavement Care Belfast Branch</h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  For those who have Bupa Cover for therapy sessions.  Most cover allows up to six sessions but individuals need to examine their own policy to check what is covered.
                </h5>
                <h6>
                  Bupa Private Health Care</h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  Patricia is accredited as a Therapist and as a qualified Supervisor  with BACP.  She gained her accreditation in Therapy in 2007 and in Supervision in 2010, becoming a Senior Accredit Counsellor/Psychotherapist in 2011.  She is listed in the Directory of Therapists in the BACP web site.
               </h5>
                <h6>BACP Web Page: www.bacp.co.uk</h6>
                <h6>
                  BACP Directory: www.itsgoodtotalk.org.uk </h6>
                <h6>
                  British Association for Counsellors and Psychotherapists (BACP)</h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  Patricia served on the Board of Nexus Northern Ireland for five years but has now retired from this body but serves on their Clinical Management Committee.               </h5>
                <h6>
                  Nexus N Ireland</h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  Patricia has practiced Eye Movement Desensitisation Reprocessing, a clinically researched and validated therapy for Trauma, both in West Belfast and in her Private Practice, for many years.  She is an Accredited Consultant EMDR Practitioner which allows her to supervise others training or Accredited in this therapy.  The Nice Guidelines indicate this is one of the foremost therapies for Trauma.  She is listed in the EMDR for Europe's web page.
                </h5>
                <h6>Web Page: www.emdrassociation.org.uk</h6>
                <h6>
                  The Association of EMDR EUROPE
                </h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  Patricia completed a Masters in Integrative Therapy at the University of Ulster in 1998 and went on after Accreditation and training in Supervision to act as one of their Supervisors for their Advanced Diploma in Integrative Counselling.
                </h5>
                <h6>
                  The University of Ulster
                </h6>
              </Item>
            </ContainerXL>
          </Section>
          <Section background="light">
            <ContainerXL>
              <Item transparent>
                <h5>
                  Patricia has served on the Board of CANS for the past year.  This organisation delivers counselling to all Ethnic minorities in the Belfast Area.                </h5>
                <h6>
                  On the Board of CANS (Counselling All Nations Service)                
                  </h6>
              </Item>
            </ContainerXL>
          </Section>
        </Layout>
      </>
    </ThemeProvider>
  )
}
