const target = document.querySelectorAll('[data-anime]')
window.addEventListener('scroll', () => {
    const heightScreen = window.pageYOffset + ((innerHeight * 3) / 4)
    target.forEach(ele => {
        if(heightScreen > ele.offsetTop) ele.classList.add('animate')
    })
})