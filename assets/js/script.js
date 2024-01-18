window.onload = function() {
  var images = document.querySelectorAll('.gallery figure img');
  
  images.forEach(function(img) {
    var imgElement = new Image();
    
    imgElement.onload = function() {
      if (this.width > this.height) {
        img.classList.add('horizontal');
      } else {
        img.classList.add('vertical');
      }
    };
    
    imgElement.src = img.src;
    console.log(imgElement.src);
  });
};