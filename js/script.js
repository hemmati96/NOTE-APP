let $=document
let colorsArray=['#ffffff','#81ecec','#fab1a0',
	'#ffeaa7','#a29bfe','#dfe6e9',
	'#ff9ff3','#BDC581','#ffb8b8',
	'#fffa65','#7efff5','#32ff7e']
let inputElem=$.getElementById('input-field')
let notes=$.querySelector('.notes-cont')
let colorsBox=$.querySelectorAll('.color') 
let plusButton=$.getElementById('btn-plus')
let cleanButton=$.getElementById('btn-clean')


function removeValue(){
	inputElem.value=''
	inputElem.style.backgroundColor='#fff'
}
function removeNotesHandller(event){
	event.target.parentElement.remove()
}

function extractColor(e){
	
	let id=e.target.id
    inputElem.style.backgroundColor = colorsArray[id]
	
}

colorsBox.forEach(function(colorBox){
	colorBox.addEventListener('click',extractColor)

})

function generateNewNote(){
	if(inputElem.value!=""){
		let divElem=document.createElement('div')
	divElem.className='notes'
	notes.append(divElem)
	divElem.style.backgroundColor=inputElem
	let pElem=document.createElement('p')
	pElem.innerHTML=inputElem.value
	divElem.append(pElem)
	divElem.style.backgroundColor=inputElem.style.backgroundColor
	pElem.addEventListener('click', removeNotesHandller)
	removeValue()
	
	}
}

function addNotesHandler(event){

	if(event.keyCode===13){
		generateNewNote()
		inputElem.style.backgroundColor='#fff'	
	}
		
}

function cleanNotes(){
	inputElem.value=''
	inputElem.style.backgroundColor='#fff'
	}	
	
inputElem.addEventListener('keydown',addNotesHandler)
plusButton.addEventListener('click',generateNewNote)
cleanButton.addEventListener('click',cleanNotes)









