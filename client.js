// This file's full path is /public/client.js
$(document).ready(function () {
   /* Global io */
   let socket = io();
  //  io.connect('https://hattila-fcc-advancednode.herokuapp.com/')
 
   // Form submittion with new message in field with id 'm'
   $('form').submit(function () {
     let messageToSend = $('#m').val();
     // Send message to server here?
     $('#m').val('');
     return false; // Prevent form submit from refreshing page
   });
 });