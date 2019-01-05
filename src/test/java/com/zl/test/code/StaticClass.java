package com.zl.test.code;

public class StaticClass {
    private static String string = "hello";

    public static String getString(){
        return string;
    }

    public static void setString(String newString){
        string = newString;
    }
}
