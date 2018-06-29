Feature: Cliente se cadastra pelo aplicativo
  
  Afim de cadastrar um cliente
  como um desenvolvedor
  gostaria de validar seu cadastro

  Scenario: Cliente cadastrou informaçao invalida
    Given  Cliente digitou informacao invalida
    When Cliente confirmar
    Then O cadastro não deve ser completado 

  Scenario Outline: Cliente cadastrou informacao valida
    Given Cliente digitou informacao valida 
    When Cliente confirmar 
    Then O cadastro deve ser completado
    
  Scenario Outline: Cliente nao cadastrou todas as informacoes
    Given Cliente preenche todos os campos necessarios
    When Cliente confirmar 
    Then O cadastro nao deve ser completado


    Examples:
      | var | increment | result |
      | 100 |         5 |    105 |
      |  99 |      1234 |   1333 |
      |  12 |         5 |     17 |
      | 