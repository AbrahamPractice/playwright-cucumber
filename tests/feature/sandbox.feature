Feature: just a playground for cucumber testing

Scenario: Navigate to Amazon through Google serch
    Given the user is on the Google page
    When the user input the word Amazon
    When the user click the Amazon result link
    Then the user should be navigated to the Amazon page
