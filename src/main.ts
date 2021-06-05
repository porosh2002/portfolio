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
if(window.location.pathname === '/about'){
    About?.classList.add('opacity-70') 
}
if(window.location.pathname === '/contact'){
    Contact?.classList.add('opacity-70') 
 
}
if(window.location.pathname === '/'){
    Portfolio?.classList.add('opacity-70') 
}
