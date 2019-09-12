package com.springboot.app.model;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface ContractorRepository extends CrudRepository<Contractor, Integer> {

	Contractor findByEmail(String email);
	Contractor findByid(Integer Id);
	List<Contractor>findBydomeniu(String domeniu);
	List<Contractor>findBystilmuzica(String stilmuzica);

	
}
