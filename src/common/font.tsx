import styled from "styled-components";

export const BoldFont = styled.b`
  font-weight: 700;
`

export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
`

export const SubTitle = styled.h2<{marginBottom?: string}>`
  font-size: 0.8rem;
  font-weight: 400;
  color: rgb(50,50,50);
  margin-bottom: ${props => props.marginBottom};
`

export const Font = styled.p<{fontSize: string, fontWeight: string, marginBottom?:string}>`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
`

export const ColorFont = styled.p<{color: string}>`
  color: ${props => props.color};
  margin: 0 0.3rem 0 0.3rem;
`