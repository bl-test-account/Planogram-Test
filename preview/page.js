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
  $('#imageDiv').addClass('image-' + nextImageId).removeClass('image-' + currentImageId)
  
  return false;
})

$('button').on('click', function() {
  BL_INTERNAL.sendEventToNative('CAPTURE_IMAGE', {})
  return false;
})