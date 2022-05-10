document.write("<div id='container'></div>");
document.write("<div id='myModal' class='modal'><div>");
document.write("<iframe src='https://shareplus.azurewebsites.net' id='myIframe' class='modal-content'><div>");
document.addEventListener(
  "DOMContentLoaded",
  function() {
    var button = document.createElement("button");
    button.type = "button";
    button.innerHTML = "Press me";
    button.className = "btn-styled";
    button.setAttribute(
      "style",
      "position: fixed;right: 20px;bottom: 20px;background-color: #420045;border: #420045;color: white;padding: 10px;border-radius: 6px;cursor: pointer;"
    );
    var modal = document.getElementById("myModal");
    modal.setAttribute(
      "style",
      "display: none;position: fixed;z-index: 1;padding-top: 100px;left: 0;top: 0;width: 100%;height: 100%;overflow: auto;background-color: rgb(0,0,0);background-color: rgba(0,0,0,0.4);"
    );
    var modalContent = document.getElementById("myModalContent");
    var myIframe = document.getElementById("myIframe");
    myIframe.setAttribute(
      "style",
      "background-color: #fefefe;margin: auto;padding: 20px;border: 1px solid #888;width: 60%;height: 700px;"
    );
    button.onclick = function() {
      modal.style.display = "block";
      myIframe.style.display = "block";
      console.log(window.location.search);
    };

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };

    var container = document.getElementById("container");
    container.appendChild(button);
  },
  false
);
