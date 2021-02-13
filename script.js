$(document).ready(function () {
  // Housekeeping
  $('#google-search').val('');
  $('#google-results-wrapper').hide();


  // Create two variable with the names of the months and days in an array
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  // Run the clock once 
  let newDate = new Date();
  newDate.setDate(newDate.getDate());
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);

  // Add a leading zero to  values
  seconds = (seconds < 10 ? "0" : "") + seconds;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  hours = (hours < 10 ? "0" : "") + hours;

  $('#time').html(hours + " : " + minutes + " : " + seconds);

  // Now run it every second
  setInterval(function () {
    let newDate = new Date();
    newDate.setDate(newDate.getDate());
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();

    $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);

    // Add a leading zero to  values
    seconds = (seconds < 10 ? "0" : "") + seconds;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    hours = (hours < 10 ? "0" : "") + hours;

    $('#time').html(hours + " : " + minutes + " : " + seconds);

  }, 1000);

  $('#google-search').on('input', function () {
    if (this.value.length > 0) {
      console.log(this.value);
      $('#google-results-wrapper').show();
    } else {
      $('#google-results-wrapper').hide();
    }
  });

});
