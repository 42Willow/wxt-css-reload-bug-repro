import "./some.css";
// if the above line isn't included, then a change in that file will not trigger a reload
// if the above line is included, then a change in that file will trigger a reload, but not update the contents of the css file
// this occurs with or without using tailwind css
// to actually update the css, you have to quit wxt entirely and start a new dev server

export default defineContentScript({
  matches: ['*://example.com/*'],
  main() {
    console.log('Hello content.');
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = browser.runtime.getURL("/assets/some.css" as any);
    link.classList.add("schooltape");
    document.head.appendChild(link);
  },
});
