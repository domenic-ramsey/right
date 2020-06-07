/**
 * Adds 'target="_blank"` and 'rel="noopener"' to all external links
 */

(function () {
    const links = document.links;
    for (let i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname) {
            links[i].target = "_blank";
            links[i].setAttribute("rel", "noopener");
        }
    }
})();
