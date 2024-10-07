let train=[];
function add(){
 let trainname = document.getElementById("tname").value;
 let arrival = document.getElementById("atime").value;
 let departure = document.getElementById("dtime").value;
 train.push({
    trainname,arrival,departure
});
 displaySchedule();

 document.getElementById("tname").value='';
 document.getElementById("atime").value='';
 document.getElementById("dtime").value='';

 }
 function displaySchedule(){
    let output = '';
    train.forEach(train=>{
       output += `TrainName:${train.trainname},ArrivalTime:${train.arrival},DepartureTime:${train.departure}`
    });
   document.getElementById("Schedule").innerHTML = output;
 }
