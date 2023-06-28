/// <reference types="cypress" />

describe('Cenário de Login e Navegação', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test=username]').type('standard_user');
      cy.get('[data-test=password]').type('secret_sauce');
      cy.get('[data-test=login-button]').click();
    });
  
    it('Navegação', () => {
      cy.get('.shopping_cart_link').click();
      cy.get('#react-burger-menu-btn').click();
      cy.get('#inventory_sidebar_link').click();
    });

    it('Verificação dos elementos de navegação', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click();
        cy.get('[data-test=back-to-products]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test=checkout]').click();
        cy.get('[data-test=cancel]').click();
        cy.get('[data-test=continue-shopping]').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();

      });

});


describe('Cenário de Adição de Produtos ao carrinho', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test=username]').type('standard_user');
        cy.get('[data-test=password]').type('secret_sauce');
        cy.get('[data-test=login-button]').click();
      });

        it('Adição e remover itens', () => {
            cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
            cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
            cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click();
            cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click();
            cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click();
            cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

            cy.get('.shopping_cart_link').click();
            cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click();

  });

});

describe('Cenário de Finalização de compra', () => {
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test=username]').type('standard_user');
      cy.get('[data-test=password]').type('secret_sauce');
      cy.get('[data-test=login-button]').click();
    });

    it('Adição dos itens no carrinho e finalização da compra', () => {
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click();
        cy.get('[data-test=add-to-cart-sauce-labs-bike-light]').click();
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test=checkout]').click();

        cy.get('[data-test=firstName]').type('Teste de');
        cy.get('[data-test=lastName]').type('Compra');
        cy.get('[data-test=postalCode]').type('85660-000');
        cy.get('[data-test=continue]').click();

        cy.get('[data-test=finish]').click();
        cy.get('[data-test=back-to-products]').click();

    });

});