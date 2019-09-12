package com.springboot.app.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class ContractorService {
	@Autowired
	private ContractorRepository ContractorRepository;
	

	public List<Contractor> getAllContractors(){
		List<Contractor>con = new ArrayList<>();
		ContractorRepository.findAll().forEach(con::add);
		return con;
	}
	public List<Contractor> getAllContractorsDomeniu(String domeniu){
		List<Contractor>con = new ArrayList<>();
		((Iterable<Contractor>) ContractorRepository.findBydomeniu(domeniu)).forEach(con::add);
		return con;
	}
	public List<Contractor> getAllContractorsstill(String stillmuzica){
		List<Contractor>con = new ArrayList<>();
		((Iterable<Contractor>) ContractorRepository.findBystilmuzica(stillmuzica)).forEach(con::add);
		return con;
	}
	public Contractor getContractor(Integer id) {
		return ContractorRepository.findByid(id);
	
	}
	public void addContractor(Contractor con) {
		ContractorRepository.save(con);
		
	}
	public void updateContractor(Integer id,Contractor con) {
		ContractorRepository.save(con);
}
	public void deleteContractor(int id) {
		
		//topics.removeIf(T->T.getId().equals(id));
		ContractorRepository.deleteById(id);
	}
	public Contractor getContractoremail(String email) {
		return (Contractor) ContractorRepository.findByEmail(email);
	
	}
public Contractor findByEmail(String email) {
		
		return (Contractor) ContractorRepository.findByEmail(email);
	}

}


