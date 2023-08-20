// callback function to render captcha

function cb(token) {
    let input = document.createElement('input')
    input.setAttribute('type', 'text')
    input.setAttribute('name', 'g-recaptcha-response')
    input.setAttribute('value', token)
    document.getElementsByTagName('form')[0].appendChild(input)
    document.getElementById('captcha').style.display = 'none';
    document.getElementById('captcha').submit();
}
