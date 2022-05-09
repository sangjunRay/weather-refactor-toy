import styled from "styled-components";
import React from "react";

const ListBox = styled.span`
  padding: 1rem;
  border-bottom: 1px solid rgb(180,180,180);
`

interface SearchListInterface {
    city: string | null | undefined,
    dong: string | null | undefined,
    gu: string | null | undefined,
}

export const SearchAreaList:React.FC<SearchListInterface> = ({city, dong, gu}) => {
    return (
        <ListBox>{city} {dong} {gu}</ListBox>
    )
}