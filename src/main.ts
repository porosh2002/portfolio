const CloseIcon = document.getElementById('CloseIcon')
const OpenIcon = document.getElementById('OpenIcon')
const LinksContainer = document.getElementById('LinksContainer')
const Links = document.getElementById('Links')
const About = document.getElementById('About')
const Portfolio = document.getElementById('Portfolio')
const Contact = document.getElementById('Contact')
const ContactPage = document.getElementById('ContactPage')
const ContactTimes = document.getElementById('ContactTimes')
const ExpDays = document.getElementById('ExpDays')!
const AboutPageDev = document.getElementById('AboutPageDev')
const DevTimes = document.getElementById('AboutTimes')
import moment from 'moment'
const EXP = document.getElementById('Exp')!
OpenIcon?.addEventListener('click', () => {
    CloseIcon?.classList.remove('hidden')
    OpenIcon?.classList.add('hidden')
    if (window.innerWidth < 1024) {
        LinksContainer?.classList.remove('hidden')
    }
})
const CloseMenu = () => {
    CloseIcon?.classList.add('hidden')
    OpenIcon?.classList.remove('hidden')
    if (window.innerWidth < 1024) {
        LinksContainer?.classList.add('hidden')
    }
}
CloseIcon?.addEventListener('click', () => {
    CloseMenu()
})
Links?.addEventListener('click', () => {
    CloseMenu()
})
var state = 'root'
About?.addEventListener('click', () => {
    state = 'about'
    if (state === 'about') {
        About?.classList.add('opacity-70')
        Contact?.classList.remove('opacity-70')
        Portfolio?.classList.remove('opacity-70')
    }
})
Portfolio?.addEventListener('click', () => {
    state = 'root'
    if (state === 'root') {
        About?.classList.remove('opacity-70')
        Contact?.classList.remove('opacity-70')
        Portfolio?.classList.add('opacity-70')
    }
})
Contact?.addEventListener('click', () => {
    state = 'contact'
    if (state === 'contact') {
        About?.classList.remove('opacity-70')
        Contact?.classList.add('opacity-70')
        Portfolio?.classList.remove('opacity-70')
    }
    ContactPage?.classList.remove('-translate-y-full')
})
ContactTimes?.addEventListener('click', () => {

    ContactPage?.classList.add('-translate-y-full')
    state = 'root'
    if (state === 'root') {
        About?.classList.remove('opacity-70')
        Contact?.classList.remove('opacity-70')
        Portfolio?.classList.add('opacity-70')
    }
})
About?.addEventListener('click', () => {
    state = 'about'
    if (state === 'about') {
        About?.classList.add('opacity-70')
        Contact?.classList.remove('opacity-70')
        Portfolio?.classList.remove('opacity-70')
    }
    AboutPageDev?.classList.remove('-translate-y-full')
})
DevTimes?.addEventListener('click', () => {
    AboutPageDev?.classList.add('-translate-y-full')
    state = 'root'
    if (state === 'root') {
        About?.classList.remove('opacity-70')
        Contact?.classList.remove('opacity-70')
        Portfolio?.classList.add('opacity-70')
    }
})
if (state === 'root') {
    Portfolio?.classList.add('opacity-70')
}
const EXPvalue = moment("20180301", "YYYYMMDD").fromNow(true);
const d = new Date().getMonth();
var Extramonth = 0;
if ((d + 1) - 3 === -2) {
    Extramonth = 10
}
else if ((d + 1) - 3 === -1) {
    Extramonth = 11
}
else {
    Extramonth = (d + 1) - 3
}
const Days = moment().format("Do").replace('th', '')
EXP.textContent = `${EXPvalue}  ${Extramonth} months`

ExpDays.textContent = `${Days} days`




