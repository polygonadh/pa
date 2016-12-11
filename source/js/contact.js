$(function(){
	$("#mainContainer").contentpair({widthRhs: '45%', widthLhs: '55%', 
		classRhs: 'rhsBlock', classLhs: 'textContent'});

	$("#mainContainer .imgContent, #contactForm dl").addClass("ui-helper-clearfix");

	var max = 0;
	$("#contactForm label").not("[for=privacy]").each(function(){
			var myWidth = $(this).parent().width();
			max = (myWidth > max ? myWidth : max);
		});

	max += 20;
	$("#contactForm label").not("[for=privacy]").parent().width(max);

	$("#contactForm label.required").append("*");

	$("#contactForm input[type=text]").attr('size', 35);
	
	$("#contactForm dd").width($("#contactForm").innerWidth() - max - 10);
	
	$("#contactForm #Send-element").css('text-align', 'center');
});

