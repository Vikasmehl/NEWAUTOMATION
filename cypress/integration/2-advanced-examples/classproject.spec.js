//referencemtypes="cypress" />
describe('hooks',function()
{
before(function () {
cy.log('open website')
cy.visit('https://automationteststore.com/');
cy.url().should('eq','https://automationteststore.com/')
})


it('Add to cart', function ()
{
    
    cy.xpath('//*[@id="customer_menu_top"]').click()
    cy.xpath('//*[@id="loginFrm_loginname"]').type('vikas2001')
    cy.xpath('//*[@id="loginFrm_password"]').type('vikas2001')
    cy.xpath('//*[@id="loginFrm"]/fieldset/button').click()
    
    // Assertion to verify the title

    cy.title().should('eq','My Account')

    // Assertion to verify landed on correct page after login 
     
    cy.get('li').should('contain','Account Dashboard')
    cy.get('h1').should('contain','My Account').and('contain','vikas')


    //Add product in cart

    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[5]/a').click()

    cy.get('div').should('contain','Fragrance')
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/ul/li[1]/div/a').click()
    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/div[2]/div[2]/div[2]/a/img').click()

    cy.get('h1').should('contain','Pour Homme Eau de Toilette')
    cy.xpath('//*[@id="product_quantity"]').clear()
    cy.xpath('//*[@id="product_quantity"]').type('4')

    cy.xpath('//*[@id="product"]/fieldset/div[5]/ul/li/a').click()
    cy.xpath('//*[@id="cart_checkout1"]').click()
    
    
    //Assertion for order summary


    cy.get('h1').should('contain','Checkout Confirmation')
    cy.get('h2').should('contain','Order Summary')

    cy.xpath('//*[@id="checkout_btn"]').click()

    //assertion for order confirmation

    cy.get('h1').should('contain',' Your Order Has Been Processed!')
    cy.get('div').should('contain','Thank you for shopping with us!')

    cy.xpath('//*[@id="maincontainer"]/div/div/div/div/section/p[3]/a').click()

    //Assertion for invoice (order details)

    cy.get('div').should('contain','Order ID')
    cy.get('div').should('contain','Shipping Address')
    cy.get('div').should('contain','Payment Address')
    cy.xpath('//*[@id="categorymenu"]/nav/ul/li[1]/a').click()
    cy.xpath('//*[@id="customer_menu_top"]/li/a').click()
    cy.xpath('//*[@id="maincontainer"]/div/div[2]/div[1]/div/ul/li[10]/a').click()
    
})
})
