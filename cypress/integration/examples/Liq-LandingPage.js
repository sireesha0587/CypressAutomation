describe('LiquibaseTestSuite1.0', function()
 {
    //Test Case 01 - Assert Elements in Landingpage
    it('Assert Elements in Liquibase LandingPage', function() 

        {
    // Navigating the liquibase application
        cy.visit('https://hub-staging.liquibase.com/landing-page')
    // Asserting for Liquibase title
        cy.title().should('eq','Liquibase Hub')
    // Action Sign In
        cy.contains('Sign In').click()
    // Asserting for Signin
        cy.title().should('eq','Signin')
        //cy.get('.mat-button-wrapper').click() 
    //Entering credentials 
        //Username
        cy.xpath('//*[@id="signInFormUsername"]').last().type('sireeshaliq')
        //Password
        cy.xpath('//*[@id="signInFormPassword"]').last().type('Pdp1@siri')
        cy.xpath('//*[@name="signInSubmitButton"]').last().click()   
        
           
    })
 
// Second Test Case , as some reaon cypress unable to navigate to application,
// scripted the  error page.


    
})
