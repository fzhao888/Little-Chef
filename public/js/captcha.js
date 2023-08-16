
function cb(token) {
    var input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'g-recaptcha-response')
    input.setAttribute('value', token)
    document.getElementsByTagName('form')[0].appendChild(input)
}

const verifyHandler = (event) => {
        alert('Success!');
        const path = document.querySelector('#path').value.trim();
       // document.location.replace(`/${path}`);
}

document
  .querySelector('.captcha-form')
  .addEventListener('submit', verifyHandler);