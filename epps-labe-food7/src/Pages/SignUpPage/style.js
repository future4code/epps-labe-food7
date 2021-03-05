import styled from 'styled-components'

export const ContainerContent = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0 16px;
 flex-direction: column;
 max-width: 100vw;
 max-height: 100vh;
 `
export const ContainerForm = styled.div`
 display: flex;
 justify-content: flex-end;
 flex-direction: column;
 align-items: center;
 `
export const Form = styled.form`
 display: flex;
 justify-content: center;
 flex-direction: column;
 `
export const Input = styled.input`
  ::-webkit-input-placeholder {
    color: #b8b8b8;
   }
  margin-left: 13px;
  border: none;
  width: 73.4vw;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  &:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
 `
export const Button = styled.button`
margin: 8px 16px 20px;
 width: 91.1vw;
  height: 6.5vh;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000000;
  background-color: #5cb646;
  border: none;
  border-radius: 2px;
  cursor:pointer;
 `

export const Label = styled.label`
position: relative;
width: 21.6vw;
  height: 2.8vh;
  background-color: #fff;
  margin: 3px 4px 63px 16px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  border: 2px solid #FFF;
  color: ${(props) => {
    if (props.erro === false) {
      return "#e02020"
    } else {
      return "#b8b8b8"

    }
  }};
`
export const ContainerInput = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 border-radius: 4px;
 width: 91.1vw;
 height: 8.7vh;
 margin: 7.5px 16px;
 border: ${(props) => {
    if (props.erro === false) {
      return "1px solid #e02020"
    } else {
      return "1px solid #b8b8b8"

    }
  }};
`

export const ImgSenha = styled.div`
 position: absolute;
 display: flex;  
 justify-content: space-around;
 align-items: center;
`
export const Text = styled.div`
 display: flex;  
 justify-content: center;
 align-items: center;
 margin: 32px 0 10px 0 ;
`
export const ErrorMensage = styled.p`
 margin: 0px 16px;
 height: 16px;
 width: 210px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #e02020;

`

export const Header = styled.div`
 width: 93vw;
 min-height: 6.4vh;
 margin: 0 0 24px;  
 padding: 0 0 0 20px; 
 -webkit-backdrop-filter: blur(10px);
 backdrop-filter: blur(10px);
 box-shadow: 0 0.5px 0 0 black-25;
 border-bottom: 1px solid rgba(0, 0, 0, 0.25);
 display: flex;  
 align-items: center;
`
