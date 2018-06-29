Feature:Cliente avalia sua compra
  
  Scenario: Cliente faz uma avaliação de sua compra
    Given  Cliente realiza o pagamento
    When  Cliente seleciona de uma a cinco estrelas
    Then A avaliação é realizada

