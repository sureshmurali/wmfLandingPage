(function(){
  
  const hexagonImageURL = "https://cdn.glitch.com/d814b145-119d-4a28-9696-af3de72bb226%2FPolygon.svg?v=1559888071597";
  const maxRayScale = 10;
  const rayScaleIncrement = 0.6;
  const initialRayScale = 0.7;
  
  /** GENERIC HELPER FUNCTIONS - STARTS */
  function eleID (id) { return document.getElementById(id) }
  /** GENERIC HELPER FUNCTIONS - ENDS */
  
  
  /** WMF LANDING PAGE FUNCTIONS - STARTS */
  
  const initializeLayout = () => {
    const { clientHeight } = window.document.documentElement;
    eleID("heroContainer").style.height = `${clientHeight}px`;
    //eleID("illustrationContainer").style.height = `${clientHeight}px`;
    console.log(`Client Hieght: ${clientHeight}`);
  }
  
  const animateLogo = () => {
    eleID("appLogo").style.height = '250px';
  }
  
  const animateTitle = () => {
    eleID("appTitle").style.opacity = 100;
    eleID("appTitle").style.transform= 'translateY(0px)';
  }
  
  const animateCaption = () => {
    eleID("appCaption").style.opacity = 100;
    eleID("appCaption").style.transform= 'translateY(0px)';
  }
  
  const animateDownloadButton = () => {
    eleID("appDownloadButton").style.opacity = 100;
    eleID("appDownloadButton").style.transform= 'translateY(0px)';
  }
  
  const appDownloadRedirect = () => {
    console.log('App download page redirect');
  }
  
  /** WMF LANDING PAGE FUNCTIONS - ENDS */
  

  const triggerOnLoad = () => {
    console.log('Page loaded');
    document.body.classList.remove("preload");
    console.log('Removed preload class from body tag');
    initializeLayout();
    setTimeout(animateLogo, 150);
    setTimeout(animateTitle, 700);
    setTimeout(animateCaption, 800);
    setTimeout(animateDownloadButton, 1000);
  }
  
//   eleID("appDownloadButton").addEventListener("mouseover", function(){
    
//   });
  
  window.onload = triggerOnLoad();
  
})();
