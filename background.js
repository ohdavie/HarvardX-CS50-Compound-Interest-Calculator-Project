chrome.runtime.onInstalled.addListener(function() {
  // Create a context menu item for calculating compound interest
  chrome.contextMenus.create({
    id: 'calculateCompoundInterest',
    title: 'Calculate Compound Interest',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === 'calculateCompoundInterest') {
    // Get the selected text and convert it to a number
    var principal = Number(info.selectionText);
    // If the selected text is not a valid number, show an error message
    if (isNaN(principal)) {
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Error',
        message: 'Please select a valid number',
      });
      return;
    }
    // Open a new tab with the compound interest calculator page and pass the principal as a parameter
    chrome.tabs.create({
      url: chrome.runtime.getURL('popup.html') + '?principal=' + encodeURIComponent(principal),
    });
  }
});
