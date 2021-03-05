import styled from "styled-components";

export const ContainerContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
 max-width: 100vw;
 max-height: 100vh;
 
 `

export const Header = styled.div`
box-sizing: border-box;
width: 100vw;
min-height: 6.4vh;
padding-left: 10px;
margin: 0 0 10px;  
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 black-25;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
display: flex;
align-items: center;
p {
    margin-left:30%;;
    font-size: 18px;
    font-family:'Roboto';
}
`

export const ImageCard = styled.img ` 
    border-radius: 8px 8px 0 0;
    height: 120px;
    width: 328px;
`

export const ContainerInfo = styled.div ` 
    width: 328px;
    margin-left: 10px;
    font-family: 'Roboto';
    h4{
        margin: 10px 0 10px 0;
        color:#5cb646;
    }
    p{
        margin: 10px 0 10px 0;
        color:#b8b8b8;
    }
`

export const ContainerProduct = styled.div `
    width:328px;
    font-family: 'Roboto';
    h4 {
        margin-bottom: 2px;
    }

`

export const Card = styled.div ` 
    width: 328px;
  height: 112px;
  margin: 7px 0 0;
  border-radius: 8px;
  border: 1px solid #b8b8b8;
display: flex;


`

export const InfoProduct = styled.div ` 
    flex-direction: column;
    
    h4 {
        margin-top: 12px;
        color:#5cb646;
        
        
    }

    p {
        font-size: 13px;
        color:#b8b8b8;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    h3{
        margin-top: 0;
    }
`

export const ImageProduct = styled.img `
width: 96px;
  height: 112px;
  border-radius: 8px 0 0 8px;
  margin: 0 16px 0 0;
 
`

export const BotaoAdd = styled.button `
    width: 100px;
  height: 31px;
    background:transparent;
    font-family:'Roboto';
    margin-top:82px;
  border-radius: 8px 0 8px 0;
  border: 1px solid #5cb646;
  color:#5cb646;
  outline: none;
  cursor: pointer;
`

