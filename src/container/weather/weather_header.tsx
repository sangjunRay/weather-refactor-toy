import HeaderComponent from "../../components/weather/header_nav";
import styled from "styled-components";

const Header = styled.header`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(220, 220, 220);
`

export const WeatherHeader = () => {
    return (
        <Header>
            <HeaderComponent />
        </Header>
    );
}