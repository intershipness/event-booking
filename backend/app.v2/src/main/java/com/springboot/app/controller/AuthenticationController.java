package com.springboot.app.controller;

import java.io.IOException;
import org.json.JSONObject;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
         return JSONObject.quote("tip"+":"+"user"+" "+"iduser"+":" +userId);
         }
		else if(con1!=null && user.getPassword().equals(con1.getPassword())){
			userId = con1.getId();

			return JSONObject.quote("contractor");
			}
		 response.sendError(HttpServletResponse.SC_BAD_REQUEST, "USER SAU PAROLA GRESITE" );

		 return null;
		}
   
     

	
	
}
