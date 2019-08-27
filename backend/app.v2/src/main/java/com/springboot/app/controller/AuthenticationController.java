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
	@RequestMapping("/login" )
    public boolean login( @RequestBody User user ,String email,Contractor con ,HttpServletResponse response  ) throws IOException {
		User user1 = Userservice.findByEmail(email);
		if(user1 !=null)
		{
			response.sendError(HttpServletResponse.SC_OK, "este user");
         return user.getEmail().equals("email") && user.getPassword().equals("password");
         
         }
		else {
			Contractor con2 = ContractorService.findByEmail(email);
			if(con2!=null) {
			response.sendError(HttpServletResponse.SC_OK, "este contractor");
			return con.getEmail().equals("email") && con.getPassword().equals("password");
			}
		}
		response.sendError(HttpServletResponse.SC_BAD_REQUEST);
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
