package com.login.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.login.app.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByFirstName(String username);
	Optional<User> findById(Long id);
	Boolean existsByFirstName(String username);

	Boolean existsByEmailAddress(String email);
}
