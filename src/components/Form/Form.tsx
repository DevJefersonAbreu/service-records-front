"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  FormWrapper,
  FormContainer,
  FormHeader,
  Title,
  Subtitle,
  FormGrid,
  FormGroup,
  Label,
  Input,
  Button,
  ButtonContainer,
  RequiredText,
  SuccessMessage,
  ErrorMessage,
} from "./Form.styles"
import api from "../../services/api" // Importe a API configurada

const Form = () => {
  const [fullName, setFullName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [date, setDate] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false) // Estado para controlar o carregamento

  useEffect(() => {
    const today = new Date()
    setDate(today.toISOString().split("T")[0])
  }, [])

  // Função para validar o nome (apenas letras e acentos)
  const validateName = (name: string) => {
    return /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(name)
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Verifica se o valor contém apenas letras e acentos
    if (validateName(value) || value === "") {
      setFullName(value)
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")

    let formattedValue = ""

    if (value.length <= 2) {
      formattedValue = value.length ? `(${value}` : ""
    } else if (value.length <= 7) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`
    } else if (value.length <= 11) {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`
    } else {
      formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
    }

    setPhoneNumber(formattedValue)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setSuccessMessage("")
    setErrorMessage("")

    // Validação adicional do nome antes de enviar
    if (!validateName(fullName)) {
      setErrorMessage("O nome do paciente deve conter apenas letras e acentos.")
      return
    }

    const newRecord = {
      full_name: fullName,
      address: address,
      phone_number: phoneNumber,
      date: date,
    }

    setIsLoading(true) // Inicia o estado de carregamento

    try {
      console.log("Enviando dados:", newRecord)

      // Substitua a Promise simulada pela chamada real à API
      const response = await api.post("/v1/service-records", newRecord)
      console.log("Resposta da API:", response.data)

      setSuccessMessage("Atendimento registrado com sucesso!")

      setFullName("")
      setAddress("")
      setPhoneNumber("")

      setTimeout(() => {
        setSuccessMessage("")
      }, 5000)
    } catch (error) {
      console.error("Erro ao registrar atendimento:", error)

      setErrorMessage("Erro ao registrar atendimento. Por favor, tente novamente.")

      setTimeout(() => {
        setErrorMessage("")
      }, 5000)
    } finally {
      setIsLoading(false) // Finaliza o estado de carregamento
    }
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return ""

    const date = new Date(dateString)
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()

    return `${day}/${month}/${year}`
  }

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormHeader>
          <Title>Registro de Atendimento Home Care</Title>
          <Subtitle>Preencha os dados para registrar o atendimento</Subtitle>
        </FormHeader>

        <FormGrid>
          <FormGroup>
            <Label required>Data da Solicitação</Label>
            <Input type="text" value={formatDate(date)} readOnly required style={{ backgroundColor: "#f9f9f9" }} />
          </FormGroup>

          <FormGroup>
            <Label required>Nome do Paciente</Label>
            <Input
              type="text"
              placeholder="Ex: Maria Silva"
              value={fullName} 
              onChange={handleNameChange}
              required
              disabled={isLoading} 
            />
          </FormGroup>

          <FormGroup>
            <Label required>Número de WhatsApp</Label>
            <Input
              type="text"
              placeholder="Ex: (11) 98765-4321"
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
              maxLength={16}
              disabled={isLoading} // Desabilita o campo durante o carregamento
            />
          </FormGroup>

          <FormGroup>
            <Label required>Endereço Completo</Label>
            <Input
              type="text"
              placeholder="Ex: Rua ABC, 123 - Bairro - Cidade/UF"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              disabled={isLoading} // Desabilita o campo durante o carregamento
            />
          </FormGroup>
        </FormGrid>

        <ButtonContainer>
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Registrando..." : "Registrar Atendimento"}
          </Button>
        </ButtonContainer>

        {/* Exibir mensagens de sucesso ou erro */}
        {successMessage && <SuccessMessage>{successMessage}</SuccessMessage>}
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

        <RequiredText>
          Todos os campos marcados com <span>*</span> são obrigatórios
        </RequiredText>
      </FormContainer>
    </FormWrapper>
  )
}

export default Form;