        //Create Object
		 
		     object = new Object();
			   object.name="Payilgam";
			   document.write(object.name);
			   	
			   
			   object.bonus=function()
			   {
			      x=1000;
				  y=2000;
				  return x+y;
			   }
			   
			   document.write(object.bonus());
			   
			   object.salary=function()
			   {
			      m= object.bonus();
			      salary= 10000+m;
				  return salary;
			   }
		       
			   document.write(object.salary());
         
       Result:
       
       Payilgam
       3000
       13000
       
       
