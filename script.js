function validate()
{
    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var conpass = document.getElementById('conpass').value;
    var Mobile_Number = document.getElementById('Mobile_Number').value;
    var EMail = document.getElementById('EMail').value;
    var date = document.getElementById('date').value;

    if (user=="")
    {
        document.getElementById('username').innerHTML = '*PLease fill out your name';
        return false;
    }
            
    if ((user.length<3) || (user.length>15) || (!isNaN(user)))
    {
        document.getElementById('username').innerHTML = '*Please fill valid name';
        return false;
    }
    if (pass=="")
    {
        document.getElementById('password').innerHTML = '*Please fill out your password';
        return false;
    }
    if ((pass.length<3) || (pass.length>15))
    {
        document.getElementById('password').innerHTML = '*Please fill out valid password';
        return false;
    }
    if ((conpass=="") || (pass!==conpass))
    {
        document.getElementById('confirmpass').innerHTML = '*Please fill the above password';
        return false;
    }
    if (Mobile_Number=="")
    {
        document.getElementById('num').innerHTML = '*Please fill out your phone number';
        return false;
    }
    if (isNaN(Mobile_Number) || (Mobile_Number.length!=10))
    {
        document.getElementById('num').innerHTML = '*Please fill a valid mobile number';
        return false;
    }
    if (EMail=="")
    {
        document.getElementById('mail').innerHTML = '*Please fill out your mail address';
        return false;
    }
    if ((EMail.indexOf('@') <=0) || ((EMail.charAt(EMail.length-4)!='.') && (EMail.charAt(EMail.length-3)!='.')) )
    {
        document.getElementById('mail').innerHTML = '*Please fill valid mail address';
        return false;
    }
    if(date == "")
    {
        document.getElementById("d").innerHTML="**Please your birth date**";
        return false;
    }
   if(!(document.querySelector('input[name="gender"]:checked'))  
)
    {
        document.getElementById("gender").innerHTML="*Please Select your gender*";
        return false;
    }
    else
    {
        document.getElementById("gender").innerHTML="";
    }

}        