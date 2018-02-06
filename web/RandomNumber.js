var x;


function randomWholeNum() {

  // Only change code below this line.

   x = Math.floor(Math.random() * 99999);
  document.getElementById('otp').value=x;
  sessionStorage.setItem("MyId", x);
  
  }
  
   function Otpchecker()
        {
            var value = sessionStorage.getItem("MyId");
               	var user=document.getElementById('Otpcheck').value;
                
                if(user===value)
                {
                    sessionStorage.setItem("secure", "1");
                    document.write("Welcome");
                    

                }
               
                else
                {
                    
                    document.write("Wrong Otp");
                }
		
        }
  
   