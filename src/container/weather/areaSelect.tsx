import styled, {css} from "styled-components";
import {useRecoilState} from "recoil";
import {areaHidden} from "../../atom/areaAtom";
import AreaHeader from "../../components/weather/weather_area_header";
import {AreaForm} from "../../components/weather/area_form";

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

export const AreaSelect = () => {
    const [hidden] = useRecoilState(areaHidden)

    return (
        <AreaContainer hidden={hidden}>
            <AreaHeader />
            <AreaForm />
        </AreaContainer>);
}