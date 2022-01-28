console.log("Count-down extension loaded");

let date = "08 15 2023";

chrome.runtime.onInstalled.addListener(() => {

    chrome.storage.sync.set({ date });

    console.log("Default Date set to Aug 15, 2021");

});