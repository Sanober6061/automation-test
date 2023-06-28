export  class auto_test{

Name= '[data-qa="signup-name"]'
Email1= '[data-qa="signup-email"]'
button= '[data-qa="signup-button"]'
Gender= '#id_gender2'
Password= '[data-qa="password"]'
Day= '[data-qa="days"]'
Month= '[data-qa="months"]'
Year= '[data-qa="years"]'
partner= '#optin'

Signup(sname,email,pass,day,month,year)

{
    cy.get(this.Name).type(sname)
    cy.get(this.Email1).type(email);
    cy.get(this.button).click();
    cy.get (this.Gender).check();
    cy.get (this.Password).type(pass);
    cy.get(this.Day).select(day);
    cy.get(this.Month).select(month);
    cy.get(this.Year).select(year);
    cy.get(this.partner).check()
}




// Add information 

Firstname= '[data-qa="first_name"]'
Lastname= '[data-qa="last_name"]'
Company= '[data-qa="company"]'
Address= '[data-qa="address"]'
Address1= '[data-qa="address2"]'
Country= '[data-qa="country"]'
State='[data-qa="state"]'
City= '[data-qa="city"]'
Zipcode='[data-qa="zipcode"]'
Phone_no= '[data-qa="mobile_number"]'
Account= '[data-qa="create-account"]'
created='b'
Continue='[data-qa="continue-button"]'


AddSignup(fname,lname,compy,add1,add2,country,state,city,zip,no)
{
    cy.get(this.Firstname).type(fname)
    cy.get(this.Lastname).type(lname);
    cy.get(this.Company).type(compy);
    cy.get(this.Address).type(add1);
    cy.get(this.Address1).type(add2);
    cy.get(this.Country).select(country);
    cy.get(this.State).type(state);
    cy.get(this.City).type(city);
    cy.get(this.Zipcode).type(zip);
    cy.get(this.Phone_no).type(no);
    cy.get(this.Account).click();
    cy.get(this.created).should('be.visible')
    cy.get(this.Continue).click()

}

Name= '[data-qa="signup-name"]'
Email1= '[data-qa="signup-email"]'
Homepage='.shop-menu > .nav > :nth-child(1) > a'
loginpage='.shop-menu > .nav > :nth-child(4) > a'


alreadyemail(sname,email  )
{
cy.get(this.Homepage).click().should('be.visible')
cy.get(this.loginpage).click()
cy.get(this.Name).type(sname)
cy.get(this.Email1).type(email);
cy.get(this.button).click();
cy.get('.signup-form > form > p').should('be.visible')

}


//Login page
Homepage='.shop-menu > .nav > :nth-child(1) > a'
loginpage='.shop-menu > .nav > :nth-child(4) > a'
username= '[data-qa="login-email"]'
loginpass= '[data-qa="login-password"]'
loginbtn= '[data-qa="login-button"]'

Login(uname,lpass)
{
    cy.get(this.Homepage).click().should('be.visible')
    cy.get(this.loginpage).click()
    cy.get(this.username).type(uname)
    cy.get(this.loginpass).type(lpass)
    cy.get(this.loginbtn).click()

}






//Contact Form
Homepage=  '.shop-menu > .nav > :nth-child(1) > a'
contactbtn='.shop-menu > .nav > :nth-child(8) > a'
Name2 ='[data-qa="name"]'
Email= '[data-qa="email"]'
Subject= '[data-qa="subject"]'
Message= '[data-qa="message"]'
File= ':nth-child(6) > .form-control'
Submit='[data-qa="submit-button"]'
hmbtn='#form-section > .btn'


Contactform(name,email,sub,msg,cfile)
{

 cy.get(this.Homepage).click().should('be.visible')
 cy.get(this.contactbtn).click()
  cy.get('div.contact-form > .title').should('be.visible')
  cy.get(this.Name2).type(name)
  cy.get(this.Email).type(email);
  cy.get(this.Subject).type(sub);
  cy.get(this.Message).type(msg);
  cy.get(this.File).selectFile(cfile);
  cy.get(this.Submit).click();
  cy.get('.status').should('be.visible')
  cy.get(this.hmbtn).click();
}


  //Test cases

  Homepage=  '.shop-menu > .nav > :nth-child(1) > a'
  Testcase='.shop-menu > .nav > :nth-child(5) > a'
  testcases()
{
    cy.get(this.Homepage).click().should('be.visible')
    cy.get(this.Testcase).click()
    cy.get(this.Testcase).should('exist')

 
}


//Subscription Product page
 
Search = '#susbscribe_email'
Searchbtn='#subscribe > .fa'

Subscription(search,btn)
{
    cy.get('.single-widget > h2').should('be.visible')
    cy.get(this.Search).type(search)
    cy.get(this.Searchbtn).click().should('be.visible')

}

// product page

Homepage=  '.shop-menu > .nav > :nth-child(1) > a'
product= '.shop-menu > .nav > :nth-child(2) > a'
Allproduct= '.title'
abc= ':nth-child(4) > .product-image-wrapper > .choose > .nav > li > a'
productname= '.product-information > h2'
price= ':nth-child(5) > span'
stock='.product-information > :nth-child(6)'
brand= '.product-information > :nth-child(7)'
category='.product-information > :nth-child(8)'

Products()

{
    cy.get(this.Homepage).click().should('be.visible')
    cy.get(this.product).click()
    cy.get(this.Allproduct).should('be.visible')
    cy.get(this.abc).click()
    cy.get(this.productname).should('be.visible')
    cy.get(this.price).should('be.visible')
    cy.get(this.stock).should('be.visible')
    cy.get(this.brand).should('be.visible')
    cy.get(this.category).should('be.visible')

}

    

    //products add to cart
    productitem='.shop-menu > .nav > :nth-child(2) > a'

    item1=':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
    btn='.modal-footer > .btn'
    item2=':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn'
    cart='u'
    product_1='#product-1'
    product_2='#product-2'


addcart()
{
    cy.get(this.productitem).click()
    cy.get(this.item1).click()
    cy.get(this.btn).click()
    cy.get(this.item2).click()
    cy.get(this.cart).click()
    cy.get(this.product_1).should('exist')
    cy.get(this.product_2).should('exist')




}


//Register while checkout







Cartbtn= '.shop-menu > .nav > :nth-child(3) > a'
Checoutbtn= '.col-sm-6 > .btn'
Textarea= '.form-control'
Placeorder= ':nth-child(7) > .btn'
Cardname= '[data-qa="name-on-card"]'
Cardno= '[data-qa="card-number"]'
CVC= '[data-qa="cvc"]'
CMonth= '[data-qa="expiry-month"]'
Cyear='[data-qa="expiry-year"]'
Paybtn='[data-qa="pay-button"]'

 Checkout(area,cname,cno,cvc,cmonth,cyear)
 {
    cy.get(this.Cartbtn).click()
    cy.get(this.Checoutbtn).click()
    cy.get(this.Textarea).type(area)
    cy.get(this.Placeorder).click()
    cy.get(this.Cardname).type(cname)
    cy.get(this.Cardno).type(cno)
    cy.get(this.CVC).type(cvc)
    cy.get(this.CMonth).type(cmonth)
    cy.get(this.Cyear).type(cyear)
    cy.get(this.Paybtn).click()
    

 }

 //view product
brand='.brands_products > h2'
 products= '.shop-menu > .nav > :nth-child(2) > a'
 HM='.brands-name > .nav > :nth-child(2) > a'
 polo='.brands-name > .nav > :nth-child(1) > a'
Viewcart()
 {
    cy.get(this.products).click()
    cy.get(this.brand).should('be.visible')
    cy.get(this.HM).scrollIntoView().should('be.visible')
    cy.wait(1000)
    cy.get(this.HM).click().should('be.visible')
    cy.wait(1000)
    cy.get(this.polo).click().should('be.visible')
    cy.wait(1000)


 }

 products= '.shop-menu > .nav > :nth-child(2) > a'
 searchbtn='#search_product'
 sbtn='#submit_search'
 addproduct=':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn'
 cart='u'
 Allproduct= '.title'
 

//verify cart
 verifycart(btn)
 {
    cy.get(this.products).click()
    cy.get(this.Allproduct).should('be.visible')
    cy.get(this.searchbtn).should('be.visible')
    cy.get(this.searchbtn).type(btn)
    cy.get(this.sbtn).click()
    cy.get(this.addproduct).click()
    cy.get(this.cart).click()

 }

 //Add review
 products= '.shop-menu > .nav > :nth-child(2) > a'
 Allproduct= '.title'
 viewprod =':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a'
 name='#name' 
 email='#email'
 review='#review'  
 reviewbtn= '#button-review'

 addreview(rname,remail,re)
 {
    cy.get(this.products).click()
    cy.get(this.Allproduct).should('be.visible')
    cy.get(this.viewprod).click()
    cy.get(this.name).type(rname)
    cy.get(this.email).type(remail)
    cy.get(this.review).type(re)
    cy.get(this.reviewbtn).click()


 }
 //Delete exisitng one
 Delete= '.shop-menu > .nav > :nth-child(5) > a'
 created='b'

 Continue='[data-qa="continue-button"]'

 Deteteaccount()
 {
    cy.get(this.Delete).click()
    cy.get(this.created).should('be.visible')
    cy.get(this.Continue).click()

 }
//Download voice

invoice= '.col-sm-9 > .btn-default'
continue1='[data-qa="continue-button"]'
Download()
{
 cy.get(this.invoice).click()
 cy.get(this.continue1).click()

}
//scoll up

Homepage=  '.shop-menu > .nav > :nth-child(1) > a'
scroll= '#scrollUp > .fa'
image='img'
ScrollUp()
{
    cy.get(this.Homepage).click().should('be.visible')
    cy.scrollTo('bottom',{ duration: 2000 })
    cy.get('.single-widget > h2').should('be.visible')
    cy.get(this.scroll).click()
    cy.get(this.image).should('exist')
}



//scroll down
Homepage=  '.shop-menu > .nav > :nth-child(1) > a'
image='img'



scrolldown()
{
    cy.get(this.Homepage).click().should('be.visible')
    cy.scrollTo('bottom',{ duration: 2000 })
    cy.wait(2000)
    cy.get('.single-widget > h2').should('be.visible')
    cy.scrollTo('top',{ duration: 2000 })
    cy.get(this.image).should('exist')


}
//Recommmnended items
item='.active > :nth-child(1) > .product-image-wrapper > .single-products > .productinfo > .btn'
view='u'
Recommended()
{

cy.scrollTo('bottom',{ duration: 2000 })
cy.get('.recommended_items > .title').should('be.visible')
cy.get(this.item).click()
cy.get(this.view).click() 

}


}