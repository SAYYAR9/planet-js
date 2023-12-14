// const timeInput= document.getElementById('time-input')
// const timeSubmit=document.querySelector('#time-submit')
// const minuteEl= document.querySelector('#minute')
// const secondEl= document.querySelector('#second')

// const state ={
//     timerStarted: false,
//     defaultTime: 10
// }

// function divmod(division,divisor){
//     const result = Math.floor(division/divisor)
//     const mod = division % divisor 
//     return [result,mod]
// }
// function startTimer(time){
//     let totalSeconds= Number(time)*60
//     if (!state.timerStarted){
//         const interval = setInterval(() => {
//             const dm=divmod(totalSeconds,60)
//             const minute= dm[0]
//             const second= dm[1]
//            minuteEl.textContent=minute.toString().padStart(2, '0')
//            secondEl.textContent=second.toString().padStart(2, '0')
//            totalSeconds--
//            if (totalSeconds===-1) {
//                 clearInterval(interval)
//                 // alert('Muddet bitdi')
//            }
//         }, 100);
//     }
    
//     state.timerStarted=true


// }

// timeSubmit.onclick = () => {
//     const time = timeInput.value 
//     startTimer(time)
// }


// window.addEventListener('load', () =>{
//     setTimeout(() => {
//         startTimer(state.defaultTime)
//     }, 5000);
// }
// )