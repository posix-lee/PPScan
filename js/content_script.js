document.addEventListener('TriggerBrute', () => {
    var iframe = document.createElement('iframe');
    iframe.addEventListener('load', () => {
        iframe.contentWindow.postMessage({
            url: location.href,
            foo: 'baz',
            type: 'search'
        }, '*');
    }, false);
    iframe.src = chrome.runtime.getURL('/pages/iframe.html');
    iframe.name = "ppdeadbeef";
    iframe.id = "ppbada55";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
});

document.addEventListener('TriggerBruteHash', () => {
    var iframe = document.createElement('iframe');
    iframe.addEventListener('load', () => {
        iframe.contentWindow.postMessage({
            url: location.href,
            foo: 'baz',
            type: 'hash'
        }, '*');
    }, false);
    iframe.src = chrome.runtime.getURL('/pages/iframe.html');
    iframe.name = "ppdeadbeef";
    iframe.id = "ppbada55";
    iframe.style.display = "none";
    document.body.appendChild(iframe);
});

chrome.storage.sync.get("toggle", (data) => {
    if (data.toggle) {
        var inject = function check() {
            var logger = function(url) {
                document.dispatchEvent(new CustomEvent('ppscan', { detail: url }));
            };
            if (location.href.search("dummy") != -1) {
                // hack for frame busting
                loc = location.href;
                if (loc.indexOf('e32a5ec9c99') >= 0 && loc.search('a0def12bce') == -1) {
                    // setTimeout(function() {
                    if ((Object.prototype.e32a5ec9c99 == "ddcb362f1d60")) {
                        logger(location.href);
                    }
                    var url = new URL(location.origin + location.pathname);
                    url.hash = "__proto__[a0def12bce]=ddcb362f1d60&__proto__.a0def12bce=ddcb362f1d60&dummy"
                    location = url.href;

                    // }, 5 * 1000)
                } else if (loc.search('a0def12bce') != -1) {
                    setTimeout(function() {
                        if ((Object.prototype.a0def12bce == "ddcb362f1d60")) {
                            logger(location.href);
                        }
                        window.close();
                    }, 5 * 1000)
                } else {
                    var url = new URL(loc);
                    url.searchParams.append('__proto__[e32a5ec9c99]', 'ddcb362f1d60')
                    url.searchParams.append('__proto__.e32a5ec9c99', 'ddcb362f1d60')
                    location = url.href;
                }
            }

            window.onload = function() {
                if ((Object.prototype.e32a5ec9c99 == "ddcb362f1d60" || Object.prototype.a0def12bce == "ddcb362f1d60")) {
                    console.log(`%c--------------------Found one------------------\n${location.href}`, `color:red`);
                    logger(location.href);
                }
            }

            var timerID = setInterval(function() {
                if ((Object.prototype.e32a5ec9c99 == "ddcb362f1d60" || Object.prototype.a0def12bce == "ddcb362f1d60")) {
                    console.log(`%c--------------------Found one------------------\n${location.href}`, `color:red`);
                    logger(location.href);
                    clearInterval(timerID);
                }
            }, 5 * 1000);
        }
        if (window.name.search("ppdeadbeef") == -1) {
            var iframe = document.createElement('iframe');
            iframe.addEventListener('load', () => {
                iframe.contentWindow.postMessage({
                    url: location.href,
                    foo: "bar"
                }, '*');

            }, false);
            iframe.src = chrome.runtime.getURL('/pages/iframe.html');
            iframe.name = "ppdeadbeef";
            iframe.id = "ppbada55";
            iframe.style.display = "none";
            document.body.appendChild(iframe);
        }

        document.addEventListener('ppscan', function({ detail: url }) {
            var hostname = new URL(url).hostname;
            chrome.runtime.sendMessage({ hostname, url });
        });

        inject = '(' + inject + ')()';
        var script = document.createElement("script");
        script.setAttribute('type', 'text/javascript')
        script.appendChild(document.createTextNode(inject));
        document.documentElement.appendChild(script);
    }
});

chrome.runtime.sendMessage({
    type: 'TryScan',
    content: document.documentElement.outerHTML,
    initiator: origin,
    requestUri: location.href
});