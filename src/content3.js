export function createContent3() {
    const originContent = document.getElementById('content')

    const main = document.createElement('div')
    main.classList.add('main')
    const contact = document.createElement('div')
    contact.classList.add('contact')
    const phone = document.createElement('p')
    phone.innerText = "📞 12345678910"
    const location = document.createElement('p')
    location.innerText = "📍 Casa Antigua 21, TX, Panama"
    const locationImg = document.createElement('img')
    locationImg.src="https://i.stack.imgur.com/HILmr.png"

    main.appendChild(contact)
    originContent.appendChild(main)
    contact.appendChild(phone)
    contact.appendChild(location)
    contact.appendChild(locationImg)
    
}