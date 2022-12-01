package com.request.services;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;

@SpringBootApplication
@OpenAPIDefinition
public class CustomerRequest {

    public static void main(String[] args) {
        SpringApplication.run(CustomerRequest.class, args);
    }
    
}
