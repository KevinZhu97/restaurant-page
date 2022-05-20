export function createContent2() {
    const originContent = document.getElementById('content')
    const menu = document.createElement('div')
    menu.classList.add('menu')

    const main = document.createElement('div')
    main.classList.add('main')

    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    const item3 = document.createElement('div')
    const item4 = document.createElement('div')
    const item5 = document.createElement('div')
    const item6 = document.createElement('div')

    item1.classList.add('menu-item')
    item2.classList.add('menu-item')
    item3.classList.add('menu-item')
    item4.classList.add('menu-item')
    item5.classList.add('menu-item')
    item6.classList.add('menu-item')

    const item1Pic = document.createElement('img')
    item1Pic.src="ramen1.png"
    const item1Description = document.createElement('h2')
    item1Description.innerText = "Seaweed"
    const item1Ingredients = document.createElement('p')
    item1Ingredients.innerText = "Seaweed, Pork, Noodles, Basil, Beef Broth"
    item1.appendChild(item1Pic)
    item1.appendChild(item1Description)
    item1.appendChild(item1Ingredients)

    const item2Pic = document.createElement('img')
    item2Pic.src="ramen2.png"
    const item2Description = document.createElement('h2')
    item2Description.innerText = "Shoyu"
    const item2Ingredients = document.createElement('p')
    item2Ingredients.innerText = "Shoyu, Chicken, Noodles, Basil, Beef Broth"
    item2.appendChild(item2Pic)
    item2.appendChild(item2Description)
    item2.appendChild(item2Ingredients)

    const item3Pic = document.createElement('img')
    item3Pic.src="ramen3.png"
    const item3Description = document.createElement('h2')
    item3Description.innerText = "Miso"
    const item3Ingredients = document.createElement('p')
    item3Ingredients.innerText = "Miso, Bird, Noodles, Garlin, Chicken Broth"
    item3.appendChild(item3Pic)
    item3.appendChild(item3Description)
    item3.appendChild(item3Ingredients)

    const item4Pic = document.createElement('img')
    item4Pic.src="ramen4.png"
    const item4Description = document.createElement('h2')
    item4Description.innerText = "Tonkotsu"
    const item4Ingredients = document.createElement('p')
    item4Ingredients.innerText = "Miso, Pork, Rice Noodles, Garlic, Beef Broth"
    item4.appendChild(item4Pic)
    item4.appendChild(item4Description)
    item4.appendChild(item4Ingredients)

    const item5Pic = document.createElement('img')
    item5Pic.src="ramen5.png"
    const item5Description = document.createElement('h2')
    item5Description.innerText = "Maruchan"
    const item5Ingredients = document.createElement('p')
    item5Ingredients.innerText = "Poison, Pork, Rice Noodles, Dry, Beef Broth"
    item5.appendChild(item5Pic)
    item5.appendChild(item5Description)
    item5.appendChild(item5Ingredients)

    const item6Pic = document.createElement('img')
    item6Pic.src="ramen6.png"
    const item6Description = document.createElement('h2')
    item6Description.innerText = "Wakame"
    const item6Ingredients = document.createElement('p')
    item6Ingredients.innerText = "Seaweed, Fish, Seaweed, Basil, Beef Broth"
    item6.appendChild(item6Pic)
    item6.appendChild(item6Description)
    item6.appendChild(item6Ingredients)


    originContent.appendChild(main)
    main.appendChild(menu)
    menu.appendChild(item1)
    menu.appendChild(item2)
    menu.appendChild(item3)
    menu.appendChild(item4)
    menu.appendChild(item5)
    menu.appendChild(item6)
}