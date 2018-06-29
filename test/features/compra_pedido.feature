Feature:Cliente confirma compra
  
  Scenario: Cliente seleciona pelo menos um produto
    Given  Cliente adiciona pelo menos um produto ao seu pedido
    When  Cliente clica no botão Comprar
    Then  O cliente irá para tela de pagamento
    
      
  Scenario: Cliente não seleciona nenhum produto
    Given  Cliente não adiciona nenhum produto ao seu pedido
    When  Cliente clica no botão Comprar
    Then  O cliente é informado que precisa selecionar pelo menos um produto