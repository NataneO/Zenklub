
# Zenklub

<img src="https://img.shields.io/github/last-commit/NataneO/Corebiz?color=%23D9EBDF&label=Last%20commit&logo=github&logoColor=%23D9EBDF"/>

Esse projeto foi desenvolvido como teste para vaga na empresa Zenklub.
Para esse teste foi solicitado o desenvolvimento de SPA enviada pela empresa utilizando AngularJS.
Abaixo, estão listadas as instruções para execução.


###### Projeto em Angular 13.3.0 para vaga front-end na empresa Zenklub.

# Seja bem-vindo(a) #
<!-- ### Esse projeto está dividido em duas branchs:
#### Na branch 'main' você encontra o código principal, como foi solicitado no teste.
#### Na branch 'extras' você encontra o código com modificações de estilo,funcionalidades, etc.
##### Em ambas as branchs estão listadas as particularidades de cada um e os links para acesso das duas versões. -->
_________________________________________________________________________________________________________________________ 
 
### Esse projeto pode ser acessado de duas formas:
1) Você pode acessá-lo clicando no seguinte link:
<!-- ##### <a target="_blank" href="">Versão principal</a>
 ###### Versão com layout de acordo com o solicitado
 ##### <a target="_blank" href="https://fastidious-syrniki-816b77.netlify.app">Versão pessoal </a> #####
 ###### Versão mais completa, inspirado no site atual da marca, porém com modificações pessoais. -->
 <a target="_blank" href="https://fastidious-syrniki-816b77.netlify.app">Clicando aqui! </a>

2) Você pode cloná-lo e rodar na sua máquina executando os passos listados abaixo. 

### 1. Como compilar e executar?  ###
#### Caso escolha rodar localmente será necessário, primeiramente, clonar o projeto para sua máquina. Para isso, no terminal acesse a pasta onde deseja clonar o projeto. Após acessar, utilize o seguinte comando : ####

```sh
git clone https://github.com/NataneO/Zenklub.git
```

#### *Oba!* O projeto já está na sua máquina. Agora é necessário acessar a pasta correspondente. Você pode acessá-la com o seguinte comando ####

```sh
cd Zenklub
```
#### Agora é necessário instalar as dependências do projeto. Para isso, utilize o comando

```sh
npm install
```

## Pronto! ##
#### As dependências do projeto estam instaladas na sua máquina. 
<!-- #### Caso queira alterar a branch do projeto, para acessar a Versão Principal, ou a versão pessoal, utilize os seguintes comandos:

```sh
git checkout -b "main"
``` 
* Para acessar o projeto na versão principal


```sh
git checkout -b "extras"
``` 
* Para acessar o projeto na versão pessoal -->

#### Agora, sempre que quiser rodar o projeto, acesse a branch correspondente e utilize o comando 

```sh
ng serve
```

### 2. Beleza. Rodei o projeto, e agora? ###
#### Agora, para acessar o projeto, acesse o link abaixo 


## TCHARAMMMM! Você acessou o projeto. Espero que aproveite!


### Abaixo você encontrará algumas informações importantes sobre o projeto


#### API Rest:
 
 O mock de todos os dados da API Rest foi feito através do Postman.
 Para tal, foi construida a tabela de profissionais, que conta com os informações básicas dos profissionais, bem como datas e horários de    agendamento para cada profissional.
#### Data Fetching:
 
Como solicitado na proposta do teste, o data fetching está sendo feito através do HTTP Request.
 
#### Bibliotecas utilizadas:
  
Para desenvolvimento desse projeto, além da utilização do Angular, também foram utilizadas :
  <a target="_blank" href="https://www.npmjs.com/package/ngx-star-rating">ngx-star-rating</a> - para exibição das avaliações.
  <a target="_blank" href="https://www.npmjs.com/package/angular-responsive-carousel">angular-responsive-carousel</a> - para gerar os carrosséis de horas e de dias.
  
#### Melhorias futuras:

Futuramente, pretendo implementar funcionalidades como:
- agendamento de horario
- busca de profissionais
- mudança de timezone

#### Consumo de CDN's:

Nesse projeto, as CDN's que estão sendo consumidas são as seguintes: FontAwesome e GoogleFonts


#### Pontos de destaque:
1) Todos os dados estão sendo consumidos da API no Postman.
2) Os horários de disponibilidade de cada profissional são calculados a partir de um horário de início e um horário de fim. Cada profissional determina em quais horários pode iniciar e finalizar, respectivamente, e os horários disponíveis para agendamento são calculados a partir disso.
3) O calendário é dinâmico, e a contagem inicia a partir da data atual até 10 dias à frente. Decidi realizar dessa forma, para evitar o grande volume de dados a serem processados.
4) O layout utilizado na versão extra, é uma adaptação do layout atual do site Zenklub.

#### Acerca do desenvolvimento:

Desenvolver esse projeto foi muito divertido.
Enfrentei algumas dificuldades (principalmente em relação à sintaxe da linguagem e à criação do
calendário dinâmico, gerado a partir da data atual.)
Foi o primeiro teste que desenvolvi em angular e fiquei muito feliz que o Zenklub me deu liberdade criativa.
Como sei que o projeto, em si, é uma abstração do site atual do Zenklub, decidi criar a versão extra para poder brincar um pouco mais e trabalhar no layout atual da plataforma.
Me sinto muito feliz por poder concluir o projeto no prazo dado (5 dias) e espero desenvolver melhorias para ele em breve.

## Até logo!
