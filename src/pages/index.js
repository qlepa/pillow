import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from 'styled-components'
import backgroundImage from '../images/background.jpg'

// import SEO from "../components/seo"

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  background-image: url(${backgroundImage})
`;
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  *, *::before, *::after {
    box-shadow: border-box;
  }
`;

const IndexPage = () => (
  <>
    <GlobalStyle />
    <StyledWrapper>
      
    </StyledWrapper>
  </>
)

export default IndexPage
