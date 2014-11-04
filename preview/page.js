var imageCount = 1;

$('.code-button').on('click', function() {
  var currentImageId = imageCount;
  var nextImageId = imageCount + 1;
  
  if (imageCount == 3) {
    imageCount = 1;
    nextImageId = 1;
  }
  else {
    imageCount = imageCount + 1;
  }
  $('.image-div').addClass('image-' + nextImageId).removeClass('image-' + currentImageId)
  
  return false;
})

$('button').on('click', function() {
  BL_INTERNAL.sendEventToNative('CAPTURE_IMAGE', {})
  return false;
})

BL_INTERNAL.listenForNative('IMAGE_CAPTURED', function() {
  var d = new Date();
  dateString = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear() + ' ' + 
  formatAMPM(d);
  $('.verified-date').text(dateString);
})

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}