Feature: Cadastro do Cliente
  
  Scenario Outline: Cliente cadastrou informaçao invalida
    Given  Cliente na tela de cadastro e informou os dados de cadastro
    When Cliente finaliza cadastro
    Then O cadastro deve ser bloqueado
    
  Examples:
      | nome     | email                      | CPF           | telefone  | Nascimento |
      | "Brenno" | "milanezibrenno@gmail.com" | '11977'       |'997800078'| 21/01/1997 |
      | "Thalles"| "thallesvargas"            | '11239099032' |'997933787'| 22/01/1997 | 

  Scenario Outline: Cliente cadastrou informacao valida
    Given Cliente na tela de cadastro e informou os dados de cadastro
    When Cliente finaliza cadastro 
    Then O cadastro deve ser completado
  
  Examples:
      | nome     | email                      | CPF           | telefone  | Nascimento |
      | "Brenno" | "milanezibrenno@gmail.com" | '11976550777' |'997800078'| 21/01/1997 |
      | "Thalles"| "thallesvargas@gmail.com"  | '11239099032' |'997933787'| 22/01/1997 | 

    
  Scenario Outline: Cliente nao cadastrou todas as informacoes
    Given Cliente na tela de cadastro e informou alguns dados de cadastro
    When Cliente finaliza cadastro
    Then O cadastro deve ser bloqueado
  
  Examples:
      | nome     | email                      | CPF           | telefone  | Nascimento |
      | "Brenno" | "milanezibrenno@gmail.com" | '11976550777' |           | 21/01/1997 |
      |          | "thallesvargas@gmail.com"  | '11239099032' |'997933787'| 22/01/1997 | 
