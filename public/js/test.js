let eventNameActivity = document.querySelector('.eventName').innerHTML
console.log(eventNameActivity)


// Array.from(eventName).forEach(element => element.addEventListener('click', calc))

// function calc(){
// 	if(target.contains('.calculate')){
//     console.log(eventName)
//   }else{
//     console.log(false)
//   }
// }

// Array.from(eventName).forEach(element => element.addEventListener('click',howMuch)

//sets all the calculate buttons to listen for a click
// document.querySelector('#calculcate').addEventListener('click',howMuch)
// Array.from(calculateBtn).forEach((element)=>{
// element.addEventListener('click', howMuch)
// })
// const checkedOff = document.querySelectorAll('.checkbox, :checked');

// calcBtn.addEventListener('click',howMuch)


// function howMuch(){
  //Sets the name of the event
  // Array.from(checkedOff).forEach((element) =>{
    // let checkedOff = document.querySelector('#checkbox')

    // let eventActivity = document.querySelector('#eventName')
    // console.log(eventActivity)
    
      // console.log(('#eventActivity').innerHTML)
    
  // })
  // const eventActivityElement = document.querySelectorAll('#eventName')
    // let eventActivity = document.querySelectorAll('.checkbox, :checked');
    
    // let eventBtns = [];
    // let seventAc = document.querySelectorAll('#seventName')
    // eventActivity.forEach((checkbox) =>{
    // eventBtns.push(checkbox)
    // console.log(seventAc.innerHTML)
      
    // })
    

  // let eventActivityElement = eventActivity
    // console.log(eventActivity.innerHTML)

  // console.log(eventActivityElement.innerHTML, ':name')


  // let eventActivityElement = document.querySelectorAll('.eventName').forEach
  // Array.from(eventActivityElement).forEach((element)=>{element.innerHTML
    // console.log(eventActivityElement.innerHTML, ':name') 

  // Array.from(eventActivityElement).forEach((element)=> element.innerHTML)
  // let eventActivityElement=document.querySelectorAll('#eventName, :checked')
  // let eventActivityElement = eventActivity.forEach.call(document.querySelectorAll('#eventName, :checked'))
  //   console.log(eventActivityElement.innerHTML, ':name')

  
  
  // for(x = 1; x<eventActivityElement.length; x++){
  //   console.log(eventActivityElement.innerHTML, ':name')

  // }
  // Array.from(eventActivityElement).for(x => {
  //   console.log(x.innerHTML, ':name')
  // })
  
  // console.log (eventActivityElement.innerHTML)
  // let eventActivity = Array.from('.eventName')
  // return eventActivity.innerHTML
  // console.log(eventActivityElement, ':name') 


  // //This gives us the day of the event
  // let dayOfThWeek=document.querySelector('.weekDay').innerHTML
  // console.log(dayOfThWeek, ':date') 

  // //Hours
  //       //Start time    
  //         //This pulls the starting value from the DOM
  //         let hoursStart=document.querySelector('.startTime').innerHTML
  //         console.log(hoursStart, ':start time')

  //         //This breaks the start value into a separate array for hours and minutes
  //         let startTimeHours=Number(hoursStart.substring(0, 2));
  //         console.log(startTimeHours, ':start time: hours')
  //         let startTimeMinutes=Number(hoursStart.slice(3));
  //         console.log(startTimeMinutes, ':start time: minutes')

  //         //This converts minutes to decimals
  //         let startMinutesConverted=startTimeMinutes/60
  //         console.log(startMinutesConverted, ':start time: minutes converted to hours')

  //         //This joins the times back together
  //         let startTimeCompleted=startTimeHours+startMinutesConverted;
  //         console.log(startTimeCompleted, ':start time joined')
        
  //       //End time
  //         //This pulls the ending value from the DOM
  //         let hoursEnd=document.querySelector('.endTime').innerHTML
  //         console.log(hoursEnd, ':end time')

  //         //This breaks the start value into a separate array for hours and minutes
  //         let endTimeHours=Number(hoursEnd.substring(0, 2));
  //         console.log(endTimeHours, ':end time: hours')
  //         let endTimeMinutes=Number(hoursEnd.slice(3));
  //         console.log(endTimeMinutes, ':end time: minutes')

  //         //This converts minutes to decimals
  //         let endMinutesConverted=endTimeMinutes/60
  //         console.log(endMinutesConverted, ':end time: minutes converted to hours')

  //         //This joins the times back together
  //         let endTimeCompleted=endTimeHours+endMinutesConverted;
  //         console.log(endTimeCompleted, ':end time joined')    

  //       //Figures out elapsed time from data above
  //       let totalTime=endTimeCompleted-startTimeCompleted;
  //       console.log(totalTime, ':elapsed time')

  // //This sets the hourly rate value from the DOM
  // let hourlyRate=document.querySelector('.rate').innerHTML
  // console.log(hourlyRate, ':rate')

  // //Multiplies hour total by the rate and rounds the result
  // let totalForDay=Math.round(hourlyRate*totalTime);
  // console.log(totalForDay, ':total')
        
  // //inserts information in the DOM so the user can view it
  // document.querySelector('.calculcate').innerText= `$${totalForDay}`
  // console.log(`On ${dayOfThWeek} we spent ${totalTime} hours at ${eventActivity}, for a total of  $${totalForDay}`)

// }

// contestants = document.querySelectorAll('.contestant')

// Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

// function checkForRose(click){
// 	if(click.target.classList.contains('rose')){
// 		console.log("Nicki")
// 	}else{
// 		console.log("Wrong!");
// 	}
// }