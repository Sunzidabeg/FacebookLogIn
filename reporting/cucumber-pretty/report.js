$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Sunzida/IdeaProjects/facebook/src/main/java/features/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#The Scenario Outline keyword can be used to run the same Scenario multiple times,"
    },
    {
      "line": 9,
      "value": "# with different combinations of values."
    },
    {
      "line": 11,
      "value": "# The keyword Scenario Template is a synonym of the keyword Scenario Outline."
    }
  ],
  "line": 15,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "User has to be in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Try log in by invalid \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Unable to log in",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 25,
      "id": "login-feature;login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "abc@gmail.com",
        "1436666"
      ],
      "line": 27,
      "id": "login-feature;login-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login-feature;login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User has to be in log in page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Try log in by invalid \"abc@gmail.com\" and \"1436666\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Unable to log in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.user_has_to_be_in_log_in_page()"
});
formatter.result({
  "duration": 15510743800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@gmail.com",
      "offset": 23
    },
    {
      "val": "1436666",
      "offset": 43
    }
  ],
  "location": "LoginTest.try_log_in_by_invalid_and(String,String)"
});
formatter.result({
  "duration": 3182900,
  "status": "passed"
});
formatter.match({
  "location": "LoginTest.unable_to_log_in()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
});