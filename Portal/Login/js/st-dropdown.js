(function($){
$(document).ready(function(){		

	// Hover Fading CSS Dropdown
	$('.fade-dropdown').stDropdown({ 
		mode: 'hover'
	});		
	
	// Click Dropdown
	$('.click-dropdown').stDropdown({ 
		mode: 'simple'
	});
	
	// Click Fading Dropdown
	$('.click-fade-dropdown').stDropdown();
	
	// Click Arrow with Simple Up Dropdown
	$('.dropdown-up').stDropdown({ 
		mode: 'arrow', 
		show: 'above'
	});
	
	// Click Arrow with Simple Down Dropdown
	$('.dropdown-down').stDropdown({ 
		mode: 'arrow'
	});
	
	// Hover Arrow with Fading Up Dropdown
	$('.dropdown-hover-up').stDropdown({ 
		mode: 'arrow', 
		show: 'hoverAbove'
	});
	
	// Hover Arrow with Fading Down Dropdown
	$('.dropdown-hover-down').stDropdown({ 
		mode: 'arrow', 
		show: 'hoverBelow'
	});
	
	// Click Arrow with Fading Up Dropdown
	$('.dropdown-fade-up').stDropdown({ 
		mode: 'arrow', 
		show: 'fadeAbove' 
	});
	
	// Click Arrow with Fading Down Dropdown
	$('.dropdown-fade-down').stDropdown({ 
		mode: 'arrow', 
		show: 'fadeBelow'
	});
	
	// Click Arrow with Sliding Up Dropdown
	$('.dropdown-slide-up').stDropdown({ 
		mode: 'arrow', 
		show: 'slideAbove'
	});
	
	// Click Arrow with Sliding Down Dropdown
	$('.dropdown-slide-down').stDropdown({ 
		mode: 'arrow', 
		show: 'slideBelow'
	});
	
	// Click Arrow with Fading Up Paragraph
	$('.dropdown-para-up').stDropdown({ 
		mode: 'arrow', 
		show: 'fadeAbove'
	});
	
	// Click Arrow with Fading Down Paragraph
	$('.dropdown-para-down').stDropdown({ 
		mode: 'arrow', 
		show: 'fadeBelow'
	});
	
	// Click Arrow with Animating Up Paragraph
	$('.dropdown-anim-para-up').stDropdown({ 
		mode: 'arrow', 
		show: 'fadeAbove',
		effect: 'anim'
	});
	
	// Click Arrow with Animating Down Paragraph
	$('.dropdown-anim-para-down').stDropdown({ 
		mode: 'arrow', 
		show: 'fadeBelow',
		effect: 'anim'
	});
	
});
}(jQuery));