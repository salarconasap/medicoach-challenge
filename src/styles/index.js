import { Link } from "react-router-dom";
import styled, { css }from "styled-components";
// import breakpoint from './breakpoints';

export const ImgDetails = styled.div( 
    () => css`
      font-size: 8px;
`)
export const CustomImg = styled.img(
  ({ src }) => css`
    width: 220px;
    height:200px;
  `)

export const CustomBtn = styled.button`
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 10px 0px;
  margin-top: 10px;
  width: 220px;
  text-align: center;
  border-radius: 5px;
`;

export const CustomLink = styled(Link)`
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 10px 0px;
  margin-top: 10px;
  width: 220px;
  text-align: center;
  border-radius: 5px;
`;

export const Container = styled.div`
  min-height: calc(100vh - 200px);
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`