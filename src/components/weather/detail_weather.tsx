import styled from "styled-components";
import {useRecoilState} from "recoil";
import {weatherState} from "../../atom/weatherAtom";
import {ColorFont, Font, Title} from "../../common/font";

const DetailContainer = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(230,230,230);
`

const IconAndTemp = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`

const TodayWeatherIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 0.5rem;
`

const TodayTempFont = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  transform: translateY(3px);
`

const OtherDetail = styled.div`
  display: flex;
  color: rgb(150, 150, 150);
  font-size: 0.8rem;
`

export const DetailWeather = () => {
    const [weather] = useRecoilState(weatherState);
    return (
        <DetailContainer>
            <IconAndTemp>
                <TodayWeatherIcon src={`${weather[0].daily.icon}`}></TodayWeatherIcon>
                <TodayTempFont>{weather[0].daily.temp}&deg;</TodayTempFont>
            </IconAndTemp>
            <Font fontSize='1.1rem' fontWeight='700' marginBottom='0.5rem'>{weather[0].daily.title}</Font>
            <OtherDetail>최고 {weather[0].daily.tempMax}&deg; | 최저 {weather[0].daily.tempMin}&deg; |
                미세먼지 <ColorFont color='rgb(51,153,255)'>{weather[0].daily.findDust}</ColorFont> 초미세먼지 <ColorFont
                    color='rgb(51,153,255)'>{weather[0].daily.ultraFineDust}</ColorFont></OtherDetail>
        </DetailContainer>)
}