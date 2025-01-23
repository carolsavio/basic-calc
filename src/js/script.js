// - calculator logic -
const insert = (num) => {
    let numbers = document.querySelector('.results').innerHTML;
    document.querySelector('.results').innerHTML = numbers + num
}

const clean = () => {
    document.querySelector('.results').innerHTML  = ''
}

const back = () => {
    let results = document.querySelector('.results').innerHTML
    document.querySelector('.results').innerHTML = results.substring(0, results.length -1)
}

const calculate = () => {
    let results = document.querySelector('.results').innerHTML
    if(results) {
        document.querySelector('.results').innerHTML = eval(results)
    }
}

// - inserting the numpad - 

document.addEventListener('keydown', function(event) {
    let key = event.key
    if (!isNaN(key)) {
        insert(key)
    } else if (key === '/' || key === '*' || key === '-' || key === '+') {
        insert(key)
    } else if (key === ',' || key === '.') {
        insert('.')
    } else if (key === 'Enter') {
        calculate()
    } else if (key === 'Backspace') {
        back()
    } else if ( key === 'Escape') {
        clean()
    } 
})


