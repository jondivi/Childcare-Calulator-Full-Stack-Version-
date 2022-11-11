
// Get all buttons as a NodeList
const elBtn = document.querySelectorAll('.calcBtn')

// Convert buttons NodeList to an array
let arrElBtn = Array.from(elBtn).forEach(el => el.addEventListener('click', calcForRow))


// const calculateBtn = document.querySelectorAll('.calculcate')//.addEventListener('click',howMuch)
// Array.from(calculateBtn).forEach((element)=>{
// element.addEventListener('click', howMuch)
// })


function calcForRow(event){
  //This pulls the needed row info from the DOM
  const row = event.target.parentNode.parentNode
  //This pulls the starting value from the DOM
  const startTime =row.querySelector('.startTime').innerText
  //This pulls the ending value from the DOM
  const endTime = row.querySelector('.endTime').innerText
  //This sets the hourly rate value from the DOM
  const rate = row.querySelector('.rate').innerText
  //Console logs the above three elements we are targeting
  console.log(calcEventPrice(startTime, endTime, rate))
}


function calcEventPrice(hoursStart, hoursEnd, hourlyRate){
  

   //Hours
        //Start time  
          //This breaks the start value into a separate array for hours and minutes
          let startTimeHours=Number(hoursStart.substring(0, 2));
          // console.log(startTimeHours, ':start time: hours')
          let startTimeMinutes=Number(hoursStart.slice(3));
          // console.log(startTimeMinutes, ':start time: minutes')

          //This converts minutes to decimals
          let startMinutesConverted=startTimeMinutes/60
          // console.log(startMinutesConverted, ':start time: minutes converted to hours')

          //This joins the times back together
          let startTimeCompleted=startTimeHours+startMinutesConverted;
          console.log(startTimeCompleted, ':start time joined')
        
        //End time
          //This breaks the start value into a separate array for hours and minutes
          let endTimeHours=Number(hoursEnd.substring(0, 2));
          // console.log(endTimeHours, ':end time: hours')
          let endTimeMinutes=Number(hoursEnd.slice(3));
          // console.log(endTimeMinutes, ':end time: minutes')

          //This converts minutes to decimals
          let endMinutesConverted=endTimeMinutes/60
          // console.log(endMinutesConverted, ':end time: minutes converted to hours')

          //This joins the times back together
          let endTimeCompleted=endTimeHours+endMinutesConverted;
          console.log(endTimeCompleted, ':end time joined')    

        //Figures out elapsed time from data above
        let totalTime=endTimeCompleted-startTimeCompleted;
        console.log(totalTime, ':elapsed time')

  //Multiplies hour total by the rate and rounds the result

  const row = event.target.parentNode.parentNode
  const totalForDay =row.querySelector('.total').innerText

  const totalAmount=Math.round(hourlyRate*totalTime);
  console.log(totalAmount, ':total')
  row.querySelector('.total').innerText = `$${totalAmount}`
        
return totalForDay
return totalAmount

// document.querySelectorAll('#total').innerText= `$${totalAmount}`
}

// //inserts information in the DOM so the user can view it

  // document.querySelector('.calculcate').innerText= `$${totalForDay}`
  // console.log(`On ${dayOfThWeek} we spent ${totalTime} hours at ${eventActivity}, for a total of  $${totalForDay}`)
