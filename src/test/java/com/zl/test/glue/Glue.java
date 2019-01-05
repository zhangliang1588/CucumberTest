package com.zl.test.glue;

import com.zl.test.code.StaticClass;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class Glue {
    @Then("^I test (.*)$")
    public void i_test(String string) throws Throwable {
        System.out.println();
        System.out.println("Old StaticClass.string:" + StaticClass.getString());
        StaticClass.setString(string);
        System.out.println("New StaticClass.string:" + StaticClass.getString());
    }

    @Then("^I check true$")
    public void iCheckTrue() throws Throwable {
        Assert.assertTrue("It's not true",true);
    }
}
