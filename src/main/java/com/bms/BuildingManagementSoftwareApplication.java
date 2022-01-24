package com.bms;

import nz.net.ultraq.thymeleaf.LayoutDialect;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BuildingManagementSoftwareApplication {

	public static void main(String[] args) {
		SpringApplication.run(BuildingManagementSoftwareApplication.class, args);
	}

	@Bean
	public LayoutDialect layoutDialect() {
		return new LayoutDialect();
	}

}
