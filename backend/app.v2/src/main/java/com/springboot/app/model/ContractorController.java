package com.springboot.app.model;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	public Contractor getUser(@PathVariable Integer id) {
		return  ContractorService.getContractor(id);
		
		
	}
	@RequestMapping("/Contractor/{domeniu}")
	public List<Contractor> getAllContractosrd(@PathVariable String domeniu) {
		return   ContractorService.getAllContractorsDomeniu(domeniu);
		}
	@RequestMapping(method=RequestMethod.POST,value="/register/Contractor")
	public void addUser(@RequestBody Contractor con ,String email,HttpServletResponse response) throws IOException {
		 Contractor con1 = ContractorService.findByEmail(email);
		 
		  if(con1 ==null) {
			  ContractorService.addContractor(con);
			  ResponseEntity.ok().body("Contractor add-ed in the database " );
			//  return "User not found, new User add-ed";
		  }else {
		  response.sendError(HttpServletResponse.SC_BAD_REQUEST,"User is allready in databaze");
			 // return "User is in db";
		  }

	}
	
	@RequestMapping("/Contractor/email")
	public Contractor getContractor_email(@RequestParam String email) {
	Contractor user =   ContractorService.getContractoremail(email);
		return  user;
		
	}
	@RequestMapping(method=RequestMethod.PUT,value="/Contractors/{id}")
	public void updateUser(@RequestBody Contractor con,@PathVariable Integer id) {
		ContractorService.updateContractor(id,con);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/Contractors/{id}")
	public void deletUser(@PathVariable int id) {
		ContractorService.deleteContractor(id);
		
	}

}
