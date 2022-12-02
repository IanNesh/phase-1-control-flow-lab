function scuberGreetingForFeet(ride){

  if (ride <= 400) {
    return "This one is on me!";
  } else if (ride > 2000 && ride <= 2500){
    return "I will  take your forty dollars.";
  } else {
    return "Can't do that.";
  }
}

function ternaryCheckCity(city){

  if (city === "NYC") {
    return "Sure, sounds good."
  } else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  
   if (tip == "generous") {
    return "Thank you so much."
  } else if (tip == "not generous"){
    return "Thank you."
  } else  {
    return"Good Bye."
  }
}


