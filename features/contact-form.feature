Feature:  Contact form
  Scenario: Checking the email validation for the contact form
    Given I open the Main page
    When I click on contact menu button on the Main page
    Then Contact page is loaded
    When Contact form loaded on Contact page
    And I fill "first-name" field with "John" value on Contact page
    And I fill "last-name" field with "Doe" value on Contact page
    And I fill "company" field with "Acme" value on Contact page
    And I fill "email-address" field with "Test123$.gmail.com" value on Contact page
    And I fill "message" field with "XYZ" value on Contact page
    And I click submit button on Contact page
    Then Validation error appear for "email-address" field with "Please enter a valid email address" message on Contact page

