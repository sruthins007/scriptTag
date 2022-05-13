// Create a class for the element
class ScriptInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: "open" });

    // Create spans
    const wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Open Modal";
    button.className = "btn-styled";
    button.setAttribute("class", "buttonCls");

    const modal = document.createElement("div");
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modalCls");

    const myIframe = document.createElement("iframe");
    myIframe.src = "https://dev.aikb.carynhealth.com";
    myIframe.setAttribute("class", "iframeCls");

    button.onclick = function() {
      if (modal.style.display == "none") {
        modal.style.display = "block";
        myIframe.style.display = "block";
        button.innerHTML = "Close Modal";
      } else {
        modal.style.display = "none";
        myIframe.style.display = "none";
        button.innerHTML = "Open Modal";
      }
    };

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .buttonCls{
        position: fixed;
        right: 20px;
        bottom: 20px;
        background-color: #420045;
        border: #420045;
        color: white;
        padding: 10px;
        border-radius: 6px;
        cursor: pointer;
        z-index:1;
      }
      .modalCls{
        display: none;
        position: fixed;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
      }
      .iframeCls{
        display: none;
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 60%;
        height: 60%;
        position: fixed;
        z-index: 1;
        top: 10%;
        left: 18%;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(button);
    wrapper.appendChild(modal);
    wrapper.appendChild(myIframe);
  }
}

// Define the new element
customElements.define("script-info", ScriptInfo);
