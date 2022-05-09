import styled from "styled-components";
import {Font} from "../../common/font";
import {useRecoilState} from "recoil";
import {weatherState} from "../../atom/weatherAtom";
import {ChartComponent} from "./chart_component";

const ChartContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  height: 180px;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid rgb(220, 220, 220);
  flex-direction: column;
`

const TimeProvider = styled.div`
  display: flex;
  vertical-align: baseline;
  margin-bottom: 1rem;
`

const BarContainer = styled.article`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const ChartWeather = () => {
    const [weather] = useRecoilState(weatherState);

    return (
        <ChartContainer>
            <TimeProvider>
                <Font fontSize='0.9rem'>시간대 별</Font>
                <Font fontSize='0.6rem' color='rgb(150,150,150)' marginLeft='0.3rem'
                      transformY='4px'>{weather[0].hourly.announceTime}</Font>
            </TimeProvider>
            <BarContainer>
                {weather[0].hourly.hours.map((data, index) => {
                    return <ChartComponent key={index} date={data.time} icon={data.icon} temp={data.temp}
                                           min={weather[0].daily.tempMin} max={weather[0].daily.tempMax}/>
                })}
            </BarContainer>
        </ChartContainer>);
}