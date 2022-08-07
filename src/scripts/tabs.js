function openTab(event, tabName) {
  let tabContent, tabLink
  
  tabContent = document.getElementsByClassName('tab__content')
  tabLink = document.getElementsByClassName('tab__link')

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none'
  }

  for (let i = 0; i < tabLink.length; i++) {
    tabLink[i].className = tabLink[i].className.replace(' active', '')
  }
  
  document.getElementById(tabName).style.display = 'block'
  event.currentTarget.className += ' active'
}

document.getElementById('openedByDefault').click()

