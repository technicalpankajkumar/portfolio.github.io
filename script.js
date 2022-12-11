           var no=document.querySelector("#no")
           var no1=document.querySelector("#no1")
           var no2=document.querySelector("#no2")
           var no3=document.querySelector("#no3")
	let laravel=()=>{
           no2.style.display="none"
           no3.style.display="none"
           no.style.display="block"
           no1.style.display="block"
	}
	let all_project=()=>{
           no.style.display="block"
           no1.style.display="block"
           no2.style.display="bock"
           no3.style.display="block"
	}
	let HtmlCssJs=()=>
	{
		   no.style.display="none"
		   no1.style.display="none"
           no2.style.display="block"
           no3.style.display="block"
	}

    // content copy, paste, cut, viewsource disabled

    let disabled=()=>{
        alert("This feature is Disabled!!!")
        event.preventDefault()
    }
    var disable=document.querySelector("body")

    disable.addEventListener('copy',disabled)
    disable.addEventListener('paste',disabled)
    disable.addEventListener('cut',disabled)
    disable.addEventListener('contextmenu',disabled)

