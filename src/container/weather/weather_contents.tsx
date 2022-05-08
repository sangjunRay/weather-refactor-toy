import styled from "styled-components";
import {DetailWeather} from "../../components/weather/detail_weather";
import {ChartWeather} from "../../components/weather/chart_weather";

const ContentsContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
`

export const WeatherContents = () => {
    return(
    <ContentsContainer>
        <DetailWeather/>
        <ChartWeather />
    </ContentsContainer>
    )
}