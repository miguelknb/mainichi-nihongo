import styled from "styled-components";

interface ContainerProps {
    color: string;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: ${props => props.color};
    padding: .2rem .5rem .2em .5rem;
    width: fit-content;

    p {
        font-weight: bold;
    }
`

interface SmallCardProps {
    text: string;
    color: string;
}

  
const SmallCard  = (props : SmallCardProps) => {
    return <Container color={props.color}>
    <p>{props.text}</p>
    </Container>
  }
  
export default SmallCard;