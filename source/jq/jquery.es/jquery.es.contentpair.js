/**
 * Helper to create a page with a LHS and a RHS.
 * This helper relies on jquery theme helper 'ui-helper-clearfix'
 * This can be done away with by using a <div style='{clear:both}'></div> as the last element
 * inside the outer containing div.
 * 
 * Example:
 * 
 * HTML
 * 
 * <div id='example'>
 *    <div class='lhs'>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut erat eget  
 *       odio commodo pretium et sed mauris. Praesent mollis orci id ante egestas tristique.
 *    </div>
 *    <div class='rhs'>
 *       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut erat eget  
 *       odio commodo pretium et sed mauris. Praesent mollis orci id ante egestas tristique.
 *    </div>
 * </div>
 * 
 * <SCRIPT>
 * 
 *    $(function(){
 *       $("#example").contentpair({widthLhs: '65%', widthRhs: '35%'});  
 *    });
 * 	
 * </SCRIPT>
 *    
 */

(function($){
	$.fn.contentpair = function(options) {
		var settings = $.extend({
			classLhs: 'lhs', /* The name of the class that will be searched and placed left */
			classRhs: 'rhs', /* The name of the class that will be searched and placed right */
			widthLhs: '60%',
			heightLhs: '',
			widthRhs: '40%',
			heightRhs: '',
			hideoverflow: true
		}, options || {});

		this.addClass('es-content-pair ui-helper-clearfix');

		var $lhsOuter = $("<div class='content-lhs-outer'></div>")
			.height(settings.heightLhs)
			.width(settings.widthLhs)
			.css({float: "left"});
		
		var $rhsOuter = $("<div class='content-rhs-outer'></div>")
			.height(settings.heightRhs)
			.width(settings.widthRhs)
			.css({float: "right"});
		
		$($lhsOuter).add($rhsOuter)
		.css({padding: "0px",
			  margin: "0px"});
		
		if (settings.hideoverflow == true)
		{
			$($lhsOuter).add($rhsOuter).css("overflow", "hidden");
		}
		
		this.find("." + settings.classLhs).wrap($lhsOuter);
		this.find("." + settings.classRhs).wrap($rhsOuter);
		
		return this;
	};
}) (jQuery);

