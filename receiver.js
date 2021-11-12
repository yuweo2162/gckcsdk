
const context = cast.framework.CastReceiverContext.getInstance();
context.setLoggerLevel(cast.framework.LoggerLevel.DEBUG);
const playerManager = context.getPlayerManager();

playerManager.addEventListener(
    cast.framework.events.EventType.ERROR, (event) => {
      let body = document.getElementsByTagName("body")[0];
      body.style.setProperty('--logo-image', 'url("getApp.png")');
});

playerManager.addEventListener(
    cast.framework.events.EventType.LOAD_START, (event) => {
      let body = document.getElementsByTagName("body")[0];
      body.style.setProperty('--logo-image', 'url("https://www.gstatic.com/eureka/player/0000/skins/cast/logo.png")');
});

context.start();