import styled from 'styled-components';

export const LoginPageStyle = styled.div `
  display: flex;
 justify-content: space-between;
 align-items: center;

 flex-direction: column;
 max-width: 100vw;
 max-height: 100vh;

`

export const LoginCard = styled.div`
    background-color: #fff;
    text-align: center;
    padding: 100px 0 0 0;
`

export const Rectangle = styled.div `
    height: 640px;
    padding: 288px 0 0 117px;
    background-color: #000000;
    color: white;
`
export const ContainerInput = styled.div`
 display: flex;
 justify-content: center;
 flex-direction: column;
 border-radius: 4px;
 width: 91.1vw;
 height: 8.7vh;
 margin: 7.5px 16px;
 margin-top:10px;
 border: ${(props) => {
    if (props.erro === false) {
      return "1px solid #e02020"
    } else {
      return "1px solid #b8b8b8"

    }
  }};
`
export const Input = styled.input`
  ::-webkit-input-placeholder {
    color: #b8b8b8;
   }
  margin-left: 13px;
  border: none;
  width: 73.4vw;
  height: 18px;
  font-family: 'Roboto';
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
  font-family: 'Roboto';
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
  cursor: pointer;
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

export const ImgSenha = styled.div`
 position: absolute;
 display: flex;  
 justify-content: space-around;
 align-items: center;
`

export const LinkCadastro = styled.p ` 
    font-family: 'Roboto';
    cursor: pointer;
`