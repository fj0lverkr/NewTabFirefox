$(document).ready(function () {
  // Housekeeping
  $('#google-search').val('');

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

  $(document).on('click', '.gsc-result a', function (e) {
    let win = window.open($(this).attr('href'), '_blank');
    if (win) {
      win.focus();
    } else {
      console.log('failed to open new tab from search result.')
    }

    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  });

  $(document).on('click', '.gsc-result', function (e) {
    let win = window.open($(this).find('a').attr('href'), '_blank');
    if (win) {
      win.focus();
    } else {
      console.log('failed to open new tab from search result.')
    }
    e.stopPropagation();
    e.stopImmediatePropagation();
  });

  $('.nav-fav').each(function(){
    $(this).on('click', function(){
      let href = "https://";
      console.log($(this).attr('id'));
      switch($(this).attr('id')){
        case "nav-yt":
          href += "www.youtube.com";
          break;
        case "nav-fb":
          href += "www.facebook.com";
          break;
        case "nav-ol":
          href += "www.outlook.com";
          break;
        case "nav-rd":
          href += "www.reddit.com/u/fj0lverkr";
          break;
        case "nav-gh":
          href += "www.github.com/fj0lverkr";
          break;
      }
      window.location.replace(href);
    });
  });
});
