document.querySelector('.bcg-menu__toggle').addEventListener('click', function(event) {
    var $menu = document.querySelector('.bcg-menu');
    if ($menu.classList.contains('bcg-menu--expanded')) {
        $menu.classList.remove('bcg-menu--expanded');
    } else {
        $menu.classList.add('bcg-menu--expanded');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 5,
        breakpoints: {
            1200: {
                perView: 4
            },
            992: {
                perView: 3
            },
            600: {
                perView: 2
            }
        }
    })

    glide.mount();
});
