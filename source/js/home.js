/* General Javascript code for the application */
$(function(){

	//$("#introBlock").contentpair({widthLhs: '382px', widthRhs: '330px', heightLhs: '252px',
	//	classLhs: 'introLhs', classRhs: 'introRhs'});
	$("#introBlock").contentpair({widthLhs: '50%', widthRhs: '40%', 
		classLhs: 'introLhs', classRhs: 'introRhs'});
		
	$("#introBlock2").contentpair({widthLhs: '60%', widthRhs: '40%', 
		classLhs: 'intro2Lhs', classRhs: 'intro2Rhs'});
	
	$("#mission").corner();
		
	$('#introGallery').innerfade({ speed: 'slow', timeout: 2500, type: 'sequence', containerheight: '250px' });

});
