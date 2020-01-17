package steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {

    @Given("^User has to be in log in page$")
    public void user_has_to_be_in_log_in_page()  {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\Sunzida\\IdeaProjects\\facebook\\driver\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.facebook.com/");
        driver.manage().window().maximize();
    }

    @When("^Try log in by invalid \"([^\"]*)\" and \"([^\"]*)\"$")
    public void try_log_in_by_invalid_and(String arg1, String arg2)  {
        System.out.println("It works");
    }

    @Then("^Unable to log in$")
    public void unable_to_log_in()  {
        System.out.println("It works too");
    }


}
