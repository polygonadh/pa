$(function(){
	
	/* Float the logo left and the header right */
	$(function(){
		$("#header").contentpair({widthLhs: '95px', widthRhs: '800px', 
			classLhs: 'headerLHS', classRhs: 'headerRHS'});
	});

	$(".ddsmoothmenu, .floatDivRight").addClass('ui-helper-clearfix');

});
