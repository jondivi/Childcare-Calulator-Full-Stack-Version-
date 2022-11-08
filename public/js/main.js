document.querySelector('#calculcate').addEventListener('click',howMuch)

function howMuch(){
  //Sets the name of the event 
  let eventActivity=document.querySelector('#eventName').innerHTML
  console.log(eventActivity, ':name') 


  //This gives us the day of the event
  let dayOfThWeek=document.querySelector('#weekDay').innerHTML
  console.log(dayOfThWeek, ':date') 

  //Hours
        //Start time    
          //This pulls the starting value from the DOM
          let hoursStart=document.querySelector('#startTime').innerHTML
          console.log(hoursStart, ':start time')

          //This breaks the start value into a separate array for hours and minutes
          let startTimeHours=Number(hoursStart.substring(0, 2));
          console.log(startTimeHours, ':start time: hours')
          let startTimeMinutes=Number(hoursStart.slice(3));
          console.log(startTimeMinutes, ':start time: minutes')

          //This converts minutes to decimals
          let startMinutesConverted=startTimeMinutes/60
          console.log(startMinutesConverted, ':start time: minutes converted to hours')

          //This joins the times back together
          let startTimeCompleted=startTimeHours+startMinutesConverted;
          console.log(startTimeCompleted, ':start time joined')
        
        //End time
          //This pulls the ending value from the DOM
          let hoursEnd=document.querySelector('#endTime').innerHTML
          console.log(hoursEnd, ':end time')

          //This breaks the start value into a separate array for hours and minutes
          let endTimeHours=Number(hoursEnd.substring(0, 2));
          console.log(endTimeHours, ':end time: hours')
          let endTimeMinutes=Number(hoursEnd.slice(3));
          console.log(endTimeMinutes, ':end time: minutes')

          //This converts minutes to decimals
          let endMinutesConverted=endTimeMinutes/60
          console.log(endMinutesConverted, ':end time: minutes converted to hours')

          //This joins the times back together
          let endTimeCompleted=endTimeHours+endMinutesConverted;
          console.log(endTimeCompleted, ':end time joined')    

        //Figures out elapsed time from data above
        let totalTime=Math.round(endTimeCompleted-startTimeCompleted);
        console.log(totalTime, ':elapsed time')

  //This sets the hourly rate value from the DOM
  let hourlyRate=document.querySelector('#rate').innerHTML
  console.log(hourlyRate, ':rate')

  //Multiplies hour total by the rate and rounds the result
  let totalForDay=Math.round(hourlyRate*totalTime);
  console.log(totalForDay, ':total')
        
    
  //inserts information in the DOM so the user can view it
  // alert(`$${subtotalForOne} spent on ${weekNumber} for ${eventActivity} for ${firstDay} hours`);
  
  // document.querySelector('#total').innerText= `$${totalForDay} spent on ${dayOfThWeek} for ${eventActivity} for ${totalTime} hours`;
  document.querySelector('#total').innerText= `On ${dayOfThWeek} we spent ${totalTime} hours at ${eventActivity}, for a total of  $${totalForDay}`

  console.log(`On ${dayOfThWeek} we spent ${totalTime} hours at ${eventActivity}, for a total of  $${totalForDay}`)

  // "We paid "+eventActivity+" , $"+subtotalForOne+" for "firstDay" on "+weekNumber,""
}


