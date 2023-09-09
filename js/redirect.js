function RedirectToDrive(){
    const Link = "https://drive.google.com/u/1/uc?id=15J2jvl09QguCPmkacaePZ6E7PfHscioZ&export=download";
    window.open(Link, '_blank');
}

function RedirectToWikipediaSupernatural(){
    const Link = "https://pt.wikipedia.org/wiki/Supernatural_(s%C3%A9rie_de_televis%C3%A3o)";
    window.open(Link, '_blank');
}

function RedirectToWikipediaDrive(){
    const Link = "https://pt.wikipedia.org/wiki/Google_Drive";
    window.open(Link, '_blank');
}

function RedirectToWikipediaMediafire(){
    const Link = "https://pt.wikipedia.org/wiki/MediaFire";
    window.open(Link, '_blank');
}

function DownloadLicence(){
    const Link = './LICENSE';
    const Licence = document.querySelector("#Licence");
    Licence.href = Link;
}
