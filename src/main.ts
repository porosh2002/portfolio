import moment from 'moment'
const CloseIcon = document.getElementById('CloseIcon')
const OpenIcon = document.getElementById('OpenIcon')
const LinksContainer = document.getElementById('LinksContainer')
const Links = document.getElementById('Links')
const About = document.getElementById('About')
const Contact = document.getElementById('Contact')
const ContactPage = document.getElementById('ContactPage')
const ContactTimes = document.getElementById('ContactTimes')
const ExpDays = document.getElementById('ExpDays')!
const AboutPageDev = document.getElementById('AboutPageDev')
const DevTimes = document.getElementById('AboutTimes')
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
Contact?.addEventListener('click', () => {
    ContactPage?.classList.remove('-translate-y-full')
})
ContactTimes?.addEventListener('click', () => {
    ContactPage?.classList.add('-translate-y-full')
})
About?.addEventListener('click', () => {
    AboutPageDev?.classList.remove('-translate-y-full')
})
DevTimes?.addEventListener('click', () => {
    AboutPageDev?.classList.add('-translate-y-full')
})
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




