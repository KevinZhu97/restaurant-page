import { createContent } from "./content"
import { createContent2 } from "./content2"
import { createFooter } from "./footer"
import { createContent3 } from "./content3"

export function createHeader() {
    const originContent = document.getElementById('content')

    const header = document.createElement('div')
    const buttonGroup = document.createElement('div')
    buttonGroup.classList.add('button-group')
    const headerText = document.createElement('h1')
    const homeButton = document.createElement('button')
    homeButton.addEventListener('click', () => {
        const main = document.querySelector('.main')
        const footer = document.querySelector('.footer')
        main.remove()
        footer.remove()
        createContent();
        createFooter();
        
    })
    const menuButton = document.createElement('button')
    menuButton.addEventListener('click', () => {
        const main = document.querySelector('.main')
        const footer = document.querySelector('.footer')
        main.remove()
        footer.remove();
        createContent2();
        createFooter();
        
    })
    const contactButton = document.createElement('button')
    contactButton.addEventListener('click', () => {
        const main = document.querySelector('.main')
        const footer = document.querySelector('.footer')
        main.remove()
        footer.remove();
        createContent3();
        createFooter();
    })

    homeButton.classList.add('home-button')
    menuButton.classList.add('menu-button')
    contactButton.classList.add('contact-button')
    homeButton.innerText = "Home"
    menuButton.innerText = "Menu"
    contactButton.innerText = "Contact"
    headerText.innerText = 'Ajisen Ramen Noodles'
    header.classList.add('header')

    header.appendChild(headerText)
    header.appendChild(buttonGroup)
    originContent.appendChild(header)
    buttonGroup.appendChild(homeButton)
    buttonGroup.appendChild(menuButton)
    buttonGroup.appendChild(contactButton)

}