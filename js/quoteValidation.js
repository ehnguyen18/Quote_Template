var line1,line2=0,line3=0,line4=0,line5=0,subtotal,total,totaldue,gst=0 ;

function validateForm(){
    var final=false;
    preValidate();
    if (checkDate())
        if (checkStaff())
        if (checkName())
        if (checkName2())
        if (checkAddress())
        if (checkPostcode())
        if (checkSuburb())
        if (checkEmail())
        if (checkPhone())
        if (checkProduct1())
        if (document.getElementById("addp2").checked) if (checkProduct2())
        if (document.getElementById("addp3").checked) if (checkProduct3())
        if (document.getElementById("addp4").checked) if (checkProduct4())
        if (document.getElementById("addp5").checked) if (checkProduct5()) 
        if (checkDeposit())  
        {
            document.getElementById("final-error").style.display = "none";
            final=true;
        }
    else {
        document.getElementById("final-error").style.display = "block";
        final=false;
    }
    return final;
}

function preValidate(){
    checkDate();
    checkStaff();
    checkName();
    checkName2();
    checkAddress();
    checkPostcode();
    checkSuburb();
    checkEmail();
    checkPhone();
    checkProduct1();
    checkDeposit();
    if (document.getElementById("addp2").checked) checkProduct2();
    if (document.getElementById("addp3").checked) checkProduct3();
    if (document.getElementById("addp4").checked) checkProduct4();
    if (document.getElementById("addp5").checked) checkProduct5();
}

function checkDate(){
    var patt=/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    var a=document.getElementById('qDate').value;
    var b=document.getElementById("iDate").value;
    var final=false;
    if (!a.length){
        document.getElementById('qDate-error').style.display = "inline-block";
        document.getElementById('qDate').style.border = "2px solid #ff0000";
        final=false;
        }
    else{    
        if (!patt.test(a)){
            document.getElementById('qDate-error').style.display = "inline-block";
            document.getElementById('qDate').style.border = "2px solid #ff0000";
            final=false;
            }
        else {
            document.getElementById('qDate-error').style.display = "none";
            document.getElementById('qDate').style.border = "1px solid";
            final=true;
            }
        }
    
    if (!b.length){
        document.getElementById('iDate-error').style.display = "block";
        document.getElementById('iDate').style.border = "2px solid #ff0000";
        final=false;
    }
    else{    
        if (!patt.test(b)){
            document.getElementById('iDate-error').style.display = "block";
            document.getElementById('iDate').style.border = "2px solid #ff0000";
            final=false;
            }
        else {
            document.getElementById('iDate-error').style.display = "none";
            document.getElementById('iDate').style.border = "1px solid";
            final=true;
            }
        }
    return final;
    }

function checkStaff(){
    var patt=/^[A-Z]{3}[0-9]{4}$/;
    var a=document.getElementById('sNum').value;
    var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('sNum-error').style.display = "block";
        document.getElementById('sNum').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('sNum-error').style.display = "block";
            document.getElementById('sNum').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('sNum-error').style.display = "none";
            document.getElementById('sNum').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkName(){
    var patt=/[a-zA-Z -]/;
    var a=document.getElementById('cFName').value;
    var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('cFName-error').style.display = "block";
        document.getElementById('cFName').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('cFName-error').style.display = "block";
            document.getElementById('cFName').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('cFName-error').style.display = "none";
            document.getElementById('cFName').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkName2(){
    var patt=/[a-zA-Z -]/;
    var a=document.getElementById('cLName').value;
    var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('cLName-error').style.display = "block";
        document.getElementById('cLName').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('cLName-error').style.display = "block";
            document.getElementById('cLName').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('cLName-error').style.display = "none";
            document.getElementById('cLName').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkAddress(){
    var patt=/[a-zA-Z -\/]/;
    var a=document.getElementById('sAddress').value;
    var final=false;
    if (!a.length){
        final=false;
        document.getElementById('sAddress-error').style.display = "block";
        document.getElementById('sAddress').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('sAddress-error').style.display = "block";
            document.getElementById('sAddress').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('sAddress-error').style.display = "none";
            document.getElementById('sAddress').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkSuburb(){
    var patt=/[a-zA-Z -]/;
    var a=document.getElementById('sSuburb').value;
    var final=false;
    if (!a.length){
        final=false;
        document.getElementById('sSuburb-error').style.display = "block";
        document.getElementById('sSuburb').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('sSuburb-error').style.display = "block";
            document.getElementById('sSuburb').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('sSuburb-error').style.display = "none";
            document.getElementById('sSuburb').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkPostcode(){
    var patt=/[0-9]{4}/;
    var a=document.getElementById('postcode').value;
    var final=false;
    if (!a.length){
        final=false;
        document.getElementById('postcode-error').style.display = "block";
        document.getElementById('postcode').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('postcode-error').style.display = "block";
            document.getElementById('postcode').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('postcode-error').style.display = "none";
            document.getElementById('postcode').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkPhone(){
    var patt=/^(04|02)[0-9]{8}/;
    var a=document.getElementById('cPhone').value;
    var final=false;
    if (!a.length){
        final=false;
        document.getElementById('cPhone-error').style.display = "block";
        document.getElementById('cPhone').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('cPhone-error').style.display = "block";
            document.getElementById('cPhone').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('cPhone-error').style.display = "none";
            document.getElementById('cPhone').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkEmail(){
    var patt=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regEx from https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var a=document.getElementById('cEmail').value;
    var final=false;
    if (!a.length){
        final=false;
        document.getElementById('cEmail-error').style.display = "block";
        document.getElementById('cEmail').style.border = "2px solid #ff0000";
    }
    else{
        if (!patt.test(a)){
            final=false;
            document.getElementById('cEmail-error').style.display = "block";
            document.getElementById('cEmail').style.border = "2px solid #ff0000";
           }
        else {
            document.getElementById('cEmail-error').style.display = "none";
            document.getElementById('cEmail').style.border = "1px solid";
            final=true;
            }
    }   
    return final;
}

function checkDeposit(){
    var a=document.getElementById("deposit").value;
    var final=false;
    if(a.length==0){
        final=false;
        document.getElementById('deposit').style.border = "2px solid #ff0000";
        document.getElementById('deposit-error').style.display = "block";
    }
    else{
        if(a<=0 || a>=total){
            final=false;
            document.getElementById('deposit').style.border = "2px solid #ff0000";
            document.getElementById('deposit-error').style.display = "block";
        }
        else{
            document.getElementById('deposit').style.border = "1px solid";
            document.getElementById('deposit-error').style.display = "none";
            final=true;
        }
    }
    return final;
}

function checkProduct1(){
    var a=document.getElementById('pID1').value;
        b=document.getElementById('pName1').value;
        c=document.getElementById('pQuantity1').value;
        d=document.getElementById('pUnitPrice1').value;
    var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('pID1').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pID1').style.border = "1px solid";
        final=true;
        }
    if (b.length>60 || b.length==0){
        final=false;
        document.getElementById('pName1-error').style.display = "block";
        document.getElementById('pName1').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pName1-error').style.display = "none";
        document.getElementById('pName1').style.border = "1px solid";
        final=true;
        }
    if (c>20 || c<=1){
        final=false;
        document.getElementById('pQuantity1-error').style.display = "block";
        document.getElementById('pQuantity1').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pQuantity1-error').style.display = "none";
        document.getElementById('pQuantity1').style.border = "1px solid";
        final=true;
        }
    if (d<0|| d.length==0){
        final=false;
        document.getElementById('pUnitPrice1-error').style.display = "block";
        document.getElementById('pUnitPrice1').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pUnitPrice1-error').style.display = "none";
        document.getElementById('pUnitPrice1').style.border = "1px solid";
        final=true;
        }
    return final;
}

function checkProduct2(){
    var a=document.getElementById('pID2').value;
        b=document.getElementById('pName2').value;
        c=document.getElementById('pQuantity2').value;
        d=document.getElementById('pUnitPrice2').value;
        var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('pID2').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pID2').style.border = "1px solid";
        final=true;
        }
    if (b.length>60 || b.length==0){
        final=false;
        document.getElementById('pName2-error').style.display = "block";
        document.getElementById('pName2').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pName2-error').style.display = "none";
        document.getElementById('pName2').style.border = "1px solid";
        final=true;
        }
    if (c>20 || c<=1){
        final=false;
        document.getElementById('pQuantity2-error').style.display = "block";
        document.getElementById('pQuantity2').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pQuantity2-error').style.display = "none";
        document.getElementById('pQuantity2').style.border = "1px solid";
        final=true;
        }
    if (d<0|| d.length==0){
        final=false;
        document.getElementById('pUnitPrice2-error').style.display = "block";
        document.getElementById('pUnitPrice2').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pUnitPrice2-error').style.display = "none";
        document.getElementById('pUnitPrice2').style.border = "1px solid";
        final=true;
        }
    return final;
}
function checkProduct3(){
    var a=document.getElementById('pID3').value;
        b=document.getElementById('pName3').value;
        c=document.getElementById('pQuantity3').value;
        d=document.getElementById('pUnitPrice3').value;
        var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('pID3').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pID3').style.border = "1px solid";
        final=true;
        }
    if (b.length>60 || b.length==0){
        final=false;
        document.getElementById('pName3-error').style.display = "block";
        document.getElementById('pName3').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pName3-error').style.display = "none";
        document.getElementById('pName3').style.border = "1px solid";
        final=true;
        }
    if (c>20 || c<=1){
        final=false;
        document.getElementById('pQuantity3-error').style.display = "block";
        document.getElementById('pQuantity3').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pQuantity3-error').style.display = "none";
        document.getElementById('pQuantity3').style.border = "1px solid";
        final=true;
        }
    if (d<0|| d.length==0){
        final=false;
        document.getElementById('pUnitPrice3-error').style.display = "block";
        document.getElementById('pUnitPrice3').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pUnitPrice3-error').style.display = "none";
        document.getElementById('pUnitPrice3').style.border = "1px solid";
        final=true;
        }
    return final;
}
function checkProduct4(){
    var a=document.getElementById('pID4').value;
        b=document.getElementById('pName4').value;
        c=document.getElementById('pQuantity4').value;
        d=document.getElementById('pUnitPrice4').value;
        var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('pID4').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pID4').style.border = "1px solid";
        final=true;
        }
    if (b.length>60 || b.length==0){
        final=false;
        document.getElementById('pName4-error').style.display = "block";
        document.getElementById('pName4').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pName4-error').style.display = "none";
        document.getElementById('pName4').style.border = "1px solid";
        final=true;
        }
    if (c>20 || c<=1){
        final=false;
        document.getElementById('pQuantity4-error').style.display = "block";
        document.getElementById('pQuantity4').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pQuantity4-error').style.display = "none";
        document.getElementById('pQuantity4').style.border = "1px solid";
        final=true;
        }
    if (d<0|| d.length==0){
        final=false;
        document.getElementById('pUnitPrice4-error').style.display = "block";
        document.getElementById('pUnitPrice4').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pUnitPrice4-error').style.display = "none";
        document.getElementById('pUnitPrice4').style.border = "1px solid";
        final=true;
        }
    return final;
}
function checkProduct5(){
    var a=document.getElementById('pID5').value;
        b=document.getElementById('pName5').value;
        c=document.getElementById('pQuantity5').value;
        d=document.getElementById('pUnitPrice5').value;
        var final=false;
    if (a.length==0){
        final=false;
        document.getElementById('pID5').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pID5').style.border = "1px solid";
        final=true;
        }
    if (b.length>60 || b.length==0){
        final=false;
        document.getElementById('pName5-error').style.display = "block";
        document.getElementById('pName5').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pName5-error').style.display = "none";
        document.getElementById('pName5').style.border = "1px solid";
        final=true;
        }
    if (c>20 || c<=1){
        final=false;
        document.getElementById('pQuantity5-error').style.display = "block";
        document.getElementById('pQuantity5').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pQuantity5-error').style.display = "none";
        document.getElementById('pQuantity5').style.border = "1px solid";
        final=true;
        }
    if (d<0|| d.length==0){
        final=false;
        document.getElementById('pUnitPrice5-error').style.display = "block";
        document.getElementById('pUnitPrice5').style.border = "2px solid #ff0000";
    }
    else {
        document.getElementById('pUnitPrice5-error').style.display = "none";
        document.getElementById('pUnitPrice5').style.border = "1px solid";
        final=true;
        }
    return final;
}

function addProduct(){    
    if (document.getElementById("addp2").checked) {
        document.getElementById("p2").style.display = "block";
        document.getElementById("p2").disabled=false;
        calLine2();
    }
    else {
        document.getElementById("p2").style.display = "none";
        document.getElementById("p2").disabled=true;
        line2=0; 
        calTotal();
    }
    
    if (document.getElementById("addp3").checked) {
        document.getElementById("p3").style.display = "block";
        document.getElementById("p3").disabled=false;
        calLine3();
    }
    else {
        document.getElementById("p3").style.display = "none";
        document.getElementById("p3").disabled=true;
        line3=0;
        calTotal();
    }
    
    if (document.getElementById("addp4").checked) {
        document.getElementById("p4").style.display = "block";
        document.getElementById("p4").disabled=false;
        calLine4();
    }
    else {
        document.getElementById("p4").style.display = "none";
        document.getElementById("p4").disabled=true;
        line4=0;
        calTotal();
    }
    
    if (document.getElementById("addp5").checked) {
        document.getElementById("p5").style.display = "block";
        document.getElementById("p5").disabled=false;
        calLine5();
    }
    else {
        document.getElementById("p5").style.display = "none";
        document.getElementById("p5").disabled=true;
        line5=0;
        calTotal();
    }
}

function calLine1(){
    var a = document.getElementById('pQuantity1').value;
    var b = document.getElementById('pUnitPrice1').value;
    var c=a*b;
    if (c<0) c=0;
    document.getElementById('pLineTotal1').value = c;
    line1 = c;
    calTotal();
}
function calLine2(){
    var a = document.getElementById('pQuantity2').value;
    var b = document.getElementById('pUnitPrice2').value;
    var c=a*b;
    if (c<0) c=0;
    document.getElementById('pLineTotal2').value = c;
    line2 = c;
    calTotal();
}
function calLine3(){
    var a = document.getElementById('pQuantity3').value;
    var b = document.getElementById('pUnitPrice3').value;
    var c=a*b;
    if (c<0) c=0;
    document.getElementById('pLineTotal3').value = c;
    line3 = c;
    calTotal();
}
function calLine4(){
    var a = document.getElementById('pQuantity4').value;
    var b = document.getElementById('pUnitPrice4').value;
    var c=a*b;
    if (c<0) c=0;
    document.getElementById('pLineTotal1').value = c;
    line4 = c;
    calTotal();
}
function calLine5(){
    var a = document.getElementById('pQuantity5').value;
    var b = document.getElementById('pUnitPrice5').value;
    var c=a*b;
    if (c<0) c=0;
    document.getElementById('pLineTotal5').value = c;
    line5 = c;
    calTotal();
}

function calTotal(){
    subtotal = line1 + line2 + line3 + line4 + line5;
    document.getElementById('subtotal').value = subtotal;
    gst = (subtotal/100)*10;
    document.getElementById('gst').value = gst;
    total=subtotal + gst;
    document.getElementById('total').value = total;
    calDue();
}

function calDue(){
    var deposit = document.getElementById("deposit").value;
    totaldue = total - deposit;
    document.getElementById('due').value = totaldue;
}