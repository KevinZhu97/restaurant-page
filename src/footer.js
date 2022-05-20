export function createFooter() {
    const originContent = document.getElementById('content')

    const footer = document.createElement('div')
    const footerText = document.createElement('p')
    const footerLink = document.createElement('a')
    const footerIcon = document.createElement('img')
    footerIcon.src="github icon.png";
    footerLink.href="https://github.com/KevinZhu97";
    footerLink.appendChild(footerIcon)
    footerText.innerText = "Copyright © 2022 KevinZhu97"
    footer.classList.add('footer')

    originContent.appendChild(footer)
    footer.appendChild(footerText)
    footer.appendChild(footerLink)
    footerLink.appendChild(footerIcon)
}