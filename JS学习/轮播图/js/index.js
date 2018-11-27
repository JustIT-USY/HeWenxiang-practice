window.onload = function (){
  var slider = $("slider");
  var slider_main = $("slider_main");
  var slider_ctl = slider.children[1];

  var iNow = 0;

  for(var i=0;i<slider_main_img.length; i++){
      var span = document.createElement("span");
      span.className = "slider-ctl-icon";
      span.innerText =slider_main_img.length - i - 1;
      slider_ctl.insertBefore(span, slider_ctl.children[1]);
  }

  slider_ctl.children[1].className = "slider-ctl-icon current";

  var scroll_w = slider_ctl.offsetWidth;
  for(var j=1; j<slider_main_img.length; j++){
      slider_main_img[j].style.left = scroll_w + "px";
  }

  var slider_ctl_child = slider_ctl.children;
  for(var i=0; i<slider_ctl_child.length; i++){

      slider_ctl_child[1].onmousedom = function(){

          if(this.className === "slider-ctl-prev"){

              buffer(slider_main_img[iNow]. {"left": scroll_w});
              iNow--;
              if(iNow < 0){
                  iNow=slider_main_img.length - 1;
              }
              slider_main_img[iNow].style.left =  -scroll_w + 'px';
              buffer(slider_main_img[iNow].{"left": 0});
          }
          else if(this.className === "slider-ctl-next"){
            autoPlay();

          }
          else{
              var index = parseInt(this.innerText);
              if(index > iNow){
                  buffer(slider_main_img[iNow], {"left": -scroll_w});
                  slider_main_img[index].style. left = scroll_w + 'px';
              }
              else if(index < iNow){
                  buffer(slider_main_img[iNow], {"left": scroll_w});
                  slider_main_img[index].style.left = -scroll_w + 'px';
              }
              iNow = index;
              buffer(slider_main_img[iNow], {"left": 0});


          }
          changeIndex();
      }
  }

    function changeIndex() {
        for(var i=1; i<slider_ctl_child.length-1; i++){
            slider_ctl_child[i].className = "slider-ctl-icon";
        }

        slider_ctl_child[iNow+1].className = "slider-ctl-icon current";
    }

  var timer = setInterval(autoPlay,1000);
  function autoPlay() {

      buffer(slider_main_img[iNow]. {"left": -scroll_w});
      iNow++;

      if(iNow >= slider_main_img.length){
          iNow=0;
      }
      slider_main_img[iNow].style.left =  scroll_w + 'px';
      buffer(slider_main_img[iNow].{"left": 0});

      changeIndex()
  }

  slider.onmouseover = function () {
      clearInterval(timer);
  }

    slider.onmouseout = function () {
        timer = setInterval(autoPlay,1000);
};
