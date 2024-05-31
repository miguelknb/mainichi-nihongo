import styled from "styled-components";

interface MeaningProps {
  $first?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
  /* min-height: 100vh; */
`;

export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h1`
  margin: 0;
  line-height: 1.5;
  font-size: 4rem;
  text-align: center;
  font-family: NotoSansJP, sans-serif;
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
  width: 80%;
  border-top: 1px solid #464646;
  border-radius: 5px;
`

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Furigana = styled.ruby`
  text-align: center;
  line-height: .2rem;
  font-size: 1.5rem;

`;

export const Kana = styled.div`
  display: flex;

`;

export const MeaningsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  padding: 0.8rem;
`
export const PhrasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const KanjiContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  max-width: 60vh; 
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: 1rem 0rem 1rem 0rem;
`

export const Meaning = styled.p<MeaningProps>`
  font-size: 1.1rem;
  font-family: Helvetica, sans-serif;
  font-weight: ${props => props.$first ? "bold" : "normal"};
  margin: 0rem;
  `

export const PartOfSpeech = styled.p`
  font-size: .9rem;
  font-family: NotoSansJP, sans-serif;
  font-weight: medium;
  margin: 0rem;
`
export const MeaningNumber = styled.p`
  font-size: .8rem;
  font-family: NotoSansJP, sans-serif;
  font-weight: lighter;
  margin: 0rem;
`

export const MeaningLine = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  /* border: 2px solid red; */
  height: max-content;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: .5rem;

  p {
    font-size: .9rem;
    font-family: NotoSansJP, sans-serif;
    font-weight: lighter;
    margin: 0rem;
  }
`

export const ColumnTitle = styled.p`
  font-size: 1rem;
  font-family: NotoSansJP, sans-serif;
  font-weight: bold;
  margin: 0rem;
  margin-top: 5rem;
`