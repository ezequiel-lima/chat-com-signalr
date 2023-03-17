# Chat com .NET, Angular e SignalR

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/ezequiel-lima/web-sockets/blob/main/LICENSE)

Este é um pequeno projeto de estudo em .Net, Angular e SignalR que utiliza a tecnologia de WebSockets para criar um chat em tempo real entre vários usuários.

O projeto consiste em uma aplicação Angular que utiliza a biblioteca @microsoft/signalr para se conectar a um servidor SignalR que implementa um hub de chat.

O servidor de chat é escrito em C# e utiliza a biblioteca Microsoft.AspNetCore.SignalR para estabelecer uma conexão WebSocket com o cliente. Quando a conexão é estabelecida, o servidor recebe as mensagens enviadas pelo cliente e transmite essas mensagens para todos os usuários conectados ao hub de chat.

O cliente Angular é responsável por exibir as mensagens enviadas pelos usuários conectados ao hub de chat, permitir que os usuários enviem novas mensagens e informar a entrada e saída de usuários na sala.

Este projeto é um excelente exemplo de como a tecnologia SignalR pode ser utilizada para criar uma comunicação bidirecional em tempo real entre vários usuários. Além disso, o projeto também demonstra o uso da biblioteca @microsoft/signalr em Angular para estabelecer uma conexão WebSocket e receber as mensagens enviadas pelo servidor.

## Demonstração 

![Pagina Inicial](https://github.com/ezequiel-lima/chat-com-signalr/blob/main/page1.PNG)
![Chat](https://github.com/ezequiel-lima/chat-com-signalr/blob/main/page2.PNG)

## Como executar o projeto
Para executar o projeto, siga as seguintes etapas:

1. Clone este repositório em sua máquina local usando o comando git clone https://github.com/ezequiel-lima/chat-com-signalr.git
2. Abra o projeto em sua IDE de preferência.
3. Compile e execute o projeto do servidor de chat.
4. Em outra janela do terminal, navegue até a pasta do projeto Angular e execute o comando npm install para instalar as dependências necessárias.
5. Em seguida, execute o comando ng serve para iniciar o servidor da aplicação Angular.
6. Abra o navegador e acesse a URL http://localhost:4200 para abrir a aplicação Angular.
7. Insira um nome de usuário e clique em "Ok" para acessar a sala de chat.
8. Escreva e envie mensagens no chat e observe a troca de mensagens em tempo real.

## Conclusão
Em resumo, o chat desenvolvido é uma ótima demonstração de como o SignalR pode ser utilizado para implementar comunicação em tempo real entre um cliente e um servidor. Além disso, o chat é um exemplo prático de como implementar recursos de chat básicos em um aplicativo web usando tecnologias atuais.
