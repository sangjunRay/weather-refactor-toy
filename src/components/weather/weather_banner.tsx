import {useRecoilState} from "recoil";
import {weatherState} from "../../atom/weatherAtom";
import styled from "styled-components";
import {Title, SubTitle} from '../../common/font';

const BannerContainer = styled.section`
  box-sizing: border-box;
  padding: 1.2rem;
  height: 200px;
`

export const Banner = () => {
    const [weather] = useRecoilState(weatherState)
    return (
        <BannerContainer style={{background: `url(${weather[0].bgImage})`, backgroundSize: "cover", backgroundPosition: "bottom"}}>
            <SubTitle marginBottom="0.3rem">{weather[0].subTitle}</SubTitle>
            <Title>{weather[0].title}</Title>
        </BannerContainer>
    )
}