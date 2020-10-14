document.getElementById("loan-form").addEventListener("submit",function(e){


    // Show Loading

document.getElementById('loading').style.display='block';

// hide results

document.getElementById('results').style.display='none';


setTimeout(calculateResults,2000);


e.preventDefault();
});

// Calculate Results

function calculateResults(){

// ui variables
const amount= document.getElementById("amount");
const interest= document.getElementById("interest");
const years= document.getElementById("years");
const monthlyPayment= document.getElementById("monthly-payment");
const totalPayment= document.getElementById("Total-payment");
const totalInterest= document.getElementById("Total-interest");

const principal= parseFloat(amount.value);
const calculatedInterest= parseFloat(interest.value)/100/12;
const calculatedPayments= parseFloat(years.value)*12

//compute monthly payment

const x= Math.pow(1+calculatedInterest,calculatedPayments);
const monthly= (principal*x*calculatedInterest)/(x-1);
if(isFinite(monthly)){
monthlyPayment.value=monthly.toFixed(2);
totalPayment.value=(monthly*calculatedPayments).toFixed(2);
totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);


    // hide Loading

    document.getElementById('loading').style.display='none';

    // show results
    
    document.getElementById('results').style.display='block';
    

}
else{
 showError('Please Check Your Numbers');
}


}


function showError(error){



    
    // hide Loading

document.getElementById('loading').style.display='none';

// hide results

document.getElementById('results').style.display='none';


    const errorDiv= document.createElement('div');
    errorDiv.className="alert alert-danger";

    errorDiv.appendChild(document.createTextNode(error));
    const card= document.querySelector('.card');
    const heading=document.querySelector('.heading');
    card.insertBefore(errorDiv,heading);
    setTimeout(clearError, 3000);
}
function clearError(){
    document.querySelector('.alert').remove();
}