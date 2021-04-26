import styled from 'styled-components'

export const CardProduto = styled.div`
display: flex; 
width: 328px;
  height: 112px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
margin: 5px;
  `
export const ContainerImg = styled.div`
width: 96px;
height: 112px;
border-radius: 8px 0 0 8px;
background-color: #d8d8d8;  

`
export const ContentCard = styled.div`
width: 232px;
height: 112px;
border-radius: 0 8px 8px 0;
border: solid 1px var(--greyish);
}
`
export const Amount = styled.div`
display: flex;
justify-content: center;    
align-items: center;
width: 33px;
  height: 33px;
  margin: 0 0 7px 16px;
/*   padding: 7px 12px;
 */  border-radius: 0 8px 0 8px;
  border: solid 1px #5cb646;
  color: #5cb646;
`
export const Title = styled.div`
width: 167px;
  height: 18px;
  margin: 15px 16px 2px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
`
export const Description = styled.div`
    width: 200px;
    height: 30px;
    margin: 4px 16px 4px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`
export const Price = styled.div`
    width: 118px;
    height: 19px;
    margin: 4px 8px 15px 16px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`
export const DivBottom = styled.div`
display: flex;
justify-content: space-between;
`
export const Remove = styled.div`
    width: 90px;
    height: 31px;
    border-radius: 8px 0 8px 0;
    border: solid 1px #e02020;
    color: #e02020;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const DivTop = styled.div`
display: flex;
justify-content: space-between;
`
export const Image = styled.img`
  width: 96px;
  height: 112px;
  margin: 0 16px 0 0;
  border-radius: 8px 0 0 8px;
`