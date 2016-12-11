(function($){
	$.fn.showProducts = function(options) {
		var settings = $.extend({
			productIdPrefix: 'product',
			productIndexClass: 'index',
			navHeadingClass: 'navHeading'
		}, options || {});
		
		var _self = this;
	
		this.hideProducts = function() {
			$(_self).find(".product").hide("slow");
		};
	
		this.showProduct = function(divSelector) {
//			alert("Selector is " + divSelector);
			_self.hideProducts();
			$(_self).find(divSelector).fadeIn("slow");
		};

		
		/* Make the navigation pane */
		
		this.makeNav = function($index) {
			var count = 0;
			var $list = $("<ul/>");
			$(_self).find(".product").each(function(){
				$(this).attr('id', settings.productIdPrefix + count);
				var name = $(this).find('h3').text() + " " + $(this).find('p.caption').text();
				var navHeadingClass = "";
//				alert($(this).find("h3[class='" + settings.navHeadingClass + "']").text());

				if ($(this).find("h3[class='" + settings.navHeadingClass + "']").length > 0)
				{
					navHeadingClass = " " + "class='" + $(this).find('h3').attr('class') + "'" + " ";
//					alert(navHeadingClass);
				}
				
				$list.append("<li" + navHeadingClass + "><a href=#" + settings.productIdPrefix + count + ">" + name + "</a></li>");
				count++;
			});
			$index.append($list);

			$index.find('a.navHeading').css('color', 'red');
		
			/* Click functionality for each navigation item */
			$index.find('a')
				.click(function(){
					var frag = $.param.fragment($(this).attr('href'));

					if (frag === $.param.fragment()) // If its already the current product, do nothing
					{
						return false;
					}

					$.bbq.pushState("#" + frag);
					return false;
					})
				.hover(function(){$(this).addClass("hover")}, function(){$(this).removeClass("hover")});
		}

		/* This function gets called when the has fragment of the browser url is changed */
		$(window).bind( "hashchange", function(e) {
				var product = $.param.fragment();

				// For each navigation item, set the "current" class if the href 
				// matches or otherwise remove the class.
				var selector = "." + settings.productIndexClass + " a";
				$(selector).each(function(){
					var href = $.param.fragment($(this).attr("href"));
					if (href === product)
					{
						$(this).addClass("current");
					} else
					{
						$(this).removeClass("current");
					}
				});

				_self.showProduct("#" + product);
			});

		$(_self).find('.product ul').wrap('<div class="productCaptions"></div>');
		 
		this.makeNav($(_self).find("." + settings.productIndexClass));

		// Trigger the event so that the product specified in the url (hash fragment) gets shown.
		$(window).trigger( "hashchange" );  
		
		return this;
	}
})(jQuery);


$(function(){
//	alert('load');
	$("#products").find(".product").hide();

	$("#products").contentpair({widthRhs: '75%', widthLhs: '25%', 
		classRhs: 'content', classLhs: 'index'});

//	$("#products .product ul li p").addClass("caption2");

	$("#products").showProducts();
		 
	$("table").colorize({
		altColor: '#ECF6FC',
		bgColor: '#fff',
		hoverColor: '#BCD4EC',
		hiliteColor: 'yellow',
		oneClick: false,
		columns: false,
		banColumns: []
	});
});

