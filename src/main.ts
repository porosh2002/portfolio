const CloseIcon = document.getElementById('CloseIcon')
const OpenIcon = document.getElementById('OpenIcon')
const LinksContainer = document.getElementById('LinksContainer')
const Links = document.getElementById('Links')
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