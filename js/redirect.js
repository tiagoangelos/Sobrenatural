function RedirectToPlaylistRock(){
    const Link = "link do rock classico no google drive";
    window.open(Link, '_blank');
}

function RedirectToFolderInDrive(){
    const Link = "link da pasta no google drive";
    window.open(Link, '_blank');
}

function RedirectToInstagram(){
    const Link = "https://instagram.com/winchester3341";
    window.open(Link, '_blank');
}

function RedirectToWikipediaDrive(){
    const Link = "https://pt.wikipedia.org/wiki/Google_Drive";
    window.open(Link, '_blank');
}

function RedirectToWikipediaSupernatural(){
    const Link = "https://pt.wikipedia.org/wiki/Supernatural_(s%C3%A9rie_de_televis%C3%A3o)";
    window.open(Link, '_blank');
}

function DownloadLicence(){
    const Link = './LICENSE';
    const Licence = document.querySelector("#Licence");
    Licence.href = Link;
}