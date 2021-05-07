const mediaQuery = window.matchMedia( '( min-width: 768px )' )

if ( mediaQuery.matches ) {
    window.onload = onPageLoad();
    function onPageLoad() {
    document.getElementById("checkbox").checked = true;
    }
}


function playVideo(sourceId, targetId) {    
    if (typeof(sourceId)=='string') {
        sourceId=document.getElementById(sourceId);
    }    
    
    if (typeof(targetId)=='string') {
        targetId=document.getElementById(targetId);
    }    
    
    targetId.innerHTML=sourceId.innerHTML;    
    return false; 
}
