document.querySelector('#getSpell').addEventListener('click', getFetch)

function getFetch() {
    let choice = document.querySelector('#spell').value
    choice.replace(' ', '-')
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    if (document.querySelector('li')) {
        if (document.querySelector('li').length > 1){
            document.querySelector('li').forEach(item => {
                item.remove()
            })
        } else {
            document.querySelector('li').remove()
        }
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.name
            document.querySelector('h3').innerText = data.classes[0].name

            data.subclasses.forEach(sb => {
                let newListItem = document.createElement('li')
                newListItem.textContent = sb.name
                document.querySelector('ul').appendChild(newListItem)
            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}