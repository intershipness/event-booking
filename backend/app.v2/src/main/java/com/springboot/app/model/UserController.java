package com.springboot.app.model;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.app.Topic.Topic;
import com.springboot.app.Topic.TopicService;

@RestController
public class UserController {
	@Autowired
	private UserService Userservice;
	
	@RequestMapping("/Users")
	public List<User> getAllUsers() {
		return   Userservice.getAllUsers();
		}
	@RequestMapping("/Users/{id}")
	public Optional<User> getUser(@PathVariable Integer id) {
		return Userservice.getUser(id);
		
	}
	@RequestMapping(method=RequestMethod.POST,value="/Users")
	public void addUser(@RequestBody User user) {
		Userservice.addUser(user);
	}
	@RequestMapping(method=RequestMethod.PUT,value="/Users/{id}")
	public void updateUser(@RequestBody User user,@PathVariable String id) {
		Userservice.updateUser(id,user);
	}
	@RequestMapping(method=RequestMethod.DELETE,value="/Users/{id}")
	public void deletUser(@PathVariable int id) {
		Userservice.deleteUser(id);
		
	}
}
