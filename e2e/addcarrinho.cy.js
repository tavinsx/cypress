///<reference types = 'cypress'/>
describe("add ao carrinho", () => {
    
    it('add ao carinho', () => {
        //ascessar a pagina
        cy.visit("https://www.saucedemo.com/v1/inventory.html")
        //apertar o botão de adicionar ao carrinho 
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        //verificar se foi pro carrinho
        cy.get('.fa-layers-counter')
        //ir na pagina do carrinho
        cy.visit('https://www.saucedemo.com/v1/cart.html')
        // cy.get('.cart_item')
        })

    it(' remover do carinho', () => {
        cy.visit("https://www.saucedemo.com/v1/inventory.html")
        //apertar o botão de adicionar ao carrinho 
        cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
        //verificar se foi pro carrinho
        cy.get('.fa-layers-counter')
        //ir na pagina do carrinho
        cy.visit('https://www.saucedemo.com/v1/cart.html')
        
        cy.get('.item_pricebar > .btn_secondary').click()
        cy.get('.btn_secondary').click()
        })

})