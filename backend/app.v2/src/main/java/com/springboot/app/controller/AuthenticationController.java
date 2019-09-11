package com.springboot.app.controller;

import java.io.IOException;
import org.json.JSONObject;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
	@RequestMapping("/loginn" ) //login
    public String login( @RequestBody User user ,HttpServletResponse response   ) throws IOException {
		String email=user.getEmail(); //email trimis de ui
		
		
		
		User user1 = Userservice.findByEmail(email);
		Contractor con1 =ContractorService.getContractoremail(email);
		 
		
			  
		int userId;
		if(user1 !=null && user.getPassword().equals(user1.getPassword()) )
		{
			userId = user1.getId();
			//response.sendError(HttpServletResponse.SC_OK, "este user"+" " + userId);
			//ResponseEntity.ok().body("User whit id " +" "+ userId);
			return JSONObject.quote("user");
         //return ResponseEntity.ok().body("User whit id " +" "+ userId);
        		 //user.getEmail().equals("email") && user.getPassword().equals("password");
         
         }
		else if(con1!=null && user.getPassword().equals(con1.getPassword())){
			userId = con1.getId();
			//response.sendError(HttpServletResponse.SC_OK, "este contractor" +" "+ userId);
		//	ResponseEntity.ok().body("Contracotr whit id " +" "+ userId);
			//return ResponseEntity.ok().body("Contracotr whit id " +" "+ userId);
					//con1.getEmail().equals("email") && con1.getPassword().equals("password");
			return JSONObject.quote("contractor");
			}
		//response.sendError(HttpServletResponse.SC_BAD_REQUEST, "USER SAU PAROLA GRESITE" );
		 response.sendError(HttpServletResponse.SC_BAD_REQUEST, "USER SAU PAROLA GRESITE" );
		 return null;
		}
   
     

	
	
}
