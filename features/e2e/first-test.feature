Feature: Busquedas de comandos en Angular

    @test
    Scenario: Busqueda exitosa de un cli comands en la pagina oficial de Angular
    Given Usuario ingresa a la url "https://angular.io" 
    When Ingresa el comando "ng test" en el search del home
    And Busca hasta seleccionar la opcion "ng test" 
    Then Verifica que el titulo sea igual a la opcion que selecciono