import styled from 'styled-components'

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
margin: 0 0 10px;  
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 black-25;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);
p {
    text-align: center;
    font-size: 18px;
    margin-top: 8px;
    font-family:'Roboto';
}

`

export const ContainerSearch = styled.div ` 
    text-align: center;

`

export const Input = styled.input `
   width: 328px;
  height: 56px;
  font-size: 18px;
  box-sizing: border-box;
  padding-left: 40px;
  border-radius: 2px;
  border: 1px solid #b8b8b8;
  background: url('https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/0EC434DF-B2F5-4D7C-8E3B-44E81E3D4941.svg') no-repeat scroll 7px 7px;
  background-position-y: 15px;
  
`

export const ContainerFiltro = styled.div ` 
      width: 360px;
  height: 42px;
  display: flex;
  justify-content: space-around;
  padding:5px;
`

export const Card = styled.div ` 
    width: 328px;
    height: 188px;
    border-radius: 8px;
    border: 1px solid #b8b8b8;
    margin-top:10px;
    p {
        font-family: Arial;
        margin-top:5px;
        margin-bottom:5px;
        margin-left: 15px;
        color:#5cb646;
        font-size: 16px;
    }
`

export const DetailCard = styled.div ` 
    display: flex;
    justify-content:space-between;
    p {
        margin-top:0;
        margin-right: 15px;
        color: #b8b8b8;

    }
`
export const ImageCard = styled.img ` 
    border-radius: 8px 8px 0 0;
    height: 120px;
    width: 328px;

`

export const MenuFeed = styled.div `
    height: 55px;
    position: fixed;
    top:92%;
    box-sizing: border-box;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff;
    border: 1px solid #b8b8b8;
    width:100vw;

`