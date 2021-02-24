$(document).ready(function () {
  // Housekeeping
  $('#google-search').val('');

  // Create two variable with the names of the months and days in an array
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  function castDayTime() {
    let newDate = new Date();
    newDate.setDate(newDate.getDate());
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
  
    $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);
    $('#date-sm').html(monthNames[newDate.getMonth()] + " " + newDate.getDate());
  
    // Add a leading zero to  values
    seconds = (seconds < 10 ? "0" : "") + seconds;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    hours = (hours < 10 ? "0" : "") + hours;
  
    $('#time').html(hours + " : " + minutes + " : " + seconds);
    $('#time-sm').html(hours + " : " + minutes + " : " + seconds);
  }

  // Run the clock once
  castDayTime();

  // Now run it every second
  setInterval(function () {
    castDayTime();
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
          href += "www.reddit.com/u/fjolverkr";
          break;
        case "nav-gh":
          href += "www.github.com/fj0lverkr";
          break;
      }
      window.location.replace(href);
    });
  });
  // Set dynamic shadows
  $('.okshadow').each(function(){
    $(this).okshadow({
      color: '#292E39',
    });
  });
});

// Custom cursor movement
$(document).mousemove(function(e){
  $('.cursor').eq(0).css({
    left: e.clientX,
    top: e.clientY
  });
  setTimeout(function() {
    $('.cursor').eq(1).css({
      left: e.clientX,
      top: e.clientY
    });
  }, 100);
  setTimeout(function() {
    $('.cursor').eq(2).css({
      left: e.clientX,
      top: e.clientY
    });
  }, 250);
  setTimeout(function() {
    $('.cursor').eq(3).css({
      left: e.clientX,
      top: e.clientY
    });
  }, 400);
})
