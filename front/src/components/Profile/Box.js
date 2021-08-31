import React from 'react';
import { EditMajor, SaveMinor } from '@shopify/polaris-icons';
import styled from 'styled-components';


const ModifyEditMajor = styled(EditMajor)`
    width: 25px; height: 25px;
    cursor: pointer;
`;
const ModifySaveMinor = styled(SaveMinor)`
    width: 30px; height:30px;
    cursor: pointer;
`;

const BoxWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    min-height: 80px;
    border: 1px solid black;
`;
const FieldNameWrapper = styled.p`
    font-size: 24px;
`;
const InputWrapper = styled.div`
    padding-left: 20px;
`;
const InputText = styled.input`
    padding: 5px;
    outline: none;
    border: none;
    font-size: 20px;
    background-color: transparent;
    box-shadow: 0px 1px 0px silver;
`;

const Box = ({
    name,
    fieldName,
    id,
    setElem,
    open,
    setOpen,
    text,
    dispatch,
    updateElement
}) => {
    return (
        <BoxWrapper >
            <FieldNameWrapper>{name}: {fieldName}</FieldNameWrapper>
            {open ?
                <InputWrapper>
                    <InputText type='text' 
                        onChange={(e) => setElem(e.target.value)}
                    />
                    <ModifySaveMinor onClick={() => {
                        setOpen(!open);
                        dispatch(updateElement({ id, text, name }))
                    }} />
                </InputWrapper>
                :
                <InputWrapper>
                    <ModifyEditMajor onClick={() => setOpen(!open)} />
                </InputWrapper>}
        </BoxWrapper>
    );
};

export default Box;