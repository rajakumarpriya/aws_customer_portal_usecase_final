package com.request.services.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.request.services.entities.CustomerRequest;
import com.request.services.repositories.CustomerRequestRepository;

@Service
public class CustomerRequsetService {

    @Autowired
    private CustomerRequestRepository repo;
    
    public List<CustomerRequest> getAllRequests(){
         return repo.findAll();
        // return repo.findAll().get(0)
    }

    public Optional<CustomerRequest> getSearchByupdate(int status){
    	return repo.findById(status);
        //return optional;
    }
    
    
    
 public List<CustomerRequest> findByTitlesearch(String title,String status) throws Exception{
    	
    	List<CustomerRequest> count;
    	
    	if(title.equalsIgnoreCase("null") && title!=null) {
    		return repo.findAll();
    	}else {
    		
    	
    	
    		List<CustomerRequest> optional = (List<CustomerRequest>) repo.findByTitleLike(title,status);
    
        //List<CustomerRequest> optional = (List<CustomerRequest>) repo.findByStatus(status);
        
        
        
        if (((List<CustomerRequest>) optional).size() > 0)
            count=(List<CustomerRequest>) optional;   
        else
            count=null;            
        return count;
    	}
//        if(optional.isEmpty()){
//            throw new Exception("Service Request not found with id: "+status);
//        } else {
//            return (List<CustomerRequest>) optional.get();
//        }
    }
    
    public List<CustomerRequest> getRequestStatus(String status) throws Exception{
    	
    	List<CustomerRequest> count;
    	List<CustomerRequest> optional;
    	if(status.equalsIgnoreCase("all")) {
    		optional = (List<CustomerRequest>) repo.findAll();
    	}else {
    		optional = (List<CustomerRequest>) repo.findByStatus(status);
    	}
        //List<CustomerRequest> optional = (List<CustomerRequest>) repo.findByStatus(status);
        
        
        
        if (((List<CustomerRequest>) optional).size() > 0)
            count=(List<CustomerRequest>) optional;   
        else
            count=null;            
        return count;

//        if(optional.isEmpty()){
//            throw new Exception("Service Request not found with id: "+status);
//        } else {
//            return (List<CustomerRequest>) optional.get();
//        }
    }

    public CustomerRequest saveServiceRequest(CustomerRequest requsets) throws ParseException{
    	String pattern = "yyyy-MM-dd";
    	String date1=requsets.getCompletedDate();
    	SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

    	//String date = simpleDateFormat.format(date1);
    	
    	String dateStr = "20190226";
        SimpleDateFormat sdf = new SimpleDateFormat("dd-MM-yyyy");
        Date date = sdf.parse(date1);
        sdf = new SimpleDateFormat("yyyy-MM-dd");
        dateStr = sdf.format(date);
    	System.out.println(date);
    	System.out.println(dateStr);
    	requsets.setCompletedDate(dateStr);
    	
        return repo.save(requsets);
    }

//    public CustomerRequest updateServiceRequest(int id, CustomerRequest requsets){
//    	String getCommentsVal=requsets.getComments();
//    	//return repo.updateCommentsByPendingStatus(getCommentsVal, id)
//        return null;
//    }

    public int deleteRequest(int deletedStatusId) throws Exception{
    	 Optional<CustomerRequest> optional = repo.findById(deletedStatusId);
    	 int id=0;
         if(optional.isEmpty()){
             throw new Exception("Service Request not found with id: "+deletedStatusId);
         } else {
        	 System.out.println(optional.get().getId()+"optional.get().getId();");
        	 repo.deleteById(deletedStatusId);
              
         }
    		
        return id;
    }

    public Integer updateCommentsByClosedStatus(String comments,String status, int id) {
    	String statusReopen="REOPENED";
		return repo.updateCommentsByClosedStatus(comments, statusReopen, id);
	}
    
	public String updateCommentsByPendingStatus(String description,String completedDate,
			String comments,String status, int id) {
		Optional<CustomerRequest> req=repo.findById(id);
		CustomerRequest data=req.get();
		data.setComments(comments);
		data.setStatus(status);
		System.out.println(completedDate+"completedDate");
		data.setCompletedDate(completedDate);
		data.setDescription(description);
		
		return repo.save(data).getId()+"Data Updated";
	}
    
}