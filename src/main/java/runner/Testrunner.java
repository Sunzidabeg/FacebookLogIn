package runner;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions(features = {"C:\\Users\\Sunzida\\IdeaProjects\\facebook\\src\\main\\java\\features\\login.feature"} ,
        glue = "steps",
        plugin = {"pretty","json:reporting/cucumber.json","html:reporting/cucumber-pretty","junit:reporting/junit_xml/cucumber.xml"},

        strict = false,
        monochrome = true,
        //tags = {"@search"}, //@SmokeTest, @FunctionalTest, @DocString
        dryRun =false)
public class Testrunner {
}
