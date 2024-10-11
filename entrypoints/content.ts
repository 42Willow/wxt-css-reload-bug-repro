import "./some.css";
// if the above line isn't included, then a change in that file will not trigger a reload
// if the above line is included, then a change in that file will trigger a reload, but not update the contents of the css file
// this occurs with or without using tailwind css
// to actually update the css, you have to quit wxt entirely and start a new dev server

export default defineContentScript({
  matches: ['*://example.com/*'],
  cssInjectionMode: "manual", // this line doesn't seem to make a difference, unless the lines 12-17 are commented out, in which case it prevents styles from being injected
  main() {
    console.log('Hello content.');
    // if the below lines are commented out (and line 9, css injection mode), the issue is fixed
    // let link = document.createElement("link");
    // link.rel = "stylesheet";
    // link.href = browser.runtime.getURL("/assets/some.css" as any);
    // link.classList.add("schooltape");
    // document.head.appendChild(link);
  },
});
