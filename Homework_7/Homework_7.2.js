var collection = []

function over ( event ) {
    event.target.style.backgroundColor = '#ffff0050'
}
function out ( event ) {
   event.target.style.backgroundColor = '#ff00ff50'
}
function clickHandler ( event ) {
    event.target.remove()
}


[ "first", "second", "third", "fourth" ].forEach (
    function ( tag, index, arr  ) {
		let x = ( index ? collection[index-1] : document.body ).appendChild(
			document.createElement('div')
		)
		collection.push(x)
		x.style = ` 
			width: ${400 - index * 50}px;
			height: ${400 - index * 50}px;
			background-color: #ff00ff50;
			border: dotted 1px yellow;
		`
		x.title = tag;

		x.onmouseover = over;
		x.onmouseout = out;
		x.onclick = clickHandler;
    }
)