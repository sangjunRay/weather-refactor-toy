import styled from "styled-components";
import {Banner} from "../components/weather_banner";

const ContainerStyle = styled.section`
  width: 500px;
`

export const WeatherPage = () => {
    return (
        <ContainerStyle>
            <Banner />
        </ContainerStyle>);
}