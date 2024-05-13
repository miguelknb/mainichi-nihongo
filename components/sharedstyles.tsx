import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.15;
  font-size: 6rem;
  text-align: center;
  text-decoration: none;
`;

export const Description = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1.5rem;
`;

export const CodeTag = styled.code`
  background: #fafafa;
  border-radius: 5px;
  margin: 0 0.75rem;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
`;

export const Separator = styled.hr`
  width: 10rem;
  border-top: 1px solid #464646;
  border-radius: 5px;
`

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Furigana = styled.ruby`
  text-align: center;
  line-height: .2rem;
  font-size: 1.5rem;

`;

export const Kana = styled.div`
  display: flex;

`;

