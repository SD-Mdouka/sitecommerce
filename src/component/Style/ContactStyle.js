import styled from "styled-components";
/*
    ===============================
            Drop Styles
    ===============================
*/
export const Container = styled.div`
  margin: 50px;
`;
export const ContactSection = styled.div`
  padding: 50px 0px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ContactTitle = styled.h2`
  postion: realtive;
  font-size: 60px;
  margin-bottom: 30px;
  @media (max-width: 575px) {
    font-size: 40px;
  }
`;

export const TitelSpan = styled.span`
  font-weight: normal;
  &::after {
    position: absolute;
    content: "";
    top: -20px;
    background: url(data:image/png;base64,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)
      no-repeat;
    display: inline-block;
    width: 96px;
    height: 67px;
    z-index: -1;
  }
`;

export const Contactform = styled.form`
  width: 70%;
  margin: auto;
  @media (max-width: 575px) {
    width: 90%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  outline: 0;
  padding: 5px;
  margin-bottom: 10px;
  @media (max-width: 575px) {
    width: 100%;
  }
`;

export const FormInput = styled.div`
  overflow: hidden;
`;

export const TextInput = styled(Input)`
  float: left;
  width: 49%;
`;

export const EmailInput = styled(Input)`
  float: right;
  width: 49%;
`;

export const SubmitContact = styled(Input)`
  width: 100%;
`;

export const TextareaContact = styled.textarea`
  width: 100%;
  outline: 0;
  background: #ccc;
`;
export const InputContact = styled(Input)`
  width: 60%;
  background: #fff;
  border: 1px solid #ccc;
  color: #888;
  cursor: pointer;
`;
