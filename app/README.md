# Projeto Final - Módulo 3

## API RESTful

## Introdução

Projeto final que consiste em criar uma API que contenha todo o CRUD, em 5 rotas distintas, sobre o tema Pokémon (escolhido pelos autores), as quais são:

- `/add` - para adicionar itens ao banco de dados;

- `/update` - para atualizar itens ao banco de dados;

- `/listall` - para listar todos os itens do DB;

- `/listid` - para listar através de um id específico;

- `/delete` - para apagar qualquer item do DB.

  

## Preparação para utilizar a API

Antes de usarmos nossa API, é necessário que tenha o software Node Js instalado no seu computador.

Para isso, acesse o link https://nodejs.org/en/ e obtenha a versão correta do Node para seu sistema operacional. Siga todas as orientações conforme cada tela do processo de instalação.

Com o Node Js devidamente instalado, baixe ou clone as pastas deste repositório e salve em seu computador.

 Após ter os arquivos da API salvos em seu computador, abra o Prompt de comando/terminal (CMD) do seu sistema operacional, vá até a pasta onde os arquivos da API estão e inicialize os comandos abaixo:

```javascript
npm init
npm start
npm install dotenv
npm install express --save
npm install mongoose
npm install express-validator
```

Concluído a instalação das dependências necessárias, para poder utilizar a API, será necessário usar programas como o Postman, Insomnia, ou o Thunder Client dentro do VS Code.

!["postman"](C:\Users\User\Documents\Curso_Programacao_pela_Blue\Codigos\MODULO_3\Porjeto_Final_MOD3\Projeto-Final-M3\Back\img\postman.png "Tela do postman")

![Insomnia](C:\Users\User\Documents\Curso_Programacao_pela_Blue\Codigos\MODULO_3\Porjeto_Final_MOD3\Projeto-Final-M3\Back\img\insomnia.png "Página de download Insomnia")

![](C:\Users\User\Documents\Curso_Programacao_pela_Blue\Codigos\MODULO_3\Porjeto_Final_MOD3\Projeto-Final-M3\Back\img\thunderclient.png "Thunder")

Para utilizar o Postman, você irá precisar acessar o link https://www.postman.com/ e criar uma conta ou, se preferir, baixar o software neste link aqui: https://www.postman.com/downloads/. Para mais detalhes de como utilizar essa aplicação, acesse https://learning.postman.com/docs/getting-started/introduction/.

O mesmo se aplica ao Insomnia; o link para download: https://insomnia.rest/download e o link para consultar a documentação para melhor entender seu funcionamento: https://docs.insomnia.rest/.

![](C:\Users\User\Documents\Curso_Programacao_pela_Blue\Codigos\MODULO_3\Porjeto_Final_MOD3\Projeto-Final-M3\Back\img\extensao.png)

Já em relação ao Thunder, ele é uma extensão do VS Code, então, para utiliza-lá, vá até a aba Extensions (ou Extensão, se seu VS Code estiver em português) e digite "Thunder Client", provavelmente será a primeira opção da listagem. Clique no banner com o nome da extensão e irá aparecer uma janela, igual a última imagem de exemplo acima. Clique em Install (ou Instalar) e após instalar, clique em Able (caso já não esteja habilitado após a instalação). Pronto, já está pronto para testar nossa API.



## Iniciando a API ##

