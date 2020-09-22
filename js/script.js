//  text animation start
var TxtType = function(el, toRotate, period) { this.toRotate = toRotate; this.el = el; this.loopNum = 0; this.period = parseInt(period, 10) || 2000; this.txt = ''; this.tick(); this.isDeleting = false; }; TxtType.prototype.tick = function() { var i = this.loopNum % this.toRotate.length; var fullTxt = this.toRotate[i]; if (this.isDeleting) { this.txt = fullTxt.substring(0, this.txt.length - 1); } else { this.txt = fullTxt.substring(0, this.txt.length + 1); } this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>'; var that = this; var delta = 200 - Math.random() * 100; if (this.isDeleting) { delta /= 2; } if (!this.isDeleting && this.txt === fullTxt) { delta = this.period; this.isDeleting = true; } else if (this.isDeleting && this.txt === '') { this.isDeleting = false; this.loopNum++; delta = 500; } setTimeout(function() { that.tick(); }, delta); }; window.onload = function() { var elements = document.getElementsByClassName('typewrite'); for (var i=0; i<elements.length; i++) { var toRotate = elements[i].getAttribute('data-type'); var period = elements[i].getAttribute('data-period'); if (toRotate) { new TxtType(elements[i], JSON.parse(toRotate), period); } }
 // INJECT CSS
  var css = document.createElement("style"); css.type = "text/css"; css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}"; document.body.appendChild(css); };

// text animation end

  // tab section jquery code
      $(document).ready(function(){
          $(".tab-content-2").hide();
          $(".tab-content-3").hide();

          // if click on tab-1

          $(".tab-1").on("click",function(){
            $(".tab-content-1").show();
            $(".tab-content-3").hide();
            $(".tab-content-2").hide();

            $(".tab-1").addClass("active");
            $(".tab-2").removeClass("active");
            $(".tab-3").removeClass("active");
          });

          // if click on tab-2

          $(".tab-2").on("click",function(){
            $(".tab-content-1").hide();
            $(".tab-content-2").show();
            $(".tab-content-3").hide();

            $(".tab-1").removeClass("active");
            $(".tab-2").addClass("active");
            $(".tab-3").removeClass("active");

          });

          // if click on tab-3

          $(".tab-3").on("click",function(){
            $(".tab-content-1").hide();
            $(".tab-content-2").hide();
            $(".tab-content-3").show();

            $(".tab-1").removeClass("active");
            $(".tab-2").removeClass("active");
            $(".tab-3").addClass("active");

          });

      });
      // tab section jquery code