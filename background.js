chrome.tabs.onActivated.addListener(({tabId}) => {
  chrome.tabs.get(tabId, t => {
    if (t?.url?.includes('youtube.com/watch')) {
      chrome.scripting.executeScript({target:{tabId:t.id},files:['content.js']}).catch(()=>{});
    }
  });
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, t) => {
  if (t?.url?.includes('youtube.com/watch') && changeInfo.status === 'complete') {
    chrome.scripting.executeScript({target:{tabId:t.id},files:['content.js']}).catch(()=>{});
  }
});
