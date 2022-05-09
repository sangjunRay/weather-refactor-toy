import styled from "styled-components";
import {Font} from "../../common/font";
import React from "react";

interface ChartComponentI {
    date: number | any,
    icon: string,
    temp: string,
    min: string,
    max: string,
}

const ChartBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 118px;
  width: 30px;
`

const IconImage = styled.img`
  width: 23px;
`

const BarComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: flex-end;
`

const Bar = styled.div`
  width: 4px;
  background-color: rgb(200, 200, 200);
  border-radius: 5px;
`

export const ChartComponent: React.FC<ChartComponentI> = ({date, icon, temp, min, max}) => {
    return (
        <ChartBarContainer>
            <Font fontSize='0.7rem' color="rgb(180,180,180)" marginBottom='0.3rem'>{date}시</Font>
            <IconImage src={icon}/>
            <BarComponent>
                <Font fontSize='0.9rem'>{temp}&deg;</Font>
                <Bar style={{height: `${(parseInt(temp) / parseInt(max)) * 60}%`}}/>
            </BarComponent>
        </ChartBarContainer>);
}