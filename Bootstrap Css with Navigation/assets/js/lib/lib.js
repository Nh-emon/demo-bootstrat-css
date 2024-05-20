const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function get(element){return document.querySelector(element)}
function getAll(element){return document.querySelectorAll(element)}



    // dynamic id for tab btn and tab pane
    const allTabContainer = document.querySelectorAll('.tab-container');
    if(allTabContainer){
        allTabContainer.forEach((eachContainer,tabIndex)=>{

            eachContainer.querySelectorAll('.tab-btn-container .tab-btn').forEach((eachTabBtn,btnIndex)=>{
                eachTabBtn.setAttribute('id',`tab${tabIndex+1}-btn${btnIndex+1}`)
                eachTabBtn.setAttribute('data-bs-target',`#tab${tabIndex+1}-pane${btnIndex+1}`)
            })
            eachContainer.querySelectorAll('.tab-content-container .tab-pane').forEach((eachPane,paneIndex)=>{
                eachPane.setAttribute('id',`tab${tabIndex+1}-pane${paneIndex+1}`)
                eachPane.setAttribute('aria-labelledby',`#tab${tabIndex+1}-btn${paneIndex+1}`)
            })

        })
    }



// initialize hightlight js
if(document.querySelector('code')){
    hljs.highlightAll();
}



// start slider

const slider = document.querySelector('.slider')
const slides = document.querySelectorAll('.slider .slide')


if(slider && slides){

let currentIndex = 0;
const slideWidth = slides[0].offsetWidth;

function goToSlide(index){
    if(index < 0 || index >= slides.length) return ;
    currentIndex = index
    const offSet = - currentIndex * slideWidth;
    slider.style.transform = `translateX(${offSet}px)`
}

function nextSlide(){
    if(currentIndex === slides.length -1){
        goToSlide(0)
    }else{
        goToSlide(currentIndex+1)
    }
}

function prevSlide(){
    if(currentIndex === 0){
        goToSlide(slides.length -1)
    }else{
        goToSlide(currentIndex-1)
    }
}

if(document.querySelector('.slider-container.type-btn')){
    let sliderContainer = document.querySelector('.slider-container.type-btn')
    let sliderPrevBtn = document.createElement('i')
    sliderPrevBtn.classList.add('fa-solid','fa-chevron-left','i-btn','rounded-circle','light-bg','d-none')
    sliderPrevBtn.id = 'sliderPrevBtn'
    let sliderNextBtn = document.createElement('i')
    sliderNextBtn.classList.add('fa-solid','fa-chevron-right','i-btn','rounded-circle','light-bg','fs-5')
    sliderNextBtn.id = 'sliderNextBtn'
    sliderContainer.appendChild(sliderPrevBtn)
    sliderContainer.appendChild(sliderNextBtn)

sliderPrevBtn.addEventListener('click',()=>{
    prevSlide()
})

sliderNextBtn.addEventListener('click',()=>{
    nextSlide()
})


}


if(document.querySelector('.slider-container.type-point')){
    let slides = document.querySelectorAll('.slider .slide')
    let sliderContainer = document.querySelector('.slider-container.type-point')
    let sliderBottomPoint = document.createElement('div')
    sliderBottomPoint.classList.add('slider-points')
    slides.forEach(eachSlide=>{
        sliderBottomPoint.innerHTML +=`<span></span>`
    })
    sliderContainer.appendChild(sliderBottomPoint)
    sliderContainer.querySelectorAll('span').forEach((eachPoint,i)=>{
         eachPoint.addEventListener('click',()=>{
            // remove active class from span
            sliderContainer.querySelectorAll('span').forEach(eachSpan=>{
                if(eachSpan.classList.contains('active')){
                    eachSpan.classList.remove('active')
                }
            })
            // 
            eachPoint.classList.add('active')
            goToSlide(i)
         })
    })

    
}



}

// end slider









// change website theme

const darkMode = {
    "--body-bg":"#0B1018",
    "--box-bg":"#101724",
    "--box-bg-1":"#0E1521",
    "--box-bg-2":"#121A29",
    "--body-font-color":"#b5beca",
    "--border-color":"#a1abbc2b",
    "--box-hover-bg":"#141c2d",
    "--hover-bg":"#141c2d",
    "--body-font-light-color":"#969999",
    "--scrollbar-bg":"rgba(0,0,0,0)",
    "--scrollbar-thumb-bg":"#686868",
    "--placeholder-bg":"#1D2528",
    "--card-bg":"#12181F",
    "--card-header-bg":"#263033",
    "--card-footer-bg":"#263033",
    "--bs-dropdown-bg":"#1D2528",
    "--bs-dropdown-color":"white",
    "--offcanvas-bg":"#12181F",
    "--navbar-bg":"#0B1018",
    "--navbar-font-color":"#CBD5E1",
    "--popover-bg":"#101724",
    "--popover-color":"#CBD5E1",
    "--popover-header-bg":"#24262c",
    "--popover-body-bg":"#101724",
    "--offcanvas-bg":"#0E1521",
    "--modal-bg":"#0E1521",
    "--modal-header-bg":"#121A29",
    "--dropdown-menu-bg":"#101724",
    "--dropdown-item-hover-bg":"#343841",
    "--accordion-item-bg":"#0E1521",
    "--accordion-collapse-bg":"#141c2dx",
    "--form-control-bg":"#1e2134a1",
    "--form-control-placeholder-color":"rgb(84, 92, 92)",
    "--btn-light-bg":"#141c2d",
    "--code-bg":"#141b27",
    "--tab-content-bg":"#181f2a",
    "--theme-font-weight":"500",
    "--btn-font-weight":"500",

   }



const lightMode = {
"--body-bg":"#f3f7fe",
"--box-bg":"#ffffff",
"--box-bg-1":"#f9f9f9",
"--box-bg-2":"#f9f9fa",
"--body-font-color":"#181819",
"--border-color":"#dbdee3",
"--box-hover-bg":"#E0E0E0",
"--hover-bg":"#E0E0E0",
"--body-font-light-color":"#666666",
"--scrollbar-bg":"rgba(255,255,255,0)",
"--scrollbar-thumb-bg":"#b6b6b6",
"--placeholder-bg":"#bbbebf",
"--card-bg":"#fdfeff",
"--card-header-bg":"#dee2e3",
"--card-footer-bg":"#d8d8d8",
"--bs-dropdown-bg":"#eeeeee",
"--bs-dropdown-color":"#010101",
"--offcanvas-bg":"#FFFFFF",
"--navbar-bg":"#F8F9FA",
"--navbar-font-color":"#333333",
"--popover-bg":"#e9e9e9",
"--popover-color":"#000000",
"--popover-header-bg":"#bfbfbf",
"--popover-body-bg":"#fff9f9",
"--offcanvas-bg":"#fafafa",
"--modal-bg":"#f8f8f9",
"--modal-header-bg":"#F0F0F0",
"--dropdown-menu-bg":"#FFFFFF",
"--dropdown-item-hover-bg":"#e1e4ea",
"--accordion-item-bg":"#f1f6ff",
"--accordion-collapse-bg":"#ececec",
"--form-control-bg":"#f3f3ff",
"--form-control-placeholder-color":"#3e3f3f",
"--btn-light-bg":"#f9f9f9",
"--code-bg":"#141b27",
"--tab-content-bg":"#F0F0F0",
"--theme-font-weight":"500",
"--btn-font-weight":"500",
"--body-font-light-color":"#414242",
"--navbar-bg":"#ffffff",
"--navbar-font-color":"#0e0e0f"

}



const themeBtn = document.querySelector('#themeChangerBtn')
if(themeBtn){
    themeBtn.addEventListener('click',()=>{

        let currentTheme = localStorage.BSpageTheme ? localStorage.BSpageTheme : document.querySelector('body').getAttribute('data-currentTheme')  

        if(currentTheme =='dark'){
            changePageTheme(lightMode)
            document.body.setAttribute('data-currentTheme','light')
            localStorage.BSpageTheme = 'light'
        }else{
            changePageTheme(darkMode)
            document.body.setAttribute('data-currentTheme','dark')
            localStorage.BSpageTheme = 'dark'            
        }
    })    
}


function loadPageTheme(){

        let currentTheme = localStorage.BSpageTheme  

        if(currentTheme){
        if(currentTheme =='dark'){
            changePageTheme(darkMode)
            document.body.setAttribute('data-currentTheme','dark')
        }else{
            changePageTheme(lightMode)
            document.body.setAttribute('data-currentTheme','light')
        }
        }

}

loadPageTheme()


function changePageTheme(colorMode){
    let root = document.querySelector(':root')
    for(let k in colorMode){
        root.style.setProperty(k,colorMode[k])
    }
}

// copy code text

const allCodeCopyBtn = document.querySelectorAll('.code-copyBtn')
if(allCodeCopyBtn){
    allCodeCopyBtn.forEach(eachBtn=>{
        eachBtn.addEventListener('click',()=>{
            eachBtn.classList.remove('fa-clipboard')
            eachBtn.classList.add('fa-check','text-success')
            setTimeout(() => {
                eachBtn.classList.remove('fa-check','text-success')                    
                eachBtn.classList.add('fa-clipboard')
            },2000);
            let codeText = eachBtn.parentNode.querySelector('code').innerText;
            copyTextToClipboard(codeText)
        })
    })
}


function copyTextToClipboard(text) {
// Check if the Clipboard API is available
if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
        console.log('Text copied to clipboard successfully!');
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
} else {
    // Fallback method for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to the bottom of the page
    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('Text copied to clipboard successfully!');
    } catch (err) {
        console.error('Could not copy text: ', err);
    }
    
    document.body.removeChild(textArea);
}
}



