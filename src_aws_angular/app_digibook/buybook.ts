export class BuyBook{
   id=0 ;
    bookid=0;
	  readername='';
	  readermail='';
	  paymentid=0;
	purchaseDate ='';
	
}

export class CustomerRequest{
	
	id=0 ;
	title='';
	description='';
	status='';
	completedDate='';
	comments='';
}

export class UserUpdateInfo{
	id=0 ;
	firstName='';
	lastName='';
	address='';
	state='';
	country='';
	pan='';
	contactNo='';
	emailaddress='';
	contactPreference='';

}
export class Book{
	id=0 ;
	image='';
	title='';
	category='';
	price=0;
	auhtor='';
	auhtorid=0;
	publisher='';
	published_date='';
	chapter='';
	active_status ='';


   

	 
 }
 export class Author{
	id=0 ;
	 bookid=0;
	   readername='';
	   readermail='';
	   paymentid=0;
	 purchaseDate ='';
	 
 }

 export class User{
	id=0 ;
	 username='';
	   email='';
	   password='';
	   roles='';
 }
 