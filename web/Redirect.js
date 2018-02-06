/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function check(x)
{   //x="hi";
    if(x==="The e-mail was sent successfully")
    {
        window.open('Otp.html', "_self");
    }
    else
    {
        window.open('/emailapp', "_self");
    }
   // document.write(x);
}

