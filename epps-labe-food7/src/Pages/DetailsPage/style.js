import styled from 'styled-components'

<<<<<<< HEAD
export const Feed = styled.div `
    border: 1px solid black;
    
`

export const Header = styled.div `
    border: 1px solid #dfdfdf;
    padding: 10px;
    font-size:17px;
    font-family: Arial;
    text-align: center;
`

export const Search = styled.input `
    width: 328px;
    height: 56px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    border: 1px solid grey;
    box-sizing: border-box;
    border-radius: 2px;
    margin-top: 10px;
    padding:10px;

`
export const Card = styled.div `
    border: 1px solid #b8b8b8;
    width: 328px;
    height: 200px;
    padding: 0 0 16px;
    border-radius: 8px;
    margin:auto;
    margin-top:10px;
`

export const DetailCard = styled.div `
   display: flex;
   
   
`
export const ImageCard = styled.img `
     width: 328px;
    height: 120px;
`
=======
export const ContainerContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 flex-direction: column;
 max-width: 100vw;
 max-height: 100vh;
 
 `

export const Header = styled.div`
text-align:center;
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
box-sizing: border-box;
width: 100vw;
min-height: 6.4vh;
margin: 0 0 10px;  
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);
box-shadow: 0 0.5px 0 0 black-25;
border-bottom: 1px solid rgba(0, 0, 0, 0.25);

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
    height: 120px;
    object-fit: contain;
`
>>>>>>> ea37b36e93c3484a1a7d6226ceb5a8970f3c97e7
