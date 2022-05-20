

export function newElements() {
    const originContent = document.getElementById('content')

    
    const headerDiv = document.createElement('div')
    const contentDiv = document.createElement('div')
    const footerDiv = document.createElement('div')

    originContent.appendChild(headerDiv)
    originContent.appendChild(contentDiv)
    originContent.appendChild(footerDiv)
}