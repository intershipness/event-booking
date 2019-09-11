package com.springboot.app.model;

import java.util.List;
import java.util.Optional;
import java.util.Base64;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.security.Principal;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
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
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	


	
	
//	@RequestMapping("/login" )
//    public boolean login( @RequestBody User user) {
//        return
//          user.getEmail().equals("email") && user.getPassword().equals("password");
//    }
//	@RequestMapping("/Contractor/login" )
//    public boolean login( @RequestBody Contractor Contractor) {
//        return
//        		Contractor.getEmail().equals("email") && Contractor.getPassword().equals("password");
//    }
	 @RequestMapping("/User")
	    public Principal user(HttpServletRequest request) {
	        String authToken = request.getHeader("Authorization")
	          .substring("Basic".length()).trim();
	        return () ->  new String(Base64.getDecoder() .decode(authToken)).split(":")[0];
	    }
	@RequestMapping("/Users/{id}")
	public Optional<User> getUser(@PathVariable Integer id) {
		return Userservice.getUser(id);
		
	}
	@RequestMapping(method=RequestMethod.POST,value="/register/User")
	public void addUser(@RequestBody User user,String email,HttpServletResponse response) throws IOException
	{
		  User user1 = Userservice.findByEmail(email);
		  if(user1 ==null) {
			  Userservice.addUser(user);
			  ResponseEntity.ok().body("User add in the database " );
			 
		  }else
		  {
			   response.sendError(HttpServletResponse.SC_BAD_REQUEST,"User is allready in databaze");
		  }
		
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
