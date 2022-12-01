package com.request.services.controllers;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.request.services.entities.CustomerRequest;
import com.request.services.repositories.CustomerRequestRepository;
import com.request.services.services.CustomerRequsetService;

@RestController
// @CrossOrigin(origins = {"https://hoppscotch.io"})
@CrossOrigin
@RequestMapping("/api/v2/requests")
public class CustomerRequestController {
    
    @Autowired
    private CustomerRequsetService service;
    
    @Autowired
    private CustomerRequestRepository repo;

    @GetMapping()
    public List<CustomerRequest> getAllRequests(){
        return service.getAllRequests();
    }

    @GetMapping("/search/{status}")
    public List<CustomerRequest> getRequestStatus(@PathVariable String status) throws Exception{
        return service.getRequestStatus(status);
    }
    @GetMapping("/searchtitle/{status}/{status1}")
    public List<CustomerRequest> findByTitlesearch(@PathVariable String status,@PathVariable String status1) throws Exception{
        return service.findByTitlesearch(status,status1);
    }
    
    @GetMapping("/pendingstatus/{status}")
    public List<CustomerRequest> getRequestPendingStatus(@PathVariable String status) throws Exception{
        return service.getRequestStatus(status);
    }

    @PostMapping("/save")
    public CustomerRequest saveServiceRequest(@RequestBody CustomerRequest requsets) throws ParseException{
        return service.saveServiceRequest(requsets);
    }

//    @PutMapping("/update/{id}")
//    public CustomerRequest updateMovie(@PathVariable int id, @RequestBody CustomerRequest requsets){
//        return service.updateServiceRequest(id, requsets);
//    }
    @PutMapping("/update/{id}")
	public ResponseEntity<String> updateCommentsByPendingStatus(@PathVariable int id,@RequestBody CustomerRequest requsets) {
    	String getCommentsVal=requsets.getComments();
    	String getStatusVal=requsets.getStatus();
    	String descriptionval=requsets.getDescription();
    	String completedDateval=requsets.getCompletedDate();
		return new ResponseEntity<String>(service.updateCommentsByPendingStatus(descriptionval,completedDateval,getCommentsVal, getStatusVal, id), HttpStatus.OK);
	}
   
    
    @PutMapping("/reopen/{id}")
	public ResponseEntity<String> updateCommentsByClosedStatus(@PathVariable int id,@RequestBody CustomerRequest requsets) {
    	String getCommentsVal=requsets.getComments();
    	String getStatusVal=requsets.getStatus();
    	//if(getStatusVal !=null && getStatusVal=="CLOSED") {
    		return new ResponseEntity<String>(service.updateCommentsByClosedStatus(getCommentsVal, getStatusVal, id)+" record(s) updated."
				, HttpStatus.OK);    	
		//return null;
    	//}
	}
    @GetMapping("/updateid/{id}")
    public Optional<CustomerRequest> getSearchByupdate(@PathVariable int id){
        return service.getSearchByupdate(id);
    }
    
    
    @DeleteMapping("/delete/{statusId}")
    public int deleteRequest(@PathVariable int statusId) throws Exception{
        return service.deleteRequest(statusId);
    }
}