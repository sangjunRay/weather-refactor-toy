import {WeatherContainer} from "../container/weather_container";
import styled from "styled-components";

const ContainerStyle = styled.section`
  width: 500px;
`

export const WeatherPage = () => {
    return (
        <ContainerStyle>
            <WeatherContainer/>
        </ContainerStyle>);
}