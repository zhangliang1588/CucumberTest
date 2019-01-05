$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Demo",
  "description": "",
  "id": "test-demo",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Test Debug",
  "description": "",
  "id": "test-demo;test-debug",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@debug"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I test \u003cstring\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I check true",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "test-demo;test-debug;",
  "rows": [
    {
      "cells": [
        "string"
      ],
      "line": 23,
      "id": "test-demo;test-debug;;1"
    },
    {
      "cells": [
        "old"
      ],
      "line": 24,
      "id": "test-demo;test-debug;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Test Debug",
  "description": "",
  "id": "test-demo;test-debug;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@debug"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I test old",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
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
  "duration": 427657127,
  "status": "passed"
});
formatter.match({
  "location": "Glue.iCheckTrue()"
});
formatter.result({
  "duration": 3119000,
  "status": "passed"
});
});