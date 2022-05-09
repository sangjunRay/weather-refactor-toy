import styled, {css} from "styled-components";
import {useRecoilState} from "recoil";
import {areaHidden, MockAreaFakeDB, searchAreaState} from "../../atom/areaAtom";
import AreaHeader from "../../components/weather/weather_area_header";
import {AreaForm} from "../../components/weather/area_form";
import {SearchAreaList} from "../../components/weather/search_area_list";
import {useEffect, useState} from "react";
import {Area, AreaArray} from "../../common/apis/fakeDB";

const AreaContainer = styled.section`
  position: absolute;
  top: 0;
  background-color: white;
  width: 100vw;
  height: 100vh;
  transition: all 0.5s;
  transform: translateY(0vh);

  ${({hidden}) => hidden && css`
    transform: translateY(100vh);
  `}
`

const AreaContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NullMessage = styled.p`
  margin-top: 2rem;
  color: rgb(150,150,150);
  font-weight: 300;
  font-size: 0.9rem;
  line-height: 1.2rem;
`

export const AreaSelect = () => {
    const [hidden] = useRecoilState(areaHidden);
    const [area] = useRecoilState(searchAreaState);
    const [searchingArea, setSearchingArea] = useState<AreaArray>([]);

    useEffect(() => {
        setSearchingArea(MockAreaFakeDB);
    }, [searchingArea])

    return (
        <AreaContainer hidden={hidden}>
            <AreaContainerCenter>
                <AreaHeader/>
                <AreaForm/>
                {area[0].city === null ? <NullMessage>찾으려는 지역이 검색되지 않는 경우 <br/> 가장 가까운 큰 도시를 입력해보세요.</NullMessage> : area.map((areaData, index) => {
                    return <SearchAreaList key={index} city={areaData.city} dong={areaData.dong} gu={areaData.gu}  />
                })}
            </AreaContainerCenter>
        </AreaContainer>);
}