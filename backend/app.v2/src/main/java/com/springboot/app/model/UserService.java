package com.springboot.app.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService {
	@Autowired
	private UserRepository UserRepository;
	

	public List<User> getAllUsers(){
		List<User>users = new ArrayList<>();
		UserRepository.findAll().forEach(users::add);
		return users;
	}
	public Optional<User>getUser(Integer id) {
		return UserRepository.findById(id);
	
	}
	public void addUser(User user) {
		UserRepository.save(user);
		
	}
	public void updateUser(String id, User user) {
		UserRepository.save(user);
}
	public void deleteUser(int id) {
		
		//topics.removeIf(T->T.getId().equals(id));
		UserRepository.deleteById(id);
	}
public User findByEmail(String email) {
		
		return UserRepository.findByEmail(email);
	}

}
