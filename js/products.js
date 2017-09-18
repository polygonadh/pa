
$(function(){
	$("#products").contentpair({widthRhs: '75%', widthLhs: '25%', 
		classRhs: 'content', classLhs: 'index'});

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

