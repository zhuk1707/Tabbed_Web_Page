function openVerticalTab(event, verticalTabName) {
  let verticalTabContent, verticalTabLink

  verticalTabContent = document.getElementsByClassName('vertical-tab__content')
  verticalTabLink = document.getElementsByClassName('vertical-tab__link')

  for (let i = 0; i < verticalTabContent.length; i++) {
    verticalTabContent[i].style.display = 'none'
  }

  for (let i = 0; i < verticalTabLink.length; i++) {
    verticalTabLink[i].className = verticalTabLink[i].className.replace(' active', '')
  }

  document.getElementById(verticalTabName).style.display = 'block'
  event.currentTarget.className += ' active'
}

document.getElementById('vertTabOpenedByDefault').click()

