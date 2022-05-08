import styled from "styled-components";
import {Banner} from "../components/weather/weather_banner";
import {WeatherContents} from "../container/weather/weather_contents";

const ContainerStyle = styled.section`
  box-sizing: border-box;
  width: 500px;
`

export const WeatherPage = () => {
    return (
        <ContainerStyle>
            <Banner />
            <WeatherContents />
        </ContainerStyle>);
}