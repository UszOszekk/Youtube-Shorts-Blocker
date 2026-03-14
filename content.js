function isOnShorts() {
  const isShorts = window.location.pathname.includes("/shorts/");
  return isShorts;
}
// mwheeldown and arrow down handler
const wheelHandler = function (event) {
  if (isOnShorts() && event.deltaY > 0) {
    event.preventDefault();
    event.stopPropagation();
    showNotification("Mouse wheel down blocked!");
  }
};

const arrowDownHandler = function (event) {
  if (isOnShorts() && event.key === "ArrowDown") {
    event.preventDefault();
    event.stopPropagation();
    showNotification("Arrow down key blocked!");
  }
};
document.addEventListener("wheel", wheelHandler, {
  passive: false,
  capture: true,
});
document.addEventListener("keydown", arrowDownHandler, {
  passive: false,
  capture: true,
});

const buttonClickHandler = function (event) {
  if (isOnShorts()) {
    const button = event.target.closest('button[aria-label="Next video"]');
    if (button) {
      event.preventDefault();
      event.stopPropagation();
      showNotification("Next video button blocked!");
    }
  }
};

document.addEventListener("click", buttonClickHandler, {
  passive: false,
  capture: true,
});

function showNotification(message) {
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #333;
    color: white;
    padding: 12px 20px;
    border-radius: 5px;
    z-index: 10000;
    font-family: Arial, sans-serif;
  `;
  document.body.appendChild(notification);

  setTimeout(() => notification.remove(), 2000);
}
