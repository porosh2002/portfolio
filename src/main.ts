const CloseIcon = document.getElementById('CloseIcon')
const OpenIcon = document.getElementById('OpenIcon')
const LinksContainer = document.getElementById('LinksContainer')
const Links = document.getElementById('Links')
const About = document.getElementById('About')
const Portfolio = document.getElementById('Portfolio')
const Contact = document.getElementById('Contact')
OpenIcon?.addEventListener('click',()=>{
    CloseIcon?.classList.remove('hidden')
    OpenIcon?.classList.add('hidden')
    if(window.innerWidth < 1024){
        LinksContainer?.classList.remove('hidden') 
    }
})
const CloseMenu = () =>{
    CloseIcon?.classList.add('hidden')
    OpenIcon?.classList.remove('hidden')
    if(window.innerWidth < 1024){
        LinksContainer?.classList.add('hidden') 
    }
}
CloseIcon?.addEventListener('click',()=>{
    CloseMenu()
})
Links?.addEventListener('click',()=>{
    CloseMenu()  
})
var state = 'root' 
About?.addEventListener('click',()=>{
    state = 'about'
    if(state === 'about'){
        About?.classList.add('opacity-70')
        Contact?.classList.remove('opacity-70') 
        Portfolio?.classList.remove('opacity-70') 
    }
})
Portfolio?.addEventListener('click',()=>{
    state = 'root'
    if(state === 'root'){
        About?.classList.remove('opacity-70')
        Contact?.classList.remove('opacity-70') 
        Portfolio?.classList.add('opacity-70') 
    }
})
Contact?.addEventListener('click',()=>{
    state = 'contact'
    if(state === 'contact'){
        About?.classList.remove('opacity-70')
        Contact?.classList.add('opacity-70') 
        Portfolio?.classList.remove('opacity-70') 
    } 
})
if(state === 'root'){
    Portfolio?.classList.add('opacity-70') 
}

