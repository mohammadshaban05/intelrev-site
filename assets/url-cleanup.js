(() => {
    const { pathname, search, hash } = window.location;
    let cleanPath = pathname;

    if (pathname.endsWith('/index.html')) {
        cleanPath = pathname.slice(0, -'index.html'.length) || '/';
    } else if (pathname.endsWith('/work.html')) {
        cleanPath = pathname.slice(0, -'work.html'.length) + 'work/';
    }

    if (cleanPath !== pathname) {
        window.history.replaceState(null, '', `${cleanPath}${search}${hash}`);
    }
})();
