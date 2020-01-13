import React from "react"
import Layout from "../components/layout"
import MainPanel from "../components/panel"
import Columns from "react-bulma-components/lib/components/columns"
import Heading from "react-bulma-components/lib/components/heading"
import Container from "react-bulma-components/lib/components/container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => (
  <Layout>
    <MainPanel>
      <Columns centered>
        <Columns.Column narrow textAlignment="centered">
          <Heading>Avinash N. Madavan</Heading>
          <Heading subtitle>Ph.D. Student in Electrical and Computer Engineering</Heading>
          <Container className="personal-links">
            <a href="https://github.com/amadavan/"><FontAwesomeIcon icon={["fab", "github"]}/></a>
            <a href="https://scholar.google.com/citations?user=Oqqtb00AAAAJ&hl=en"><FontAwesomeIcon
              icon={["fab", "react"]}/></a>
            <a href="https://orcid.org/0000-0002-1016-0118"><FontAwesomeIcon icon={["fab", "orcid"]}/></a>
          </Container>
        </Columns.Column>
      </Columns>
    </MainPanel>
  </Layout>
)
