# CypressAutomation
1)	Reponame: sireesha0587/CypressAutomation
2)	TestSuite Name: LiquibaseTestSuite1.0
3)	Naming Convention: Liq-PageName.Spec
1.	Liq–LandingPage.spec.js
4)	Test Case 01 - Assert Elements in Landing page
5)	Test case 02 - Assert elements in the Liquibase error page.
6)  cypress.json -- Updated this file to allow cross origin. (Refer to point 07)

Challenges/Observations: 
7)	By default, Cypress does not support cross origin URL, meaning if the URL accessed before and after page load are different Cypress would throw an error. In the interest of time, to resolve the issue added below key in the cypress.json
"chromeWebSecurity": false,
8)	Since the root elements properties in the SignIn page are set to hidden, could not locate username and password with standard locators. (CSS/ID/CLASS). I have to install xpath, since cypress does not support by default using below commands.
npm install -D cypress-xpath to install xpath
Add required tag in ‘require('cypress-xpath')’ in Support -> index.js file.
9)	Some reason cypress test runner did not redirect to expected URL after signin, but when I do manually it’s working fine. I may have to work with developer what are all the instances this particular page redirected and reasons behind.
https://hub-staging.auth.us-east-1.amazoncognito.com/error
