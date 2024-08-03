document.getElementById("nav-search").addEventListener("keyup", function (event) {
    const search = this.value.toUpperCase();
    const list = document.querySelectorAll('nav .menu');
    const aimList = [];
    if (search === '') {
        for (let i = 0; i < list.length; i++) {
            const node = list[i];
            node.style.display = 'block';
        }
        return;
    }
    for (let i = 0; i < list.length; i++) {
        const node = list[i];
        node.style.display = 'none';
        let key = node.attributes['searchkey'] ? node.attributes['searchKey'].textContent : '';
        key = key.toUpperCase();
        if (key.indexOf(search) !== -1) {
            aimList.push(key);
        }
    }
    for (let i = 0; i < list.length; i++) {
        const node = list[i];
        let key = node.attributes['searchkey'] ? node.attributes['searchKey'].textContent : '';
        if (aimList.find(i => i.includes(key.toUpperCase()))) {
            node.style.display = 'block';
        }
    }
});
function setMenuActive() {
    const dom = document.querySelector('nav .active');
    if (dom) {
        dom.classList.remove('active');
    }
    const hash = location.hash.slice(1);
    let id = location.href.match(/module-(.*?)\./);
    if (id && id[1]) {
        id = decodeURIComponent(id[1].replace(/25/g, ''))
        document.getElementById(id + '-' + hash + '-nav').classList.add('active');
    }

}
window.addEventListener('hashchange', function (e) {
    setMenuActive();
},
    false);
window.onload = () => {
    setMenuActive();
}