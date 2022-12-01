package com.login.app.controllers;

import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.login.app.models.CRole;
import com.login.app.models.Role;
import com.login.app.models.User;
import com.login.app.payload.request.LoginRequest;
import com.login.app.payload.request.SignupRequest;
import com.login.app.payload.response.JwtResponse;
import com.login.app.payload.response.MessageResponse;
import com.login.app.repository.RoleRepository;
import com.login.app.repository.UserRepository;
import com.login.app.security.jwt.JwtUtils;
import com.login.app.security.services.UserDetailsImpl;
import com.login.app.security.services.UserDetailsServiceImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;
	
	@Autowired
	UserDetailsServiceImpl service;

	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("testt");
//		if (userRepository.existsByFirstName(signUpRequest.getFirstName())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("Error: Username is already taken!"));
//		}
//
//		if (userRepository.existsByEmailAddress(signUpRequest.getEmailAddress())) {
//			return ResponseEntity
//					.badRequest()
//					.body(new MessageResponse("Error: Email is already in use!"));
//		}

		// Create new user's account
//		CustomerUser user = new CustomerUser(signUpRequest.getUsername(), 
//							 signUpRequest.getEmail(),
//							 encoder.encode(signUpRequest.getPassword()));
		
		User user = new User(signUpRequest.getFirstName(),signUpRequest.getLastName(),signUpRequest.getAddress(),
				signUpRequest.getState(),signUpRequest.getCountry(),signUpRequest.getEmailAddress(),
				signUpRequest.getPan(),signUpRequest.getContactNo(),signUpRequest.getContactPreference(),
				 //signUpRequest.getEmail(),
				 encoder.encode(signUpRequest.getPassword()));
		
		//state;country;emailAddress;pan;contactNocontactPreference;password;

		//Set<String> strRoles = signUpRequest.getRole();
//		String[] vowels = {"admin","user"};
//		
//		Set<String> vowelsSet = new HashSet<>();
//		//Collections.addAll(vowels);
//		Collections.addAll(vowelsSet, vowels); 
//		System.out.println(vowelsSet);
		Set<String> strRoles = signUpRequest.getRole();
		//Set<String> strRoles = "admin";
		 //Set<String> strRoles = new HashSet<String>();   
		    
		// strRoles.add("admin");   
		Set<Role> roles = new HashSet<>();
		System.out.println(signUpRequest+"signUpRequest");

//		if (strRoles == null) {
//			Role userRole = roleRepository.findByName(CRole.ROLE_CUST_USER)
//					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
//			roles.add(userRole);
//		} else {
			String strRolesval = "admin";
			
			//strRoles.forEach(role -> {
				switch (strRolesval) {
				case "admin":
					Role adminRole = roleRepository.findByName(CRole.ROLE_CUST_ADMIN)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(adminRole);

					break;
				default:
					Role userRole = roleRepository.findByName(CRole.ROLE_CUST_USER)
							.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
					roles.add(userRole);
				}
			//});
//		}

		user.setRoles(roles);
		userRepository.save(user);

		return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
	}
	
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
		List<String> roles = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

		return ResponseEntity.ok(new JwtResponse(jwt, 
												 userDetails.getId(), 
												 userDetails.getUsername(), 
												 userDetails.getEmail(), 
												 roles));
	}
	
	 @GetMapping("/searchtitle/{status}")
	    public Optional<User> findByIdSearch(@PathVariable Long status) throws Exception{
	        return service.getSearchByupdate(status);
	    }
	
	@PutMapping("/update/{id}")
	public ResponseEntity<String> updateCustomerInfo(@PathVariable int id,@RequestBody SignupRequest requsets) {
    	

    	String fir_name =requsets.getFirstName();
    	String las_name =requsets.getLastName();
    	String add =requsets.getAddress();
    	String state_val =requsets.getState();
		String country_val =requsets.getCountry();
				//,signUpRequest.getEmailAddress(),
		String panval =requsets.getPan();
		String contactval =requsets.getContactNo();
		String contactpreval =requsets.getContactPreference();
		//String passwordval =encoder.encode(requsets.getPassword());
		String emailval=requsets.getEmailAddress();
				 //signUpRequest.getEmail(),
		//String fir_name =requsets.getRolesVal();
		return new ResponseEntity<String>(service.updateCustomerInfo(fir_name,las_name,add, state_val, country_val,
				panval,contactval,contactpreval,id,emailval), HttpStatus.OK);
	}

}
