package com.springboot.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
@SpringBootApplication
@EnableAutoConfiguration
@EntityScan(basePackages = {"com.springboot.app.Topic","com.springboot.app.model","com.springboot.app.model.User"})
public class ApiApp {

	public static void main(String[] args) {
		SpringApplication.run(ApiApp.class, args);

	}
	public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/Users").allowedOrigins("http://localhost:5000");
            }
        };
    }

}
