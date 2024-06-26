import Head from "next/head";
import JishoAPI, { ExampleParseResult, Result } from "unofficial-jisho-api";
import { JishoAPIResult, JishoResult, KanjiParseResult, JishoWordSense  } from "unofficial-jisho-api";

import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
  Separator,
  Kana,
  Furigana,
  WordContainer,
  MeaningsContainer,
  Meaning,
  PartOfSpeech,
  InnerContainer,
  PhrasesContainer,
  MeaningLine,
  MeaningNumber,
  KanjiContainer,
  Row,
  Column,
  ExampleContainer,
  ColumnTitle,
  MiddleContainer
} from "@/components/sharedstyles";



import { kanji_list } from "@/public/kanji"; 

import Cards from "@/components/cards";
import Error from "next/error";
import Kanji from "@/components/kanji";

import SmallCard from "@/components/smallcard";

interface WordProps {
  data: WordResult;
  success: boolean;
}

const Home = (props : WordProps) => {
   
  if (!props.success) return <p>Bad :c</p>

  const { word, reading } = props.data.japanese[0];
  const { is_common, senses, kanjis, examples, jlpt } = props.data;



  return (
    <Container>
      <Head>
        <title>Random Japanese Word</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Column>
          <KanjiContainer>
            {kanjis.map((kanji) => {
              return <Kanji kanji={kanji} key={kanji.query} />
            })}
          </KanjiContainer>
        </Column>
        <Column>
          <Row>
            <WordContainer>
              <Furigana>
                {reading}
              </Furigana>
              <Kana>
                <Title>
                  {word}
                </Title>
              </Kana>
            </WordContainer>
          </Row>
          <Separator />
          <MiddleContainer>
            { is_common && <SmallCard color={"#858585"} text="common word"/>}
            { jlpt.length > 0 && <SmallCard color={"#858585"} text={jlpt.join("").replace("-", " ")} /> }
          </MiddleContainer>
          <MeaningsContainer>
            {senses.map((sense, index) => {
              const parts_of_speech = sense.parts_of_speech;
              const key = parts_of_speech[index], meaning = "m", pos = "p";
              const definitions = sense.english_definitions;

              return <InnerContainer key={word + key}>
                <PartOfSpeech key={key + meaning}>{parts_of_speech.join(", ")}</PartOfSpeech>
                <MeaningLine key={key + pos}>
                  {definitions.map((definition, index) => {
                    const is_first: boolean = (index == 0);

                    return <Meaning key={definition} $first={is_first}>{definition};&nbsp;</Meaning>
                  })}
                </MeaningLine>
              </InnerContainer>
            })}
          </MeaningsContainer>
        </Column>
        <Column>
          <PhrasesContainer>
            {examples.results.map( ex => {
              return <ExampleContainer>
                  <p>{ex.kana}</p>
                  <p>{ex.english}</p>
              </ExampleContainer>
            })}
          </PhrasesContainer>
        </Column>
      </Main>
    </Container>
  );
}

const isKanji = (char: string): boolean  => {
  // Regular expression for Japanese Kanji characters
  // (Unicode range: \u4e00-\u9faf)
  const kanjiRegex = /[\u4e00-\u9faf]/;
  return kanjiRegex.test(char);
}
interface WordResult extends JishoResult {
  kanjis : KanjiParseResult[];
  examples : ExampleParseResult;
}

const RandomKanji = (): string => {
  return kanji_list.getRandomItem();
}


export async function getStaticProps() {

  const jisho = new JishoAPI();

  try {

    // kanji_list.
    const search_kanji : string = RandomKanji();
    const res_kanji : KanjiParseResult = await jisho.searchForKanji(search_kanji);
    const possible_word : string[] = [...res_kanji.kunyomiExamples, ...res_kanji.onyomiExamples].map( example => example.example)  
    const word = possible_word.getRandomItem();

    const res : JishoAPIResult = await jisho.searchForPhrase(word);
    
    if (res.meta.status != 200) return; 

    // Try to find exact match for word
    
    const results : JishoResult[] = res.data;

    let exact_match : JishoResult | undefined;

    exact_match = results.find( result => {
      return result.slug === word;
    })

    if (exact_match == undefined) return { props: { success: false } };

    // check

    // Create list of Kanjis in word
    const kanjis : string[] = exact_match?.slug
      .split("")
      .filter(character => isKanji(character));

    // Get aditional kanji info
    let kanji_results : KanjiParseResult[] = await Promise.all(kanjis.map( async (kanji) => {
      let kanji_res : KanjiParseResult = await jisho.searchForKanji(kanji);

      if (kanji_res.taughtIn === undefined) kanji_res.taughtIn = "";
      if (kanji_res.jlptLevel === undefined) kanji_res.jlptLevel = "";
      if (kanji_res.newspaperFrequencyRank === undefined) kanji_res.newspaperFrequencyRank = "";
      return kanji_res;
    }));

    // Get examples

    let examples : ExampleParseResult = await jisho.searchForExamples(word);

    const word_result : WordResult = {
      ...exact_match,
      kanjis: kanji_results,
      examples: examples
    }

    return { props: { data: word_result, success: true } }
  } 
  catch (error : any) {
    console.log("error", error)
    return { props: { sucess: false } }
  }
}

export default Home;
