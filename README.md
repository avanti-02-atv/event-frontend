# EventHub: Front-end em React para Gerenciamento de Eventos Culturais

Bem-vindo ao repositório do Front-end do EventHub! Esta plataforma oferece uma solução eficaz para o gerenciamento de eventos culturais, permitindo que os usuários criem, listem, pesquisem e filtrem eventos.

## Sobre o EventHub

O EventHub é uma plataforma dedicada a facilitar a organização e visualização de eventos culturais. Com ele, você pode:
* Criar eventos culturais
* Listar eventos existentes
* Pesquisar eventos por categoria, local, data de início e término
* Filtrar eventos com base em diferentes critérios

## Como Executar a Aplicação

Para rodar a aplicação, é necessário também executar o backend presente no repositório [Event Backend](https://github.com/avanti-02-atv/event-backend).

### Passos para executar o backend

1. Clone o repositório do backend:
    ```sh
    git clone https://github.com/avanti-02-atv/event-backend.git
    ```
2. Navegue até o diretório do backend:
    ```sh
    cd event-backend
    ```
3. Instale todas as dependências:
    ```sh
    npm install
    ```
4. Configure as variáveis de ambiente conforme o arquivo `.env.example`.
5. Execute as migrações do banco de dados:
    ```sh
    npx prisma migrate dev
    ```
6. Inicie o servidor backend:
    ```sh
    npm run dev
    ```

### Passos para executar o front-end

1. Clone o repositório do front-end:
    ```sh
    git clone https://github.com/avanti-02-atv/event-frontend.git
    ```
2. Navegue até o diretório do front-end:
    ```sh
    cd event-frontend
    ```
3. Instale todas as dependências:
    ```sh
    npm install
    ```
4. Inicie o projeto:
    ```sh
    npm run dev
    ```
5. Acesse a aplicação através do navegador no endereço: [http://localhost:5173/](http://localhost:5173/)

## Acesso ao Site da Aplicação

Para acessar o site da aplicação, é necessário efetuar o registro de usuário ou realizar o login. Após isso, você poderá navegar pelas seguintes páginas:
* **Página Inicial:** Contém uma breve descrição de dois tipos de eventos.
* **Página de Eventos:** Permite a pesquisa e o filtro de eventos por categoria, local, data de início e término.
* **Página Sobre:** Apresenta uma breve descrição sobre o projeto, incluindo um link para o repositório do frontend.
* **Página Contato:** Oferece uma forma fictícia de entrar em contato com a equipe do EventHub.
* **Opção Sair:** Permite deslogar de sua conta.

## Acesso às Páginas de Administrador

Para acessar as páginas de administrador, siga os passos abaixo:
1. Cadastre uma conta na área de registro da aplicação front-end.
2. Acesse o Prisma Studio pelo terminal do backend para configurar a conta registrada como uma conta administradora:
    ```sh
    npx prisma studio
    ```
3. No Prisma Studio, encontre a tabela `user` e edite a conta que você registrou, definindo o campo `isOrganizer` para `true`.
4. Efetue novamente o login com as credenciais do usuário que foi alterado para acessar as páginas de administrador.

## Ferramentas Utilizadas

* **Tecnologias:** React.js, Tailwind CSS, Axios
* **Ambiente de Desenvolvimento:** Visual Studio Code

## Equipe

* **Robson do Amaral Diógenes** - Email: [robsonad07@gmail.com](mailto:robsonad07@gmail.com)
* **Fulgêncio Thierry Silva** - Email: [thierryfulgencio@gmail.com](mailto:thierryfulgencio@gmail.com)
* **Luiz Eduardo Silva Costa** - Email: [luizeduardoedd1@gmail.com](mailto:luizeduardoedd1@gmail.com)
* **Dhymas Gabriel da Silva Candeias** - Email: [dhymas.g@gmail.com](mailto:dhymas.g@gmail.com)

Este sistema foi desenvolvido como parte do trabalho do bootcamp de desenvolvimento full stack oferecido pelo Avanti em parceria com o Instituto Atlântico.

---

Para mais informações, sugestões ou contribuições, sinta-se à vontade para entrar em contato com qualquer membro da equipe. Agradecemos seu interesse e esperamos que você aproveite o EventHub!
