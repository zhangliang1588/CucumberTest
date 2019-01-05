Feature: Test Demo

  Scenario Outline: Test
    Then I test <string>
    Then I check true
    Examples:
      | string |
      |  old    |
      |  new    |
