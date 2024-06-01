import styled from "styled-components";
import { KanjiParseResult  } from "unofficial-jisho-api";

interface ColumnProps {
    width: string;
    $center?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 40rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Column = styled.div<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem .2rem 0rem .2rem;
  align-items: ${props => props.$center? "center" : "flex-start"};
  width: ${props => props.width};
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: .2rem;
  margin-bottom: .2rem;
`

const KanjiChar = styled.p`
  font-size: 3rem;
  font-weight: bold;
  font-family: NotoSansJP, sans-serif;
`

const JLPT = styled.p`
  font-size: 1rem;
  font-family: NotoSansJP, sans-serif;
`

const Text = styled.p`
  margin: 0rem;
  font-size: .9rem;
  font-family: NotoSansJP, sans-serif;
`

interface KanjiCardProps {
    kanji: KanjiParseResult;
  }

const KanjiCard : React.FC<KanjiCardProps> = (props) => {

    const kanji = props.kanji.query;
    const jlpt_level = props.kanji.jlptLevel;
    const number_of_strokes = props.kanji.strokeCount;
    const meaning = props.kanji.meaning;
    const kun = props.kanji.kunyomi;
    const on = props.kanji.onyomi;

    return <Container>
        <Column width="30%" $center={true}>
            <KanjiChar>
                {kanji}
            </KanjiChar>
            <JLPT>JLPT <b>{jlpt_level}</b></JLPT>
            <Text>{number_of_strokes} strokes</Text>
        </Column>
        <Column width="70%">
            <Row>
                <Text>
                    {meaning}
                </Text>
            </Row>
            <Row><b>Kun&nbsp;</b>{kun.join("、")}</Row>
            <Row><b>On&nbsp;</b>{on.join("、")}</Row>
        </Column>
    </Container>
}

export default KanjiCard;