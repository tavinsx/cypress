
///<reference types = 'cypress'/>
describe('login', () =>{

    // it('login com sucesso', () =>{
        
    // //     //dados
    // //     //acessar a aplicação
    //  cy.visit('https://www.saucedemo.com/v1/')
    //     //preencher credenciais
    //  cy.get("#user-name").type('performance_glitch_user')
    //  cy.get('#password').type("secret_sauce")
    //     //usuarios negados: locked_out_user, 
        
    //     //quando
    //     //clicar para entrar
    //  cy.get('#login-button').click()
    //     cy.url().should('promary page', 'https://www.saucedemo.com/v1/inventory.html')
       
        // })
    beforeEach('ascessar aplicação', () => {
        cy.visit('https://www.saucedemo.com/v1/')
    })
        
        //veridficar quando a senha esta errada
    it('senha invalida', () => {
        // cy.visit('https://www.saucedemo.com/v1/')
        cy.get("#user-name").type('performance_glitch_user')
        cy.get('#password').type("123")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', "Epic sadface: Username and password do not match any user in this service")
        })
        //verificar quando a senha esta vazia    
    it('senha vazia', () =>{
        // cy.visit('https://www.saucedemo.com/v1/')
        cy.get("#user-name").type('performance_glitch_user')
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', "Epic sadface: Password is required")
    
        })
        //verificar o email invalido
    it("email invalido", ()=>{
        // cy.visit('https://www.saucedemo.com/v1/')
        cy.get("#user-name").type('asd@123')
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', "Epic sadface: Username and password do not match any user in this service")
        })        
        //verificar quando o email naão esta preenchido 
    it("email vazio",()=>{
        // cy.visit('https://www.saucedemo.com/v1/')
        
        cy.get('#password').type("secret_sauce")
        cy.get('#login-button').click()
        cy.get('[data-test="error"]').should('have.text', "Epic sadface: Username is required")
        })
        // verificar quando os ambos estao vazios
        it("ambos campos vazios",()=>{
            // cy.visit('https://www.saucedemo.com/v1/')
            cy.get('#login-button').click()
            cy.get('[data-test="error"]').should('have.text', "Epic sadface: Username is required")
        })
})



