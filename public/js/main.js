
// document.querySelector('.calculcate').addEventListener('click',howMuch)

// Get all buttons as a NodeList
const elBtn = document.querySelectorAll('.calcBtn')
//From that array of elements lets check to see if any of them are clicked

// Convert buttons NodeList to an array
let arrElBtn = Array.from(elBtn).forEach(el => el.addEventListener('click', calcForRow))


// const calculateBtn = document.querySelectorAll('.calculcate')//.addEventListener('click',howMuch)
// Array.from(calculateBtn).forEach((element)=>{
// element.addEventListener('click', howMuch)
// })


function calcForRow(event){
  const row = event.target.parentNode.parentNode
  const startTime =row.querySelector('.startTime').innerText
  const endTime = row.querySelector('.endTime').innerText
  const rate = row.querySelector('.rate').innerText
  console.log(calcEventPrice(startTime, endTime, rate))
}


function calcEventPrice(hoursStart, hoursEnd, hourlyRate){
   //Hours
        //Start time    
          //This pulls the starting value from the DOM
          

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
        let totalTime=endTimeCompleted-startTimeCompleted;
        console.log(totalTime, ':elapsed time')

  //This sets the hourly rate value from the DOM

  //Multiplies hour total by the rate and rounds the result
  let totalForDay=Math.round(hourlyRate*totalTime);
  console.log(totalForDay, ':total')
        
return totalForDay
}