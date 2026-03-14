function isOnShorts() {
  const isShorts = window.location.pathname.includes("/shorts/");
  return isShorts;
}

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
    const button = event.target.closest(
      'button[class="yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-xl yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--enable-backdrop-filter-experiment"]',
    );
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

const mouseDownHandler = function (event) {
  if (isOnShorts() && event.button === 1) {
    event.preventDefault();
    event.stopPropagation();
    showNotification("Scroll wheel press blocked!");
  }
};

document.addEventListener("mousedown", mouseDownHandler, {
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
