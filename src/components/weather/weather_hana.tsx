import styled from "styled-components";

const BannerContainer = styled.section`
  box-sizing: border-box;
  padding: 0 1rem 0 1rem;
`

const HanaBanner = styled.div`
  background: url("https://static.forceteller.com/6/ab/92d8/7bf07243fc2602b571cd159d7f6f79408.png") no-repeat center;
  height: 80px;
  background-size: auto 100%;
  width: 100%;
  margin-top: 1rem;
  border-radius: 15px;
`

export const WeatherHana = () => {
    return (
        <BannerContainer>
            <a href='https://www.naver.com'>
            <HanaBanner />
            </a>
        </BannerContainer>
    )
}