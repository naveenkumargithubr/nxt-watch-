import styled from 'styled-components'

export const LoginBgLightContainer = styled.div`
  min-height: 100vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginCardBgLightContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 450px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 350px;
  }
`

export const WebsiteLogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
  margin-top: 20px;
`

export const WebLogoImg = styled.img`
  width: 150px;
  height: 50px;
`

export const FormLoginContainer = styled.form`
  margin-top: 30px;
`

export const UsernameContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 300px;
  }
`

export const LabelLight = styled.label`
  color: #616e7c;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 4px;
  line-height: 1.4;
`

export const InputLight = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 35px;
  border-radius: 3px;
  color: black;
  padding-left: 13px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 3px;
`

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-bottom: 28px;
`

export const InputCheckBoxLight = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  color: black;
  margin-right: 10px;
`

export const LabelCheckLight = styled.label`
  color: #0f0f0f;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
`

export const LoginButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  height: 38px;
  width: 380px;
  text-align: center;
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
  background: #3b82f6;
  border-radius: 10px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    width: 300px;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family:"Roboto",
  font-size: 20px;
  font-weight: 500;
`

// dark theme container styling

export const LoginBgDarkContainer = styled.div`
  background-color: #181818;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const LoginCardBgDarkContainer = styled.div`
  background-color: #383838;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 450px;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 350px;
  }
`

export const LabelDark = styled.label`
  color: #f9f9f9;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 4px;
  line-height: 1.4;
`

export const InputDark = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 40px;
  border-radius: 3px;
  color: white;
  padding-left: 13px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin-left: 3px;
  background: transparent;
`

export const InputCheckBoxDark = styled.input`
  border: 1px solid #94a3b8;
  outline: none;
  height: 16px;
  width: 16px;
  border-radius: 3px;
  color: black;
  margin-right: 10px;
`

export const LabelCheckLDark = styled.label`
  color: #f8fafc;
  font-weight: 600;
  font-family: 'Roboto';
  font-size: 16px;
`
