function showTab(tabID) {
  var tabs = document.getElementsByClassName("tabContent");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].computedStyleMap.display = "none";
  }

  document.getElementById(tabId).style.display = "block";
}
