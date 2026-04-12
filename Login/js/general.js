/*---------------------------------------------------------------------*/
;(function($){

/*================= Global Variable Start =================*/		   
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var IEbellow9 = !$.support.leadingWhitespace;
var iPhoneAndiPad = /iPhone|iPod/i.test(navigator.userAgent);
var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
function isIEver () {
  var myNav = navigator.userAgent.toLowerCase();
  return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
}
//if (isIEver () == 8) {}
		   
var jsFolder = "js/";
var cssFolder = "css/";	
var ww = document.body.clientWidth, wh = document.body.clientHeight;
var mobilePort = 800, ipadView = 1024, wideScreen = 1600;

/*================= Global Variable End =================*/	

//css3 style calling 
document.write('<link rel="stylesheet" type="text/css" href="' + cssFolder +'animate.css">');	

/*================= On Document Load Start =================*/	
$(document).ready( function(){
	$('body').removeClass('noJS').addClass("hasJS");
	$(this).scrollTop(0);
	getWidth();
	
	//Set Element to vertical center using padding
	 $.fn.verticalAlign = function () {return this.css("padding-top", ($(this).parent().height() - $(this).height()) / 2 + 'px');};
	 
	setTimeout(function(){
		$('.vCenter').each(function () {$(this).verticalAlign();});
	}, 800);
	
	
	
	$(".customSelect").customSelect();
	
	$('input.inputicheck').iCheck({
   	 checkboxClass: 'icheckbox_square',
   	 radioClass: 'iradio_square'
	});
	
	$(".hideDetail a").click(function(event){
		event.preventDefault();
		$(".tenderDtlBoxHide").slideToggle();
		$(this).toggleClass("active");
		if ($(this).html() == 'Show Details <span class="fa fa-chevron-up"></span>')
       $(this).html('Hide  Details <span class="fa fa-chevron-up"></span>')
    else
       $(this).html('Show Details <span class="fa fa-chevron-up"></span>');
	});
	
	
		$(".hideDetail2 a").click(function(event){
		event.preventDefault();
		$(".tenderDtlBoxHide2").slideToggle();
		$(this).toggleClass("active");
		if ($(this).html() == 'Hide Details <span class="fa fa-chevron-up"></span>')
       $(this).html('Show  Details <span class="fa fa-chevron-down"></span>')
    else
       $(this).html('Hide Details <span class="fa fa-chevron-up"></span>');
	});
		
	// custom upload
	
	$('input.fileUpload').change(function() {
        var val = ($(this).val() != "") ? $(this).val() : "No file selected.";
		if(val.match(/fakepath/)) {
				// update the file-path text using case-insensitive regex
				val = val.replace(/C:\\fakepath\\/i, '');
		}
        $('.filename').text(val);
    });
	
	
	// Responsive Tabing Script
	if( $(".resTab").length) {
		$('.resTab').responsiveTabs({
			 rotate: false
			,startCollapsed: 'tab' //accordion
			,collapsible: 'accordion' //accordion
			,scrollToAccordion: true
			,scrollToAccordionOnLoad:false
		});
	};
				
	if( $(".accordion").length){
	   $('.accordion .accordDetail').hide();
	   $(".accordion .accordDetail:first").show(); 
	   $(".accordion .accTrigger:first").addClass("active");	
	   $('.accordion .accTrigger').click(function(){										 
		  if ($(this).hasClass('active')) {
			   $(this).removeClass('active');
			   $(this).next().slideUp();
		  } else {
			  if ($('body').hasClass('desktop')) {
			   $('.accordion .accTrigger').removeClass('active');
			   $('.accordion .accordDetail').slideUp();
			  }
			   $(this).addClass('active');			   
			   $(this).next().slideDown();
		  }
		  return false;
	   });
	};
	
	if( $(".tableData").length > 0){
		$('.tableData').each(function(){
			$(this).wrap('<div class="tableOut"></div>');
			$(this).find('tr').each(function(){
			$(this).find('td:first').addClass('firstTd');
			$(this).find('th:first').addClass('firstTh');
			$(this).find('th:last').addClass('lastTh');
			});
			$(this).find('tr:last').addClass('lastTr');
			$(this).find('tr:even').addClass('evenRow');
			$(this).find('tr:nth-child(2)').find('th:first').removeClass('firstTh');
		});	
	};
	
	// Responsive Table
	if( $(".responsiveTable").length){
		$(".responsiveTable").each(function(){		
		$(this).find('td').removeAttr('width');
		//$(this).find('td').removeAttr('align');
		var head_col_count =  $(this).find('tr th').size();
		// loop which replaces td
		for ( i=0; i <= head_col_count; i++ )  {
			// head column label extraction
			var head_col_label = $(this).find('tr th:nth-child('+ i +')').text();
			// replaces td with <div class="column" data-label="label">
			$(this).find('tr td:nth-child('+ i +')').attr("data-label", head_col_label);
		}
		});
	};
	
	// Responsive Table
	if( $(".tableScroll").length){
		$(".tableScroll").each(function(){
			$(this).wrap('<div class="tableOut"></div>');
		});
	};
	
	// Back to Top function
	if( $("#backtotop").length){
		$(window).scroll(function(){
			if ($(window).scrollTop()>120){
			$('#backtotop').fadeIn('250').css('display','block');}
			else {
			$('#backtotop').fadeOut('250');}
		});
		$('#backtotop').click(function(){
			$('html, body').animate({scrollTop:0}, '200');
			return false;
		});
	};
	
	//magnify pop up
	


  
  $('.popup-with-form').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function() {
              if($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = '#name';
              }
            }
          }
        });
		
	$('.popup-with-grid').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function() {
              if($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = '#name';
              }
            }
          }
        });	
		$('.popup-with-view').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function() {
              if($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = '#name';
              }
            }
          }
        });	
		$('.popup-email').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function() {
              if($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = '#name';
              }
            }
          }
        });	
		$('.tender-details').magnificPopup({
          type: 'inline',
          preloader: false,
          focus: '#name',

          // When elemened is focused, some mobile browsers in some cases zoom in
          // It looks not nice, so we disable it:
          callbacks: {
            beforeOpen: function() {
              if($(window).width() < 700) {
                this.st.focus = false;
              } else {
                this.st.focus = '#name';
              }
            }
          }
        });	

	
	
	// Get Focus Inputbox
	if( $(".getFocus").length){
			$(".getFocus").each(function(){
			$(this).on("focus", function(){
			if ($(this).val() == $(this)[0].defaultValue) { $(this).val("");};
		  }).on("blur", function(){
			  if ($(this).val() == "") {$(this).val($(this)[0].defaultValue);};
		  });								  
		});
	};
	
	// For device checking
	if (isMobile == false) {
	
	};
	
	if( $(".litebox").length){	
		$('.litebox').liteBox();
	};	
	
	setTimeout (function(){
		if( $(".fixedErrorMsg").length){					 
			$(".fixedErrorMsg").slideDown("slow");				 
			setTimeout( function(){$('.fixedErrorMsg').slideUp();},5000 );
		}
		if( $(".fixedSuccessMsg").length){					 
			$(".fixedSuccessMsg").slideDown("slow");				 
			setTimeout( function(){$('.fixedSuccessMsg').slideUp();},5000 );
		}
	},500);
	
	/*================= On Document Load and Resize Start =================*/
	$(window).on('resize', function () {
									 
		ww = document.body.clientWidth; 
		wh = document.body.clientHeight;		
		
		$('.vCenter').each(function () {$(this).verticalAlign();});	
		
		if($("body").hasClass("mobilePort")){
			$("body").removeClass("wob");
		}
		
		//$('.container').resize(function(){});
		
    }).trigger('resize');
	/*================= On Document Load and Resize End =================*/
	
	/*Navigation */
	if( $("#nav").length) {
		if($(".toggleMenu").length == 0){
			$("#mainNav").prepend('<a href="#" class="toggleMenu"><span class="mobileMenu">Menu</span><span class="iconBar"></span></a>');	
		}
		$(".toggleMenu").click(function() {
			$(this).toggleClass("active");
			$("#nav").slideToggle();
			return false;
		});
		$("#nav li a").each(function() {
			if ($(this).next().length) {
				$(this).parent().addClass("parent");
			};
		})
		$("#nav li.parent").each(function () {
			if ($(this).has(".menuIcon").length <= 0) $(this).append('<i class="menuIcon">&nbsp;</i>')
		});
		dropdown('nav', 'hover', 1);
		adjustMenu();	
	};
	
if($('.datepicker').length){
	$.datepicker.setDefaults({
	  showOn: "both"
	  ,dateFormat:"dd/mm/yy"
	  ,changeMonth: true
	  ,changeYear: true
	  //,buttonImage: "images/calendar.png"
	 //,buttonImageOnly: true
	  ,shortYearCutoff: 50
	  ,buttonText: "<span class='sprite calIcon'></span>"
	  ,beforeShow: function (textbox, instance) {
		instance.dpDiv.css({
			marginTop: /*(textbox.offsetHeight)*/ 0 + 'px'
			,marginLeft: 0 + 'px'
		});
		}
	});
	
	$( ".datepicker" ).datepicker({
		   dateFormat:"dd/mm/yy"
		   ,showOn: "both"
		   ,buttonText: "<span class='sprite calIcon'></span>"
		   ,shortYearCutoff: 50
		 //,buttonImage: "images/calendar.png"
		 //,buttonImageOnly: true
		   ,beforeShow: function (textbox, instance) {
			instance.dpDiv.css({
					marginTop: /*(textbox.offsetHeight)*/ 0 + 'px'
					,marginLeft: 0 + 'px'
					});
			}
	  });	
}

if( $(".datetimepicker").length){
	$( ".datetimepicker" ).datetimepicker({
           dateFormat:"dd-mm-yy", 
           showOn: "both",
		   buttonText: "<span class='sprite calIcon'></span>",
           //buttonImage: "images/calendar.png"
           //buttonImageOnly: true,
		   beforeShow: function (textbox, instance) {
            instance.dpDiv.css({
                    marginTop: /*(textbox.offsetHeight)*/ 15 + 'px',
                    marginLeft: -13 + 'px'
            		});
    		}
      });
}


$('#selectShow').on('change', function() {						  
  if ( this.value == '1')
  {
	$("#selectShowDiv").show();
  }
  else
  {
	$("#selectShowDiv").hide();
  }
});

$("#ConsortiumShow").hide();
$('#Consortium').on('change', function() {						  
  if ( this.value == '1')
  {
	$("#ConsortiumShow").show();
  }
  else
  {
	$("#ConsortiumShow").hide();
  }
});


$("#director").hide();
$('#selectPerson').on('change', function() {						  
  if ( this.value == '1')
  {
	$("#accountManager").hide();
	$("#director").show();
  }
  else
  {
	$("#accountManager").show();
	$("#director").hide();
  }
});


$("#preBidUploadShow").hide();
$('#prebidquery_5').on('ifChanged', function() {
	$('#preBidUploadShow').show();  
});
$('#prebidquery_6').on('ifChanged', function() {
	$('#preBidUploadShow').hide();  
});

$("#showRadio1, #showRadio2").hide();
$('#prebidquery_0').on('ifChanged', function() {
	$('#showRadio1').show();  
});
$('#prebidquery_1').on('ifChanged', function() {
	$('#showRadio1').hide();  
});

$('#prebidquery_3').on('ifChanged', function() {
	$('#showRadio2').show(); 
});
$('#prebidquery_4').on('ifChanged', function() {
	$('#showRadio2').hide(); 
});


$(".tenderDtlBoxHide").hide();
$('#tenderSubmit').change(function(){
        if($('#tenderSubmit').val() == '0') {
            $('.tenderDtlBoxHide').hide(); 
        } else {
            $('.tenderDtlBoxHide').show(); 
        } 
    });



$(".prospectScrollBox").mCustomScrollbar({
					callbacks:{
						onScroll:function(){
							onScrollCallback();
						},
						onTotalScroll:function(){
							onTotalScrollCallback();
						},
						onTotalScrollOffset:40,
						onTotalScrollBack:function(){
							onTotalScrollBackCallback();
						},
						onTotalScrollBackOffset:20
					}
				});
var randomNum = Math.floor((Math.random() * 100));
$('#gaugeTarget .gauge-arrow').trigger('updateGauge', randomNum);
$('#gaugeTarget .gauge-arrow').cmGauge();

$(".GaugeMeter").gaugeMeter();
$(".GaugeMeterBig").gaugeMeterBig();		
	
	// Message on Cookie Disabled
	//$.cookie('cookieWorked', 'yes', { path: '/' });
	//if ($.cookie('cookieWorked') == 'yes') {
		//}
	//else{
		//if( $("div.jsRequired").length == 0){
			//$("body").prepend(
				//'<div class="jsRequired">Cookies are not enabled on your browser. Need to adjust this in your browser security preferences. Please enable cookies for better user experience.</div>'
			//);	
		//}
	//}
	
});
/*================= On Document Load End =================*/

/*================= On Window Resize Start =================*/	
$(window).bind('resize orientationchange', function() {
	getWidth();												
	adjustMenu();
	$('.vCenter').each(function () {$(this).verticalAlign();});
});

/*================= On Window Resize End =================*/	

/*================= On Window Load Start =================*/
$(window).load(function() {
		startTime();				
});
/*================= On Document Load End =================*/


function getWidth() {
	ww = document.body.clientWidth;
	if(ww>wideScreen){$('body').removeClass('device').addClass('desktop widerDesktop');}
	if(ww>mobilePort && ww<=wideScreen){	$('body').removeClass('device widerDesktop').addClass('desktop');}
	if(ww<=mobilePort) {$('body').removeClass('desktop widerDesktop').addClass('device');}
	if(ww > 767 && ww < 1025){$('body').addClass('ipad');}
	else {$('body').removeClass('ipad');}	
}

})(jQuery);


function validate() {
    return false;
};


function startTime()  
{  
	var today = new Date();  
	var h = today.getHours();  
	var m = today.getMinutes();  
	var s = today.getSeconds();  
	var d = new Date();  
	var n = d.getDate();  
	var month = new Array();  
	month[0] = "01";  
	month[1] = "02";  
	month[2] = "03";  
	month[3] = "04";  
	month[4] = "05";  
	month[5] = "06";  
	month[6] = "07";  
	month[7] = "08";  
	month[8] = "09";  
	month[9] = "10";  
	month[10] = "11";  
	month[11] = "12";  
	var t = month[d.getMonth()];  
	var y = d.getFullYear();  
	m = checkTime(m);  
	s = checkTime(s);  
	document.getElementById('dashboardDate')  
		.innerHTML = n + "-" + t + "-" + y; 
	document.getElementById('dashboardTime')  
		.innerHTML = h + ":" + m + ":" + s; 
	var t = setTimeout(function ()  
	{  
		startTime()  
	}, 500);  
}  

function checkTime(i)  
{  
	if(i < 10)  
	{  
		i = "0" + i  
	}; // add zero in front of numbers < 10  
	return i;  
}  

 
    /* Main Menu OnClick Show JS Start */
    $(function(){
    $('.dashboardLeftNav li.expandMenu > a').on('click',function(event){
    $(this).parent().siblings('.dashboardLeftNav li.expandMenu').removeClass('opened');
    $(this).parent('.dashboardLeftNav li.expandMenu').addClass('opened');  
    event.preventDefault()
    });
    });

    $(document).ready(function(){
    $(".containtSection").click(function(){
     $('.dashboardLeftNav li.expandMenu').removeClass("opened");
    });
    });
    /* Main Menu OnClick Show JS End */
 