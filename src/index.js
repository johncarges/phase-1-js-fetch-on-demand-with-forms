const init = () => {
    const url = "http://localhost:3000/movies/"
    const inputForm = document.getElementById('form')
    
    function renderSearchedMovie(movieInfo) {
        const h4 = document.getElementById('movieDetailsTitle')
        const p = document.getElementById('movieDetailsSummary')

        h4.textContent = movieInfo.title
        p.textContent = movieInfo.summary
    }

    inputForm.addEventListener("submit", (event)=> {
        event.preventDefault()
        const searchId = document.getElementById('searchByID').value
        
        fetch(url + searchId)
            .then(r => r.json())
            .then(renderSearchedMovie)

    })
}



document.addEventListener('DOMContentLoaded', init);