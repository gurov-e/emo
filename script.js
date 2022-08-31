const input = document.querySelector('.input')
const text = document.querySelector('.text')
const btn = document.querySelector('.btn')
const emojis = ['^_^', ':3', '<3', 'T_T', ':*', ":'("]
let min = 0
let max = 1

function convertToEmo() {
  return input.value.replaceAll('мне ', 'мну ').split('').map((c, i) =>
    i % 2 ? c.toLowerCase() : c.toUpperCase()).join('')
}

function copyToClipboard() {
  window.navigator.clipboard.writeText(text.textContent)
}

function showAlert() {
  if (min < max) {
    min = max
    const alert = document.createElement('div')

    document.body.appendChild(alert)
    alert.classList.add('alert')
    alert.insertAdjacentHTML('afterbegin', '<p>Скопировано!</p>')

    setTimeout(() => {
      alert.remove()
      min = 0
    }, 3000)
  }
}

function randomEmoji() {
  if (input.value !== text.textContent) {
    return emojis[Math.floor(Math.random() * emojis.length)]
  } else {
    return ''
  }
}

function clear() {
  input.select()
  input.value = ''
  if (window.innerWidth >= 375) {
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
    if (window.innerWidth >= 375) {
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

input.addEventListener('input', () => {
  if (input.value.length <= 90) {
    input.value.slice(0, 90)
    counter.textContent = input.value.split('').length
  }
})