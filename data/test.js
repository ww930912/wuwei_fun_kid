let arr=[]
$('.grid-cell-figure').each((i,e)=>{
		let text=$(e).parent().next().find('.hover-text-inner').text();
		arr.push({
			id:(i+1),
			name:text.trim(),
			imgsrc:e.getAttribute('data-imgsrc'),
			width:e.getAttribute('data-width'),
			height:e.getAttribute('data-height')
		})
		//console.log(e.getAttribute('data-width')+'  '+e.getAttribute('data-height')+'   '+e.getAttribute('data-imgsrc'))
})
console.log(JSON.stringify(arr));
//$('.hover-text-inner').each((i,e)=>console.log(e.innerText))
