async function loadCode(url: string){
    const response = await fetch(url)

    if(response.ok){
        const text = await response.text()
        const codeNode = document.querySelector('.code-block')

        if(codeNode){
            codeNode.textContent = text
        }
    }
    else{
        throw new Error('Failed to download file: ' + response.status.toString())
    }
}


function main(){

    const links = document.querySelectorAll('a')

    links.forEach((link) => {
        link.addEventListener('click', async (ev) => {
            await loadCode(link.getAttribute('data-src') || '')
        })
    })

}

main()
