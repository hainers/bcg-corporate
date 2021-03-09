document.querySelector('.bcg-menu__toggle').addEventListener('click', function(event) {
    var $menu = document.querySelector('.bcg-menu');
    if ($menu.classList.contains('bcg-menu--expanded')) {
        $menu.classList.remove('bcg-menu--expanded');
    } else {
        $menu.classList.add('bcg-menu--expanded');
    }
});