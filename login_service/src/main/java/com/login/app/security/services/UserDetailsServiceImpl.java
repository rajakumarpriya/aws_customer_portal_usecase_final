package com.login.app.security.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.login.app.models.User;
import com.login.app.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	UserRepository userRepository;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByFirstName(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));

		return UserDetailsImpl.build(user);
	}
	
	 
	//return new ResponseEntity<String>(service.updateCustomerInfo(), HttpStatus.OK);
	public String updateCustomerInfo(String fir_name,String las_name, String add, String state_val, String country_val,
			String panval,String contactval,String contactpreval,long id,String emailval) {
		Optional<User> req=userRepository.findById(id);
		User data=req.get();
		data.setFirstName(fir_name);
		data.setLastName(las_name);
		data.setAddress(add);
		data.setState(state_val);
		data.setCountry(country_val);
		data.setPan(panval);
		data.setContactNo(contactval);
		data.setContactPreference(contactpreval);
		data.setEmailAddress(data.getEmailAddress());
		//data.setPassword(data.getPassword());
		
		
		return userRepository.save(data).getId()+"Data Updated";
	}

	public Optional<User> getSearchByupdate(Long status) {
		// TODO Auto-generated method stub
		return userRepository.findById(status);
	}
//	public Optional<User> getSearchByupdate(Long status){
//    	return userRepository.findById(status);
//        //return optional;
//    }

}
