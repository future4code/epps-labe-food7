import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 100vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  min-height: 100vh;
  justify-content: center;
  margin: 20px;
`;

export const ContainerCart = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  min-height: 100vh;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 44px;
  align-items: center;
  font-size: 16px;
  font-family: Roboto;
  justify-content: center;
   width: 91px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const HeaderTitle = styled.h1`
width: 110px;
  height: 19px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  `;

export const ContainerAdress = styled.div`
  display: flex;
  flex-direction: column;
   justify-content: center;
  width: 95vw;/* refatorar   */
 height: 44px;
 padding: 16px;
 margin: 1px 0 8px;
 background-color: #eeeeee;
`;


export const TitleAdress = styled.p`
margin: 23px 6.5px 0 14px;
color: #b8b8b8;
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
`;

export const Adress = styled.p`
margin: 6.5px 6.5px 23px 14px;
width: 328px;
height: 18px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
`;

export const ContainerTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100vw;
  width: 100vw;
`;

export const TitleTotal = styled.p`
width: 164px;
height: 18px;
margin: 10px 0 24px 16px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.39px;
color: #000000;
  `;

export const Total = styled.p`
width: 164px;
height: 18px;
margin: 10px 16px 26px 0;
font-family: Roboto;
font-size: 18px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -0.43px;
text-align: right;
color: #5cb646;
 
  `;

export const ProductsCartTitle = styled.p`
width: 360px;
  height: 24px;
  margin: 0px 0 33px;
  padding: 12px 32px;
  width: 296px;
  height: 18px;
  opacity: 0.89;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  `;

export const Shipping = styled.p`
  width: 95vw;
  height: 18px;
  margin: 0px 16px 7px 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  /* letter-spacing: -0.39px; */
  text-align: right;
  color: #000000;
  `;

export const TitlePay = styled.p`
/* width: 328px;
height: 18px; */
margin: 24px 0px 8px;
font-family: Roboto;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: normal;
`;

export const SeparationLine = styled.div`
width: 328px;
  height: 1px;
  margin: 8px 16px;
  border: solid 1px #000000;
`;

export const Cash = styled.div`
display: flex;
align-items: center;
width: 320px;
  height: 18px;
  margin: 11px 16px 11px 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
  `;

export const Credit = styled.div`
display: flex;
align-items: center;
width: 320px;
  height: 18px;
  margin: 11px 16px 15px 0px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #000000;
`;

export const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  color: #000000;
  width: 328px;
  height: 42px;
  border-radius: 2px;
  background-color: rgba(92, 182, 70, 0.5);
  margin: 11px 0px 15px 0px;
`;