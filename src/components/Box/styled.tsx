import styled from "styled-components";
import { secondaryDarkColor, linkColor, textColor } from "../../config/colors";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem;
  row-gap: 1rem;
  background-color: ${secondaryDarkColor};
  border-radius: 0.3rem;
  border: 0.3rem solid ${textColor};
  min-width: 45%;

  div {
    display: block;
    margin: 0 auto;
    max-width: 15rem;
    padding-bottom: 3rem;
  }

  a {
    font-size: 26px;
    font-weight: bold;
    color: ${linkColor};

    text-decoration: underline;
  }

  h2 {
    font-size: 26px;
    padding-bottom: 1rem;
  }
`;
