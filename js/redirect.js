function RedirectToPlaylistRock(){
    const Link = "https://drive.google.com/drive/u/2/folders/1u54V5LorfLOM7Zoq5iWpql6pdcQR33Li";
    window.open(Link, '_blank');
}

function RedirectToMediafire(){
    const Link = "https://www.mediafire.com/file/ut9d327c5hp5up4/Rock_Cl%25C3%25A1ssico_-_Sobrenatural.netlify.app.rar/file";
    window.open(Link, '_blank');
}

function RedirectToFolderInDrive(){
    const Link = "https://drive.google.com/drive/folders/1OyfvPPpovrNqDNHSj8lKV-UqxUrZyoQR?usp=drive_link";
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
