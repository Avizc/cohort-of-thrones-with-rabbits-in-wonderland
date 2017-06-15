'use strict';

//APP INITIALISES
const appState={
  pairingsList:[],
  showPairingsList:true,
};
//STATE MODS
function initialisePairsPage(state){
  state.showPairingsList=true;
}
//RENDER
function render(state){
  let presentPairingsList='';
  let htmlDisplay='';
  if(state.showPairingsList===true){
    state.pairingsList.forEach(element => {
      //htmlDisplay += `<div class="show-daily-pairs"><div class="col-6 left-names"><p>${element.name1}</p></div><div class="col-6 right-names"><p>${element.name2}</p></div></div>`
      htmlDisplay += `<p>${element.name1} & ${element.name2}</p>`
      //console.log("This is partner 1: " + element.name1);
      //console.log("This is partner 2: " + element.name2);
      console.log("This is the render: " + htmlDisplay);
    }); 
    $('.student-pairings-chart').html(htmlDisplay);
        //state.showPairingsList
  }
  else{
    presentPairingsList+='<p>No pairings</p>';
  }
}
//EVENT HANDLERS
function eventHandlers(){
  render(appState);
}
//localhost:8080/cohort_members
function getContents(){
  $.ajax({
    url: '/admin/todays_pairs/',
    type: 'GET',
    dataType: 'json',
    success: function(json){
      //console.log("These are the pairings: " + json);
      //console.log(json);
      appState.pairingsList=json;
      render(appState);
    },
        // success: function(result){
        //     $('.student-pairings-chart').html(result);
  });
}
// let testShowing;
// $.get('/todays_pairs', function(result){
//     testShowing=result;
// })
// $.getJSON('/server.js', function(){
    
// })
// $(.student-pairings-chart).load('/');
// console.log(response);

//RUN THIS CUTENESS
$(function(){
  eventHandlers();
  getContents();
  render(appState,'');
});