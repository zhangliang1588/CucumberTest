Feature: Test Demo

  Scenario Outline: Test
    Then I test <string>
    Then I check true
    Examples:
      | string |
      |  old    |
      |  new    |

  Scenario Outline: Test1
    Then I test <string>
    Then I check true
    Examples:
      | string |
      |  old    |

    @debug
  Scenario Outline: Test Debug
    Then I test <string>
    Then I check true
    Examples:
      | string |
      |  old    |