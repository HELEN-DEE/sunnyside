const menu = document.getElementById('menu')
const headerMenu = document.getElementById('headerMenu')

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    headerMenu.classList.toggle('open-menu');
})
