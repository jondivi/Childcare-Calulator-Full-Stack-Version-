
// document.querySelector('.calculcate').addEventListener('click',howMuch)

// Get all buttons as a NodeList
const elBtn = document.querySelectorAll('.eN')
//From that array of elements lets check to see if any of them are clicked

// Convert buttons NodeList to an array
let arrElBtn = Array.from(elBtn).forEach(el => el.addEventListener('click', howMuch))


// const calculateBtn = document.querySelectorAll('.calculcate')//.addEventListener('click',howMuch)
// Array.from(calculateBtn).forEach((element)=>{
// element.addEventListener('click', howMuch)
// })


function howMuch(){
  //Sets the name of the event
  // const eventActivityElement = document.querySelector('.eventName').innerHTML
  // let eventActivity=document.querySelector('.eventName').innerHTML
  // console.log(eventActivity, ':name') 
  // let eventActivityElement = document.querySelectorAll('.eventName').forEach
  // Array.from(eventActivityElement).forEach((element)=>{element.innerHTML
    // console.log(eventActivityElement.innerHTML, ':name') 

  // Array.from(eventActivityElement).forEach((element)=> element.innerHTML)
  // let eventActivityElement=document.querySelectorAll('.eventName')
  // Array.from(eventActivityElement).forEach(x => {
    console.log([arrElBtn].innerText, ':name')
 // // })
  
  // console.log (eventActivityElement.innerHTML)
  // let eventActivity = Array.from('.eventName')
  // return eventActivity.innerHTML
  // console.log(eventActivityElement, ':name') 













  // // //This gives us the day of the event
  // let dayOfThWeek=document.querySelector('.weekDay').innerHTML
  // console.log(dayOfThWeek, ':date') 

  // // //Hours
  // //       //Start time    
  // //         //This pulls the starting value from the DOM
  //            let hoursStart=document.querySelector('.startTime').innerHTML
  //            console.log(hoursStart, ':start time')

  // //         //This breaks the start value into a separate array for hours and minutes
  //            let startTimeHours=Number(hoursStart.substring(0, 2));
  //            console.log(startTimeHours, ':start time: hours')
  //            let startTimeMinutes=Number(hoursStart.slice(3));
  //            console.log(startTimeMinutes, ':start time: minutes')

  // //         //This converts minutes to decimals
  //         let startMinutesConverted=startTimeMinutes/60
  //         console.log(startMinutesConverted, ':start time: minutes converted to hours')

  // //         //This joins the times back together
  //         let startTimeCompleted=startTimeHours+startMinutesConverted;
  //         console.log(startTimeCompleted, ':start time joined')
        
  // //       //End time
  // //         //This pulls the ending value from the DOM
  //         let hoursEnd=document.querySelector('.endTime').innerHTML
  //         console.log(hoursEnd, ':end time')

  // //         //This breaks the start value into a separate array for hours and minutes
  //         let endTimeHours=Number(hoursEnd.substring(0, 2));
  //         console.log(endTimeHours, ':end time: hours')
  //         let endTimeMinutes=Number(hoursEnd.slice(3));
  //         console.log(endTimeMinutes, ':end time: minutes')

  // //         //This converts minutes to decimals
  //         let endMinutesConverted=endTimeMinutes/60
  //         console.log(endMinutesConverted, ':end time: minutes converted to hours')

  // //         //This joins the times back together
  //         let endTimeCompleted=endTimeHours+endMinutesConverted;
  //         console.log(endTimeCompleted, ':end time joined')    

  // //       //Figures out elapsed time from data above
  //       let totalTime=endTimeCompleted-startTimeCompleted;
  //       console.log(totalTime, ':elapsed time')

  // // //This sets the hourly rate value from the DOM
  // let hourlyRate=document.querySelector('.rate').innerHTML
  // console.log(hourlyRate, ':rate')

  // // //Multiplies hour total by the rate and rounds the result
  // let totalForDay=Math.round(hourlyRate*totalTime);
  // console.log(totalForDay, ':total')
        
  // // //inserts information in the DOM so the user can view it
  // document.querySelector('.calculcate').innerText= `$${totalForDay}`
  // // console.log(`On ${dayOfThWeek} we spent ${totalTime} hours at ${eventActivity}, for a total of  $${totalForDay}`)

}


