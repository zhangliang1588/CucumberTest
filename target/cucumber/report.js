$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Demo",
  "description": "",
  "id": "test-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test",
  "description": "",
  "id": "test-demo;test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I test \u003cstring\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I check true",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "test-demo;test;",
  "rows": [
    {
      "cells": [
        "string"
      ],
      "line": 7,
      "id": "test-demo;test;;1"
    },
    {
      "cells": [
        "old"
      ],
      "line": 8,
      "id": "test-demo;test;;2"
    },
    {
      "cells": [
        "new"
      ],
      "line": 9,
      "id": "test-demo;test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "Test",
  "description": "",
  "id": "test-demo;test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I test old",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I check true",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "old",
      "offset": 7
    }
  ],
  "location": "Glue.i_test(String)"
});
formatter.result({
  "duration": 234010529,
  "status": "passed"
});
formatter.match({
  "location": "Glue.iCheckTrue()"
});
formatter.result({
  "duration": 2910268,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Test",
  "description": "",
  "id": "test-demo;test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I test new",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I check true",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "new",
      "offset": 7
    }
  ],
  "location": "Glue.i_test(String)"
});
formatter.result({
  "duration": 618924,
  "status": "passed"
});
formatter.match({
  "location": "Glue.iCheckTrue()"
});
formatter.result({
  "duration": 53894,
  "status": "passed"
});
});