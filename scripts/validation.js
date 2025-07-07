const form = document.getElementById('form')

const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

const nameError = document.getElementById('nameError')
const emailError = document.getElementById('emailError')
const messageError = document.getElementById('messageError')

const nameValidation = () => {
  const nameRegExp = /^[А-Яа-яЁёA-Za-z\s\-]+$/

  if (!nameInput.value.length) {
    setError(nameInput, nameError, 'Введите имя')
    return false
  }

  if (!nameRegExp.test(nameInput.value)) {
    setError(nameInput, nameError, 'Введите корректное имя')
    return false
  }

  removeError(nameInput, nameError)
  return nameInput.value
}

const emailValidation = () => {
  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailInput.value.length) {
    setError(emailInput, emailError, 'Введите email')
    return false
  }

  if (!emailRegExp.test(emailInput.value)) {
    setError(emailInput, emailError, 'Введите корректный email')
    return false
  }

  removeError(emailInput, emailError)
  return emailInput.value
}

const messageValidation = () => {
  if (messageInput.value.length < 20) {
    setError(messageInput, messageError, 'Сообщение должно содержать минимум 20 символов');
    return false;
  }

  removeError(messageInput, messageError)
  return messageInput.value
}

const setError = (input, error, message) => {
  input.classList.add('form__input--error')
  error.textContent = message
}

const removeError = (input, error) => {
  input.classList.remove('form__input--error')
  error.textContent = ''
}

const removeAllErrors = () => {
  removeError(nameInput, nameError)
  removeError(emailInput, emailError)
  removeError(messageInput, messageError)
}

const trimInputSpaces = (e) => {
  if (e.target.value.startsWith(' ')) {
    e.target.value = e.target.value.trimStart()
  }
  e.target.value = e.target.value.replace(/\s{2,}/g, ' ')
}

nameInput.addEventListener('input', trimInputSpaces)
emailInput.addEventListener('input', trimInputSpaces)
messageInput.addEventListener('input', trimInputSpaces)

nameInput.addEventListener('blur', nameValidation);
emailInput.addEventListener('blur', emailValidation);
messageInput.addEventListener('blur', messageValidation);

form.addEventListener('submit', function(e) {
  e.preventDefault()
  removeAllErrors()

  const fetchData = {
    name: nameValidation(),
    email: emailValidation(),
    message: messageValidation()
  }

  if (fetchData.name && fetchData.email && fetchData.message) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(fetchData)
    })
    .then(() => {
      alert('fetched')
      this.reset()  
    })
    .catch((err) => {alert(err)})
  }
})