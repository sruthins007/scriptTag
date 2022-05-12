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
    button.setAttribute(
      "style",
      "position: fixed;right: 20px;bottom: 20px;background-color: #420045;border: #420045;color: white;padding: 10px;border-radius: 6px;cursor: pointer;z-index:1"
    );

    const modal = document.createElement("div");
    modal.setAttribute("id", "myModal");
    modal.setAttribute(
      "style",
      "display: none;position: fixed;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);"
    );

    const myIframe = document.createElement("iframe");
    myIframe.src = "https://dev.aikb.carynhealth.com";
    myIframe.setAttribute(
      "style",
      "display: none;background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 60%;height: 600px;position: fixed;z-index: 1"
    );

    button.onclick = function() {
        console.log(modal.style.display);
        if(modal.style.display == 'none'){
             modal.style.display = "block";
             myIframe.style.display = "block";
             button.innerHTML = "Close Modal";
        } else {
             modal.style.display = "none";
             myIframe.style.display = "none";
             button.innerHTML = "Open Modal";
        }
     
    };

    window.onclick = function(event) {
        console.log('here')
        console.log(event.target);
        console.log(modal.style.display);
      if (event.target == modal) {
        modal.style.display = "none";
        myIframe.style.display = "none";
      }
      if (event.target == modal) {
        modal.style.display = "none";
        myIframe.style.display = "none";
      }
    };

    // Create some CSS to apply to the shadow dom
    const style = document.createElement("style");
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }
      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }
      img {
        width: 1.2rem;
      }
      .icon:hover + .info, .icon:focus + .info {
        
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(button);
    wrapper.appendChild(modal);
    wrapper.appendChild(myIframe);
  }
}

// Define the new element
customElements.define("script-info", ScriptInfo);
