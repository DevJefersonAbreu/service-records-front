import type React from "react"
import styled from "styled-components"

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    background-color: #f5f5f5;
    width: 100%;
    box-sizing: border-box;
`

export const FormContainer = styled.form`
    width: 100%;
    max-width: 800px;
    background: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    position: relative; 
    
   
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: #E23C05;
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
    }
    
   
    @media (max-width: 768px) {
        padding: 30px;
    }
    
    @media (max-width: 480px) {
        padding: 20px;
        border-radius: 12px;
        
        &::before {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
        }
    }
`

export const FormHeader = styled.div`
    text-align: center;
    margin-bottom: 32px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (max-width: 480px) {
        margin-bottom: 24px;
    }
`

export const Title = styled.h1`
    color: #E23C05;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    
    @media (max-width: 768px) {
        font-size: 24px;
    }
    
    @media (max-width: 480px) {
        font-size: 22px;
        margin-bottom: 6px;
    }
`

export const Subtitle = styled.p`
    color: #666;
    font-size: 16px;
    margin-bottom: 32px;
    
    @media (max-width: 768px) {
        font-size: 15px;
        margin-bottom: 24px;
    }
    
    @media (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 20px;
    }
`

export const FormGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
        margin-bottom: 24px;
    }
    
    @media (max-width: 480px) {
        gap: 16px;
        margin-bottom: 20px;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 20px;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`


interface LabelProps {
  required?: boolean
  children: React.ReactNode
}

export const Label = styled.label<LabelProps>`
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;

    &::after {
        content: "${(props) => (props.required ? " *" : "")}";
        color: #E23C05;
    }
    
    @media (max-width: 480px) {
        font-size: 13px;
        margin-bottom: 6px;
    }
`

export const Input = styled.input`
    padding: 12px 16px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    transition: border-color 0.2s;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border-color: #E23C05;
    }

    &::placeholder {
        color: #999;
    }
    
    @media (max-width: 768px) {
        padding: 10px 14px;
    }
    
    @media (max-width: 480px) {
        padding: 10px 12px;
        font-size: 15px;
        border-radius: 6px;
    }
    
   
    @media (max-width: 768px) {
        min-height: 44px;
    }
`

export const Button = styled.button`
    width: auto;
    padding: 16px 32px;
    background-color: #E23C05;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
    margin: 0 auto;
    display: block;

    &:hover {
        background-color: #c93504;
    }
    
    @media (max-width: 768px) {
        padding: 14px 28px;
    }
    
    @media (max-width: 480px) {
        padding: 12px 24px;
        font-size: 15px;
        border-radius: 6px;
    }
`

export const RequiredText = styled.p`
    text-align: center;
    color: #666;
    font-size: 14px;
    margin-top: 16px;

    span {
        color: #E23C05;
    }
    
    @media (max-width: 480px) {
        font-size: 13px;
        margin-top: 12px;
    }
`

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    border-radius: 8px;
    margin-top: 16px;
    font-size: 15px;
    font-weight: 500;
    text-align: center;
    
    @media (max-width: 480px) {
        padding: 10px 14px;
        font-size: 14px;
    }
`

export const SuccessMessage = styled(MessageContainer)`
    background-color: #e6f7e6;
    color: #2e7d32;
    border: 1px solid #c8e6c9;
`

export const ErrorMessage = styled(MessageContainer)`
    background-color: #ffebee;
    color: #c62828;
    border: 1px solid #ffcdd2;
`

