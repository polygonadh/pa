/* Collapsable text
 * 
 *  Example Code:
 *  
 * <div id='example'>
 *	<h4>Item 1</h4>
 *	<p>Lorem Ipsum Dipsum</p>
 *	<p>Lorem Ipsum Dipsum</p>
 *	<p>Lorem Ipsum Dipsum</p>
 * </div>
 * 
 * <script>
 * 	$(".lhs").expandabletext({icon: true});
 * </script>
 *
 * 
 * Options:
 *  icon: Can be either "arrow", "arithmetic", "fixed" or "" or null for none.
 *        If "fixed" is used, iconurl should no be null.
 *  iconurl: url to the icon to be used. 
 *  
 */
(function($){
	$.fn.expandabletext = function(options){
		var settings = $.extend({
			icon: "arrow", /* Show the '+' or '-' icon if the text is collapsed or not */
			iconurl: "",
			iconpadding: "20px"
		}, options || {});
		
		this.addClass('expandabletext');
		this.find("h4 + div").hide();
		this.find("h4").contents().wrap("<a href='#'></a>");
		
		if (settings.icon != "")
		{
			this.find("h4 a").prepend("<span class='icon'></span>");
		}
		
		if (settings.icon == "arithmetic")
		{
			this.find("span.icon").addClass('monospace').text('+');
		}
		else if (settings.icon == "arrow")
		{
			this.find("span.icon").addClass('expandable').html('&nbsp;');
		}
		else if (settings.icon == "fixed")
		{
			this.find("span.icon").html('&nbsp;').
			attr('style', "background-image: url('" + settings.iconurl + 
					"'); padding-right:" + settings.iconpadding);

//			$("head").append("<style>span.fixed-icon {background-image: url('" + settings.iconurl + 
//					"'); padding-right:'" + settings.iconpadding + "'}</style>");
		}
		

		var getIconContainer = function(para) {
			return para.prev().find('span');
		}
		
		var showExpandIcon = function() {
			if (settings.icon == "arithmetic")
			{
				getIconContainer($(this)).text('+');
			}
			else if (settings.icon == "arrow")
			{
				getIconContainer($(this)).removeClass('collapsable').addClass('expandable');
			}
		}
			
		var showCollapseIcon = function() {
			if (settings.icon == "arithmetic")
			{
				getIconContainer($(this)).text('-');
			}
			else if (settings.icon == "arrow")
			{
				getIconContainer($(this)).removeClass('expandable').addClass('collapsable');
			}
		}
		
		this.find("h4 a").click(function(){
			var text = $(this).parent().next();
			if (text.is(':hidden'))
			{
				text.show("slow", showCollapseIcon);
			}
			else
			{
				text.hide("fast", showExpandIcon);
			}
			
			
			return false;
		});
		
		return this;
	}
})(jQuery);
