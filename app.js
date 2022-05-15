let otp = document.getElementById("input");
let done = document.getElementById("generatebtn").addEventListener('click',generateOtp);



function generateOtp()
{
    var digits='0123456789';

    var otpLength = 4;
    var otp="";

    for(let i=1; i<=otpLength; i++)
    {
        var index = Math.floor(Math.random()*(digits.length));

        otp = otp + digits[index]
    }
    document.getElementById("input").value= otp;
}