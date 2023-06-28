///<reference types="cypress"/>

import {auto_test} from  "./pages/auto.js"
const autotest = new auto_test ()
beforeEach(() => {
  cy.visit ('https://www.automationexercise.com')

  })

 //With  email  
describe('signup', function(){

  it('Signup with already exist', function(){
    autotest.alreadyemail('Sanober','sanober222@gmail.com')
      cy.wait(2000)
    
   })


it('Signup with new account', function(){
  cy.get('.shop-menu > .nav > :nth-child(1) > a').click().should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    autotest.Signup('Sanober','areeba@gmail.com', 'Sanober123', '14','October','1998' )
    autotest.AddSignup('Sanober', 'Rafique','Invozone', 'LAHORE', 'johar town', 'United States','punjab', 'Ahemdpur','63100', '0384082489' )
    cy.wait(2000)
    autotest.Deteteaccount()

  
 })

 

})
 //login pass
describe('login page',function(){
 
  it('login is correct', function(){
  
  autotest.Login('sanober222@gmail.com','Sanober123')
  
 })

  it('login is not correct', function(){
    
  autotest.Login('admin@gmail.com', 'admin')  

 })

 

})
 //contact us form

it ('contact form', function(){
     
     autotest.Contactform('Sanober Rafique', 'sanoberrafique7@gmail.com','Late order received','This is a complain about late order received from my side','package.json')
     
 })

 //
  //Test Cases page
  describe ('Test Cases page', function(){
    it ('test case', function(){
      autotest.testcases()
    })
    })
   


  //product page 
  describe('Product functionality', function(){
       it('Product page', function(){
        autotest.Products()
  })

 //search product page 
      it('Search Product', function(){
       autotest.verifycart('shirt')
  })
})
  
  //subscription page
   describe ('subscription', function(){
       it('subscription home page', function(){
      cy.get('.shop-menu > .nav > :nth-child(1) > a').click().should('be.visible')
       cy.scrollTo('bottom',{ duration: 2000 })
       autotest.Subscription('snobernober1@gmail.com')

       })

      it('subscription card page',function (){
        cy.get('.shop-menu > .nav > :nth-child(1) > a').click().should('be.visible')
        cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
        autotest.Subscription('snobernober1@gmail.com')
      })
})
// product add to cart
describe('Product add to cart', function(){
      it('Product add to cart detail view', function(){
       autotest.addcart()
        cy.wait(4000)  
      })
      it('Product quantity to cart', function(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('#quantity').clear().type('4')
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
        cy.wait(2000) 

})

})


describe('checkout',function(){
  // Register while Checkout
it('Regster while Checkout ', function(){

  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').click()
  cy.get('.col-sm-6 > .btn').click()
  cy.get('.modal-body > :nth-child(2) > a > u').click()
  autotest.Signup('Sanober','sanoberreafique@gmail.com', 'Sanober123', '14','October','1998' )
  autotest.AddSignup('Sanober', 'Rafique','Invozone', 'LAHORE', 'johar town', 'United States','punjab', 'Ahemdpur','63100', '0384082489' )
  autotest.Checkout('Try to place order before eid','Sanober Rafique', '0214754659753', '100', '08', '2024')
  autotest.Deteteaccount()
})
// Register before Checkout
it('Regster before Checkout ', function(){
  cy.get('.shop-menu > .nav > :nth-child(1) > a').click().should('be.visible')
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  autotest.Signup('Sumbal','sumbal112@gmail.com', 'Sanober123', '14','October','1998' )
  autotest.AddSignup('Sanober', 'Rafique','Invozone', 'LAHORE', 'johar town', 'United States','punjab', 'Ahemdpur','63100', '0384082489' )
  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').click()
  cy.get('.col-sm-6 > .btn').click()
  autotest.Checkout('Try to place order before eid','Sanober Rafique', '0214754659753', '100', '08', '2024')
  autotest.Deteteaccount()





})
it.only('Login before checkout', function(){

  autotest.Login('sanober222@gmail.com','Sanober123')
  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').click()
  cy.get('.col-sm-6 > .btn').click()
  autotest.Checkout('Try to place order before eid','Sanober Rafique', '0214754659753', '100', '08', '2024')




})



})



//Remove cart from product

it('Product remove from cart', function(){
  cy.get('.shop-menu > .nav > :nth-child(1) > a').click().should('be.visible')
  cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
  cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
  cy.get('#quantity').type('4')
  cy.get(':nth-child(5) > .btn').click()
  cy.get('u').click()
  cy.get('.cart_quantity_delete > .fa').click()
  cy.get('#empty_cart > .text-center').click().should('be.visible')
  cy.wait(2000) 

})

//Verify Category
it('Verify Category', function(){
  cy.get(':nth-child(1) > .panel-heading > .panel-title > a').click()
  cy.get('#Women > .panel-body > ul > :nth-child(1) > a').click().should('be.visible')
  cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click().should('be.visible')
  cy.get('#Men > .panel-body > ul > :nth-child(2) > a').click().should('be.visible')
  cy.wait(4000)
})


//View and cart brand products
it('viewc cart', function(){

  autotest.Viewcart()

})

//verify cart
it('Verify cart', function(){

  autotest.verifycart('shirts')
  cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
  autotest.Login('sanober@gmail.com','Sanober123')
  cy.get('.shop-menu > .nav > :nth-child(3) > a').click()



})
//Add review
it('add review', function(){

  autotest.addreview('Noor','noor1@gmail.com','Your product is good')

})

//recommended items

it('Recommended Item', function(){
  
 autotest.Recommended()

})





//Download inovices

it.only('download invoices', function(){
  cy.get('.features_items > :nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
  cy.get('u').click()
  cy.get('.col-sm-6 > .btn').click()
  cy.get('.modal-body > :nth-child(2) > a > u').click()
  autotest.Signup('Sanober','rafi@gmail.com', 'Sanober123', '14','October','1998' )
  autotest.AddSignup('Sanober', 'Rafique','Invozone', 'LAHORE', 'johar town', 'United States','punjab', 'Ahemdpur','63100', '0384082489' )
  autotest.Checkout('Try to place order before eid worker','Sanober Rafique', '0214754659753', '100', '08', '2024')
  cy.get('.col-sm-9 > .btn-default').click()
  cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

  })

//Verify scroll up by arrow button

describe('scroll functionality',function(){

  it('verify scroll up', function(){

    autotest.ScrollUp()
    
    })

 // Verify scroll down   
 it('verify scroll down', function(){

  autotest.scrolldown()
  
  })
})

