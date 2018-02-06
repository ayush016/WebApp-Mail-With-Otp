/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



    var count1=0;
    var lock='0';
   
  function startDictation(id) {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById(id).value
                                 = e.results[0][0].transcript;
        recognition.stop();
        count1=1;
       if(id==='s')
       {
           document.getElementById("demo").innerHTML="Enter the Content";
           startDictation('c');
           
       }
       if(id==='c')
       {
           document.getElementById("demo").innerHTML="Ready to Send it?";
           startDictation('confirm')
       }
       if(id==='confirm')
       {
           if(document.getElementById("confirm").value!=='yes')
           {
               document.getElementById("demo").innerHTML="Ok i won't Send it";
           }
                    
           else
            {
                    document.getElementById("demo").innerHTML="Sending.....";
                    beta();
            }
        }
      };
      
      recognition.onerror = function(e) {
        recognition.stop();
      }
      
      
      
    
  }
  }
  
    function test()
        {
            //****************************************************
               	 var a=document.getElementById('transcript').value;
                 var y = a.split(' ').slice(0,3).join('+');
                 var z = a.split(' ').slice(0,2).join('+')
                 //var t = document.getElementById('transript').value;


                 var x = a.split(" ");
                 var i;
                 var count = "0";
                 for(i = 0;i < x.length;i++)
                 {

                      if(x[i].toUpperCase()==='TIME')
                    {
    	
                       count++;
                    }
                 }
                 
        //*******************************************************         
                if(a.toUpperCase()==='HI'||a.toUpperCase()==='HEY')
                {
                    var c = 'Hello!!';
                    var msg = new SpeechSynthesisUtterance(c);
                    window.speechSynthesis.speak(msg);
                    document.getElementById("demo").innerHTML=c;
                }
                else if(y.toUpperCase()==='SEARCH+ON+GOOGLE')
                {
                    
                    var k = a.split(' ').slice(3,100).join(' ');
                    var q = k;
                    var f="Searching Google" +k ;
                    var msg1 = new SpeechSynthesisUtterance(f);
                    window.speechSynthesis.speak(msg1);
                    //document.getElementById('search').onclick = function() {
                    window.open('http://google.com/search?q='+q);
                }
                    //document.write(k);
                else if(z.toUpperCase()==="OPEN+WEBPAGE"||z.toUpperCase()==="OPEN+PAGE"||z.toUpperCase()==="OPEN WEBSITE")
                {
                    var n = a.split(" ");
                    var q = n[n.length - 1];
                    var f="Openning" +q ;
                    var msg1 = new SpeechSynthesisUtterance(f);
                    window.speechSynthesis.speak(msg1);
                    window.open('http://www.'+q+'.com');
                }
                else if(count!=="0")
                {
                var d = new Date(); // for now
                var h = d.getHours(); // => 9
                var m = d.getMinutes(); // =>  30
                var s = d.getSeconds(); // => 51
                f="Time is"+h+"hours"+m+"minutes"+s+"seconds";
                var msg1 = new SpeechSynthesisUtterance(f);
                window.speechSynthesis.speak(msg1);
                    if(h=== 0)
                    {
                        document.getElementById("demo").innerHTML="0"+h+":"+m+":"+s;
                    }
                    else
                    {
                        document.getElementById("demo").innerHTML=h+":"+m+":"+s;
                    }
                 }           
                else if(a.toUpperCase()==="GOOD MORNING")
                {
                        var d = new Date(); // for now
                        var h = d.getHours(); // => 9
                        var m = d.getMinutes(); // =>  30
                        var s = d.getSeconds(); // => 51
                        f1="Good morning? Really? it's "+h+":"+m+":"+s+" You Should say Good night!";
                        f2="Good Morning";
                        var msg1 = new SpeechSynthesisUtterance(f1);
                        var msg2 = new SpeechSynthesisUtterance(f2);
                        
                        if(h<=4)
                        {
                            
                            document.getElementById("demo").innerHTML="Good morning!!! Really? it's "+h+":"+m+":"+s+" You Should say Good night!";
                            window.speechSynthesis.speak(msg1);
                        }
                        else
                        {
                            
                             document.getElementById("demo").innerHTML="Good Morning";
                             window.speechSynthesis.speak(msg2);
                        }
                }
                else if(a.toUpperCase()==="SEND MAIL")
                {
                    //sessionStorage.setItem("recipient","ayush.shrivastava016@gmail.com" );
                    //sessionStorage.setItem("subject","yoyo" );
                    //sessionStorage.setItem("content","yehh" );
                    document.getElementById("demo").innerHTML="Enter the Subject";
                    startDictation('s');
                    
                    //startDictation('confirm');
                   // setTimeout(startDictation('s'), 5000);
                    //startDictation('c');
                    //while(lock==='0');
                    //document.getElementById("r").value = document.getElementById('cript').value;
                     //var person = prompt("Please enter your name", "Harry Potter");
                     //if (person !== null)
                     
                    //window.open('EmailForm.jsp');
                   //document.write(count1);


                }
                else if(a.toUpperCase()==="WEATHER")
                {
                    
                }
                else
                {
                    f="Am afraid i can't answer that";
                    var msg1 = new SpeechSynthesisUtterance(f);
                    window.speechSynthesis.speak(msg1);
                    var b= "Am afraid i can't answer that";
                    document.getElementById("demo").innerHTML = b;
                }
		
        }
  
   
function beta()
{
    document.getElementById("submit").submit();
}
 
