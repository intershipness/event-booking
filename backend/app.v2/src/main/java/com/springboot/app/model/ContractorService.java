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
	public Object getContractor(Integer id) {
		return ContractorRepository.findById(id);
	
	}
	public void addContractor(Contractor con) {
		ContractorRepository.save(con);
		
	}
	public void updateContractor(String id,Contractor con) {
		ContractorRepository.save(con);
}
	public void deleteContractor(int id) {
		
		//topics.removeIf(T->T.getId().equals(id));
		ContractorRepository.deleteById(id);
	}
}
