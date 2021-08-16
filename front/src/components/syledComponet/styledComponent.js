import styled from 'styled-components';

export const ServerMessage = styled.p`
    text-align: center;
    width: 100%;
    font-size: 24px;
    padding: 5px;
    padding-top: 20px;
    color: #202020ca;
`;
export const InputSubmit = styled.input`
    display: flex;
    justify-content: center;
    align-self: center;
    text-align: center;
    width: 40%;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #eeeeee;
    &:hover {
        background-color: #dddddd;
    }; 
`;
export const InputText = styled.input`
    margin-bottom: 15px;
    padding: 5px;
    outline: none;
    border: none;
    color: #202020ca;
    box-shadow: 0px 1px 1px #c0c0c06a;
    font-size: 25px;
    &:hover {
        background-color: #eeeeee;
    }         
`;
export const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    padding: 25px;
    padding-top: 100px;
`;
export const FormWraper = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;