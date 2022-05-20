export function createContent() {
    const originContent = document.getElementById('content')

    const main = document.createElement('div')
    main.classList.add('main')
    const homepage = document.createElement('div')
    homepage.classList.add('homepage')
    const introText = document.createElement('p')
    introText.innerText = "Best ramen in your country"
    const secondaryText = document.createElement('p')
    secondaryText.innerText = "Same consistency since 1969"
    const profilePic = document.createElement('img')
    profilePic.classList.add('profile-pic')
    profilePic.src="https://cdn.shopify.com/s/files/1/0324/7302/2597/articles/DSC_0770-2_1296x862.jpg?v=1601706231"
    const lastText = document.createElement('p')
    lastText.innerText = "Order online or come visit us!"
    
    originContent.appendChild(main)
    main.appendChild(homepage)
    homepage.appendChild(introText)
    homepage.appendChild(secondaryText)
    homepage.appendChild(profilePic)
    homepage.appendChild(lastText)
}