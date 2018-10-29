document.addEventListener('click', decide, false);

var betaContent = `
<h2>In Beta</h2>
<p>Information about the beta program.<p>
<div class="closer" href="#0">
<div class="closex">✖︎</div>
</div>
`



var objItContent = {
    'nav-pickit': ['Pick It', 'Pick it, baby, YEAH!'], 
    'nav-cookit': ['Cook It!!', "Cook it, brother, that's right!"], 
    'nav-storeit': ['Store IT!!', "Store it, man, that's where it's at!"]
};

function getItContent(navClass) {
    return `
    <h2>${objItContent[navClass][0]}</h2>
    <p>${objItContent[navClass][1]}<p>
    <div class="closer" href="#0">
    <div class="closex">✖︎</div>
    </div>
    `;
}

function decide() {
    if (event.target.matches('.beta')) {
        makePopover(betaContent); 
    } else if (event.target.matches('.it')) { 
        var navClass = event.target.parentElement.classList[0];
        makePopover(getItContent(navClass)); 
    } else if (event.target.matches('.closex')) {
        destroyPopover()
    }
}

function makePopover(content) { 
    if (document.querySelector('.betainfo')) {
        destroyPopover();
    }
    var popover = document.createElement('div');
    popover.classList.add('betainfo');
  
    popover.innerHTML = content; 
    document.querySelector('body').append(popover);
  
    function destroyPopover() {
      document.querySelector('.betainfo').remove();
      event.preventDefault()
    }
  }

function destroyPopover() {
    event.preventDefault()
    var targetElem = document.querySelector('.betainfo')
    targetElem.remove();
}














