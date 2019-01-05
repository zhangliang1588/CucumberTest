package com.zl.test.code;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"Features/"},
        format = {"pretty","html:target/cucumber","json:target/cucumber.json"},
        glue = {"com.zl.test.glue"},
        tags = "@debug"
)
public class RunCukeTest {
}
