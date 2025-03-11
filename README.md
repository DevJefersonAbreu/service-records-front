# Service Records - Frontend

## Descrição

Este repositório contém o frontend do sistema de **Registro de Solicitações de Atendimentos Emergenciais Home Care**, desenvolvido utilizando **React CRA com TypeScript**. O objetivo é facilitar o processo de solicitação de atendimentos médicos domiciliares para pacientes que necessitam de atendimento urgente.

## Objetivo

O sistema permite que a central de atendimentos registre solicitações de atendimentos home care de maneira rápida e eficiente. O fluxo de funcionamento é o seguinte:

1. Um paciente ou parente telefona para a central e solicita um atendimento médico urgente.
2. A central registra a solicitação no sistema, incluindo:
   - **Nome do Paciente**
   - **Data da Solicitação**
   - **Número de Contato (WhatsApp)**
   - **Endereço**
3. O sistema gera um **número de protocolo de atendimento** e direciona um profissional de saúde para o local informado.

## Tecnologias Utilizadas

- **React CRA (Create React App)**
- **TypeScript**
- **Styled Components** (para estilização)
- **Axios** (para requisições HTTP)
- **React Hook Form** (para gerenciamento do formulário)
- **Yup** (para validação de formulários)

## Funcionalidades

- Formulário dinâmico para registro de solicitações.
- Validação dos campos do formulário para evitar entradas inválidas.
- Integração com API backend para envio dos dados via **JSON**.
- Interface responsiva e intuitiva.

## Instalação e Execução

1. Clone este repositório:
   ```sh
   git clone https://github.com/DevJefersonAbreu/service-records-front.git
   ```

2. Acesse o diretório do projeto:
   ```sh
   cd service-records-front
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```

O aplicativo estará disponível em `http://localhost:3000/`.



## Contribuição

Sinta-se à vontade para contribuir com melhorias! Para isso:
1. Fork este repositório
2. Crie uma nova branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'Adicionando nova funcionalidade'`
4. Faça um push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo `LICENSE`.

---

## 📞 Contato

- **Desenvolvedor:** Jeferson Abreu  
- **GitHub:** [DevJefersonAbreu](https://github.com/DevJefersonAbreu)  
- **LinkedIn:** [Jeferson Abreu](https://www.linkedin.com/in/jeferson-da-silva-abreu/)  
- **E-mail:** devjefersonabreu10@gmail.com

