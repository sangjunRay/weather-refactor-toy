import styled from "styled-components";
import {BoldFont} from "../common/font";

const BackBtn = styled.div`
  background: url("https://static.forceteller.com/images/event/community/left.svg");
  width: 48px;
  height: 44px;
`

const AreaBtn = styled.div`
  background: url("https://static.forceteller.com/images/event/icons/city_search.svg");
  width: 22px;
  height: 22px;
  margin-right: 1rem;
`

const CenterMessage = styled.div`
  font-size: 1rem;
`

export const HeaderComponent = () => {
    return (
        <>
            <BackBtn/>
            <CenterMessage>오늘 <BoldFont>강남구</BoldFont> 날씨</CenterMessage>
            <AreaBtn/>
        </>
    )
}