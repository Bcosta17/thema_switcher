function change() {
  const body = document.querySelector('body')
  const button = body.querySelector('button')
  
  button.classList.toggle('slide') 
  body.classList.toggle('light_theme')
  

}