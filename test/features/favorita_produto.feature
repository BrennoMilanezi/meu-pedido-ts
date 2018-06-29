Feature: Cliente favorita produto

  Scenario: Cliente marca um pedido como favorito
    Given  Cliente adiciona produtos ao seu pedido
    When Cliente clicar em favoritar
    Then O pedido é adicionado ao seus produtos favoritos 

  Scenario Outline: Cliente marca um pedido como favorito sem ter adicionado produto
    Given Cliente não adicionou nenhum produto ao pedido 
    When cliente clicar em favoritar  
    Then É informado que o pedido não possui nenhum produto
