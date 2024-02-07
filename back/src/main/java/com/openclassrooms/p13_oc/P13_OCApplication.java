package com.openclassrooms.p13_oc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class P13_OCApplication {

	public static void main(String[] args) {
		SpringApplication.run(P13_OCApplication.class, args);
	}

}
