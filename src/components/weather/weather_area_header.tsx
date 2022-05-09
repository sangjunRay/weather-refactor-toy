import styled from "styled-components";
import React from "react";
import {useRecoilState} from "recoil";
import {areaHidden, areaState} from "../../atom/areaAtom";
import {BoldFont, Font} from "../../common/font";

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(220, 220, 220);
`

const CloseButton = styled.div`
  cursor: pointer;
  width: 41px;
  height: 41px;
  background: url("https://static.forceteller.com/images/event/community/close.svg");
`

const NoneBlock = styled.div`
  width: 48px;
  height: 44px;
`

function AreaHeader(): JSX.Element | null {
    const [area] = useRecoilState(areaState)
    const [, setHidden] = useRecoilState(areaHidden)
    const changeHiddenState = () => {
        setHidden(prev => !prev)
    }
    if (area.dong) {
        return <>
            <Header>
                <NoneBlock />
                <Font fontSize='1rem'>오늘 <BoldFont>{area.dong}</BoldFont> 날씨</Font>
                <CloseButton onClick={changeHiddenState}/>
            </Header>
        </>
    }
    if (area.gu) {
        return (
            <>
                <Header>
                    <NoneBlock />
                    <Font fontSize='1rem' marginLeft='37.5%'>오늘 <BoldFont>{area.gu}</BoldFont> 날씨</Font>
                    <CloseButton onClick={changeHiddenState}/>
                </Header>
            </>)

    }

    if (area.city) {
        return (<>
            <Header>
                <NoneBlock />
                <Font fontSize='1rem' marginLeft='37.5%'>오늘 <BoldFont>{area.dong}</BoldFont> 날씨</Font>
                <CloseButton onClick={changeHiddenState}/>
            </Header>
        </>)

    }
    return null

}

export default AreaHeader;