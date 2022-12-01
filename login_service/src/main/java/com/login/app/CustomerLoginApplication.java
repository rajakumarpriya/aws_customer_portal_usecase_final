package com.login.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.login.app.repository.RoleRepository;

@SpringBootApplication
public class CustomerLoginApplication {
	
	@Autowired
	private RoleRepository rolerep;

	public static void main(String[] args) {
		SpringApplication.run(CustomerLoginApplication.class, args);
	}

//	public void run(String... args) throws Exception {
//		
//		//System.out.println();
//		System.out.println(rolerep.findByCount());
////		service.saveMovie(new Movie("Superman", "Miley", 4.4));
////		service.saveMovie(new Movie("Spiderman", "Clark", 4.4));
////		service.saveMovie(new Movie("Ironman", "Tom", 4.4));
////		service.saveMovie(new Movie("Antman", "John", 4.4));
////		service.saveMovie(new Movie("Heman", "Mike", 4.4));
//	}
}
