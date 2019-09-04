package com.springboot.app.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.springboot.app.model.Contractor;
import com.springboot.app.model.ContractorService;
import com.springboot.app.model.User;
import com.springboot.app.model.UserService;

@RestController
@Controller
@CrossOrigin
public class AuthenticationController {
	
	@Autowired
	private UserService Userservice;
	@Autowired
	private ContractorService ContractorService;
	@RequestMapping(path="/login",method=RequestMethod.GET ) //login
    public boolean login( @RequestBody User user ,HttpServletResponse response   ) throws IOException {
		String email=user.getEmail(); //usr trimis de ui
		String pass=user.getPassword();// pass trimis de ui
		
		
		User user1 = Userservice.findByEmail(email);
		Contractor con1 =ContractorService.getContractoremail(email);
		 
		
			  
		int userId;
		if(user1 !=null && user.getPassword().equals(user1.getPassword()) )
		{
			userId = user1.getId();
			response.sendError(HttpServletResponse.SC_OK, "este user"+" " + userId);
			
			
         return user.getEmail().equals("email") && user.getPassword().equals("password");
         
         }
		else if(con1!=null && user.getPassword().equals(con1.getPassword())){
			userId = con1.getId();
			response.sendError(HttpServletResponse.SC_OK, "este contractor" +" "+ userId);
			return con1.getEmail().equals("email") && con1.getPassword().equals("password");
			}
		response.sendError(HttpServletResponse.SC_BAD_REQUEST, "USER SAU PAROLA GRESITE" );
		return false;
		}
   
     
	@RequestMapping(value = "/register", method = RequestMethod.GET)
	public ModelAndView register() {
		ModelAndView modelAndView = new ModelAndView();
		// User user = new User();
		// modelAndView.addObject("user", user); 
		//modelAndView.setViewName("register"); // resources/template/register.html
		return modelAndView;
	}
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public ModelAndView home() {
	ModelAndView modelAndView = new ModelAndView();
	//modelAndView.setViewName("home"); // resources/template/home.html
		return modelAndView;
	}
}
