const mediaQuery = window.matchMedia( '( min-width: 768px )' )

if ( mediaQuery.matches ) {
    window.onload = onPageLoad();
    function onPageLoad() {
    document.getElementById("checkbox").checked = true;
    }
}