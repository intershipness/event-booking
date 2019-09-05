package com.springboot.app;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	//dd


	@Autowired
	private DataSource dataSource;

	@Value("${spring.queries.users-query}")
	private String usersQuery;

	@Value("${spring.queries.roles-query}")
	private String rolesQuery;

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.jdbcAuthentication().usersByUsernameQuery(usersQuery).authoritiesByUsernameQuery(rolesQuery)
				.dataSource(dataSource).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
//		 http.httpBasic()
//         .and()
//         .authorizeRequests()
//        // .antMatchers("/tocpis/**").hasAnyAuthority("SUPER_USER", "ADMIN_USER", "SITE_USER")
//        // .antMatchers("/Users/**").hasAnyAuthority("SUPER_USER", "ADMIN_USER", "SITE_USER")
//         .anyRequest().authenticated();
		 http.cors().and().csrf().disable();
		 
		 
		 
		 
		 
		 
		 
		http
		
		.authorizeRequests()
	
				// URLs matching for access rights
				.antMatchers("/").permitAll()
				.antMatchers("/login").permitAll()
				.antMatchers("/Contractor/email").permitAll()
				.antMatchers("/Evenimente").permitAll()
				.antMatchers("/Contractor/login").permitAll()
				.antMatchers("/register/User").permitAll()
				.antMatchers("/register/Contractor").permitAll()
				.antMatchers("/Contractor/{domeniu}").permitAll()
				.antMatchers("/upload").permitAll()
				.antMatchers("/Contractors").permitAll()
				.antMatchers("/Contractors/{id}").permitAll()
				.antMatchers("/Users").permitAll()
				.antMatchers("/download").permitAll()
				.antMatchers("/upload").permitAll()
				//.antMatchers("/tocpis/**").hasAnyAuthority("SUPER_USER", "ADMIN_USER", "SITE_USER")
				.anyRequest().authenticated()
				.and()
				// form login
				.formLogin()
				.loginPage("/login")
				.failureUrl("/login?error=true")
				.defaultSuccessUrl("/Users")
				.defaultSuccessUrl("/Contractors")
				.usernameParameter("email")
				.passwordParameter("password")
				.and()
				// logout
				.logout()
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/").and()
				.exceptionHandling()
				.accessDeniedPage("/access-denied");
	}

//	@Override
//	public void configure(WebSecurity web) throws Exception {
//		web.ignoring().antMatchers("/resources/**", "/static/**", "/css/**", "/js/**", "/images/**");
//	}

}
