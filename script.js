const input = document.querySelector('.input')
const text  = document.querySelector('.text')
const btn   = document.querySelector('.btn')

function convertToEmo() {
    return input.value.split('').map((c, i) =>
        i % 2 ? c.toLowerCase() : c.toUpperCase()).join('')
}

function copyToClipboard() {
    window.navigator.clipboard.writeText(text.textContent)
}

function showAlert() {
    const alert = document.createElement('div')

    document.body.appendChild(alert)
    alert.classList.add('alert')
    alert.insertAdjacentHTML('afterbegin', '<p>Скопировано!</p>')

    setTimeout(() => alert.remove(), 3000)
}

function randomEmoji() {
    if (input.value !== text.textContent) {
        const emojis = ['^_^', ':3', '<3', 'T_T', ':*', ":'("]
        return emojis[Math.floor(Math.random() * emojis.length)]
    } else {
        return ''
    }
}

function clear() {
    input.select()
    input.value = ''
    if (window.innerWidth >= 768) {
        input.focus()
        return
    }
    input.blur()
}

window.addEventListener('keydown', (event) => {
    if (event.code === 'Enter' && input.value) {
        text.innerHTML = convertToEmo() + randomEmoji()
        copyToClipboard()
        showAlert()
        clear()
    }
})

btn.addEventListener('click', () => {
    if (input.value) {
        text.innerHTML = convertToEmo() + randomEmoji()
            if (window.innerWidth >= 768) {
            copyToClipboard()
            showAlert()
        }
        clear()
    }
})

text.addEventListener('click', () => {
    copyToClipboard()
    showAlert()
})