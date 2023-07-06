async function loadCode(url: string){
    const response = await fetch(url)
}


function main(){

    const links = document.querySelectorAll('a')

    links.forEach((link) => {
        link.addEventListener('click', (ev) => {
            loadCode(link.getAttribute('data-src') || '')
        })
    })

}

