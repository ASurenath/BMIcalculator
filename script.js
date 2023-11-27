function calculate(){
    color='black'
    valid=true
    wunit=document.querySelector('input[name="wunit"]:checked').value
    wscale=1
    wunit=="lbs"?wscale=0.453592:wscale=1;
    weight=w1.value*wscale
    hunit=document.querySelector('input[name="hunit"]:checked').value
    hscale=0.01
    hunit=="in"?hscale=0.0254:hscale=0.01;
    height=h1.value*hscale
    if(weight<1 || weight>1000 || height<0.01 || height>3){
        valid=false
    } 
    
    if(valid){
            bmi=Math.round(weight*10/(height**2))/10
            bmidisplay.innerHTML=`<h1>BMI: ${bmi}</h1>`
            
            if (bmi<16){
                message="Underweight (Severe thinness)"
                color="red"
            }
            else if(bmi<17){
                message="Underweight (Moderate thinness)"
                color='orangered'
            }
            else if(bmi<18.5){
                message="Underweight (Mild thinness)"
                color='gold'
            }
            else if(bmi<25){
                message="Normal range"
                color='green'
            }
            else if(bmi<30){
                message="Overweight (Pre-obese)"
                color='gold'
            }
            else if(bmi<35){
                message="Obese (Class I)"
                color='orangered'
            }
            else if(bmi<45){
                message="Obese (Class II)"
                color='red'
            }
            else{
                message="Obese (Class III)"
                color='red'
            }
    }
    else{
        message="Please enter valid numbers"
        color='red'
        bmidisplay.innerHTML=``
    }
    bmimessage.innerHTML=`<h2 style="color:${color}">${message}</h2>`
}
function changeWUnit(){
    wunit=document.querySelector('input[name="wunit"]:checked').value
    if (wunit=='kg'){
        w1.value*=0.453592
    }
    else{
        w1.value/=0.453592
    }
}
function changeHUnit(){
    hunit=document.querySelector('input[name="hunit"]:checked').value
    if (hunit=='cm'){
        h1.value*=2.54
    }
    else{
        h1.value/=2.54
    }
}
