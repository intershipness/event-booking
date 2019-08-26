package com.springboot.app.model;

import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer>  {
	 User findByEmail( String email);
}
