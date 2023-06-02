function change() {
  const element = document.querySelector('body')
  const button = element.querySelector('button')
  
  button.classList.toggle('slide') 
  element.classList.toggle('light_theme')
  

}