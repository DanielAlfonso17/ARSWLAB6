package edu.escuelaing.arsw.tallerReact;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class WebSiteController {
	@Resource
	private HttpServletRequest request;
	
	public static void main(String[] args) {
		SpringApplication.run(WebSiteController.class, args);
	}

	@GetMapping("/status")
	public String status() {
		String name = (String) request.getSession().getAttribute("name");
		sessionManagment();
		System.out.println(SharedMemory.getInstance());
//		System.out.println(SharedMemory.getInstance().toString());
		return "{\"status\":\"Greetings from Spring Boot. " 
				+ name
				+ java.time.LocalDate.now() + ", "
				+ java.time.LocalTime.now() + ". " + "The server is Runnig!\"}";
	}
	
	@GetMapping("/setname")
	public String setName(@RequestParam(value = "name", defaultValue = "Anonimo") String name ) {
		request.getSession().setAttribute("name", name);
		SharedMemory.getInstance().add(name);
		return String.format("Hello %s!", name);
	}
	
	public void sessionManagment() {
		System.out.println(request.getSession(true).getId());
	}
}
