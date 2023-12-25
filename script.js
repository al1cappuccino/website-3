document.getElementById("open-modal-btn").addEventListener("click",function(){
	document.getElementById("my-modal").classList.add("open")
})

document.getElementById("close-my-modal-btn").addEventListener("click",function(){
	document.getElementById("my-modal").classList.remove("open")
})







document.addEventListener('mousemove',e=>{
	Object.assign(document.documentElement,{
		style:`
		--move-x:${(e.clientX - window.innerWidth / 2)  * -.003}deg;
		--move-y:${(e.clientY - window.innerHeight / 2)  * -.003}deg;
		`
	})
})











