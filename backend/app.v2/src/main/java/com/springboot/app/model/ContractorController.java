package com.springboot.app.model;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class ContractorController {
	
	@Autowired
	private ContractorService ContractorService;
	
	@RequestMapping("/Contractors")
	public List<Contractor> getAllContractosr() {
		return   ContractorService.getAllContractors();
		}
	@RequestMapping("/Contractors/{id}")
	public Optional<Contractor> getUser(@PathVariable Integer id) {
		return (Optional<Contractor>) ContractorService.getContractor(id);
		
	}
	@RequestMapping(method=RequestMethod.POST,value="/register/Contractor")
	public void addUser(@RequestBody Contractor con) {
		ContractorService.addContractor(con);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/Contractors/{id}")
	public void updateUser(@RequestBody Contractor con,@PathVariable String id) {
		ContractorService.updateContractor(id,con);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/Contractors/{id}")
	public void deletUser(@PathVariable int id) {
		ContractorService.deleteContractor(id);
		
	}

}
