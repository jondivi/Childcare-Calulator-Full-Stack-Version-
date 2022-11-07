document.querySelector('button').addEventListener('click',howMuch)

function howMuch(){
  //This sets the hourly rate value from the DOM
  let hourlyRateOneChild=document.querySelector('#rateOne').value
  //

  //Hours
        //Start time    
          //This pulls the starting value from the DOM
          let hoursStart=document.querySelector('#hoursOneStart').value

          //This breaks the start value into a separate array for hours and minutes
          let startTimeHours=Number(hoursStart.substring(0, 2));
          let startTimeMinutes=Number(hoursStart.slice(3));

          //This converts minutes to decimals
          let startMinutesConverted=startTimeMinutes/60

          //This joins the times back together
          let startTimeCompleted=startTimeHours+startMinutesConverted;
        

        //End time
          //This pulls the ending value from the DOM
          let hoursEnd=document.querySelector('#hoursOneEnd').value

          //This breaks the start value into a separate array for hours and minutes
          let endTimeHours=Number(hoursEnd.substring(0, 2));
          let endTimeMinutes=Number(hoursEnd.slice(3));

          //This converts minutes to decimals
          let endMinutesConverted=endTimeMinutes/60

          //This joins the times back together
          let endTimeCompleted=endTimeHours+endMinutesConverted;
        

        //Figures out elapsed time from data above
        let firstDay=endTimeCompleted-startTimeCompleted;
        
  

  //This gives us the day of the event
  let weekNumber=document.querySelector('#weekOf').value
  //


  

  //Multiplies hour total by the rate and rounds the result
  let subtotalForOne=Math.round(hourlyRateOneChild*firstDay);
        
  //Sets the caregiver of the event 
  let eventActivity=document.querySelector('#event').value
    
  //inserts information in the DOM so the user can view it
  // alert(`$${subtotalForOne} spent on ${weekNumber} for ${eventActivity} for ${firstDay} hours`);
  document.querySelector('#total').innerText= `$${subtotalForOne} spent on ${weekNumber} for ${eventActivity} for ${firstDay} hours`;
  // "We paid "+eventActivity+" , $"+subtotalForOne+" for "firstDay" on "+weekNumber,""

    console.log(hoursStart)
    console.log(startTimeHours)
    console.log(startTimeMinutes)
    console.log(startMinutesConverted)
    console.log(startTimeCompleted)
    console.log(hoursEnd)
    console.log(endTimeHours)
    console.log(endTimeMinutes)
    console.log(endMinutesConverted)
    console.log(endTimeCompleted)
    console.log(firstDay)
    console.log(subtotalForOne)
    }


