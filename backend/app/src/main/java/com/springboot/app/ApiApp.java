package com.springboot.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
@SpringBootApplication
@EnableConfigurationProperties
@EntityScan(basePackages = {"com.springboot.app.Topic"})
public class ApiApp {

	public static void main(String[] args) {
		SpringApplication.run(ApiApp.class, args);

	}

}
