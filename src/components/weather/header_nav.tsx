import styled from "styled-components";
import {BoldFont} from "../../common/font";
import {useRecoilState} from 'recoil';
import {areaHidden, areaState} from "../../atom/areaAtom";

const BackBtn = styled.div`
  background: url("https://static.forceteller.com/images/event/community/left.svg");
  width: 48px;
  height: 44px;
  cursor: pointer;
`

const AreaBtn = styled.div`
  background: url("https://static.forceteller.com/images/event/icons/city_search.svg");
  width: 22px;
  height: 22px;
  margin-right: 1.1rem;
  cursor: pointer;
`

const CenterMessage = styled.div`
  font-size: 1rem;
`

function HeaderComponent(): JSX.Element | null {
    const [area] = useRecoilState(areaState);
    const [areaHiddenBtn, setAreaHiddenBtn] = useRecoilState(areaHidden)
    const clickHidden = () => {
        setAreaHiddenBtn(prev => !prev)
    }
    if (area.dong) {
        return <>
            <BackBtn/>
            <CenterMessage>오늘 <BoldFont>{area.dong}</BoldFont> 날씨</CenterMessage>
            <AreaBtn onClick={clickHidden}/>
        </>
    }
    if (area.gu) {
        return <>
            <BackBtn/>
            <CenterMessage>오늘 <BoldFont>{area.gu}</BoldFont> 날씨</CenterMessage>
            <AreaBtn onClick={clickHidden}/>
        </>
    }
    if (area.city) {
        return <>
            <BackBtn/>
            <CenterMessage>오늘 <BoldFont>{area.city}</BoldFont> 날씨</CenterMessage>
            <AreaBtn onClick={clickHidden}/>
        </>
    }
    return null
}

export default HeaderComponent;