document.querySelector('.bcg-menu__toggle').addEventListener('click', function(event) {
    var $menu = document.querySelector('.bcg-menu');
    if ($menu.classList.contains('bcg-menu--expanded')) {
        $menu.classList.remove('bcg-menu--expanded');
    } else {
        $menu.classList.add('bcg-menu--expanded');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('.glide')) {
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
    }

});

var $modal = document.querySelector('.bcg-modal');
var $modalClose = document.querySelector('.bcg-modal__close');
if($modalClose) {
    $modalClose.addEventListener('click', function() {
        this.closest('.bcg-modal').classList.remove('bcg-modal--show');
    })

};

var modalContent = {
    'aruodas': {
        'content': '<p class="mb-5">Specialized online classifieds portal for real estate portal in Lithuania.</p><p class="mb-4">Facts about Aruodas.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Strongest Top of mind brand awareness.</li><li class="bcg-big-list__item">More than 440.000 real users/month (source: Gemius Audience).</li><li class="bcg-big-list__item">Regular ads list or search on the map, mobile friendly.</li><li class="bcg-big-list__item">Duplicates recognition - other ads for the same real estate are visible in one place.</li></ul><p><a href="https://aruodas.lt/" target="_blank" class="mt-4">Visit aruodas</a></p>'
    },
    'auto24': {
        'content': '<p class="mb-5">Auto24.ee - specialized online classifieds portal for automotive in Estonia.</p><p class="mb-4">Facts about Auto24.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Automotive portal with the strongest brand awareness in Estonia.</li><li class="bcg-big-list__item">More than 1 000 000 monthly visits (source: Google Analytics).</li><li class="bcg-big-list__item">Over 140 000 vehicle listings inserted every year.</li></ul><p><a href="https://auto24.ee/" target="_blank" class="mt-4">Visit auto24</a></p>'
    },
    'autoplius': {
        'content': '<p class="mb-5">Specialized online classifieds portal for automotive in Lithuania.</p><p class="mb-4">Facts about Autoplius.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">More than 600 000 unique visitors every month (source: Gemius Audience).</li><li class="bcg-big-list__item">Contains more than 200 thousand adverts.</li><li class="bcg-big-list__item">The estimated price of vehicles for sale in Autoplius.lt during 2018 was over 2.5 billion €</li></ul><p><a href="https://autoplius.lt/" target="_blank" class="mt-4">Visit autoplius</a></p>'
    },
    'city24ee': {
        'content': '<p class="mb-5">Specialized online classifieds portal for real estate in Estonia.</p><p class="mb-4">Facts about City24.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">500 thousand visits per month and a high number of returning customers.</li><li class="bcg-big-list__item">Top of mind brand in the most active real estate districts: cities Tallinn and Pärnu, counties Harju and Ida-Virumaa.</li><li class="bcg-big-list__item">1st choice among the visitors who search for real estate in new developments.</li><li class="bcg-big-list__item">High customer loyalty base and 1st choice among Russian spoken visitors.</li><li class="bcg-big-list__item">User-friendly portal with interesting and high-quality content.</li></ul><p><a href="https://city24.ee/" target="_blank" class="mt-4">Visit City24.ee</a></p>'
    },
    'city24lv': {
        'content': '<p class="mb-5">Specialized online classifieds portal for real estate portal in Latvia.</p><p class="mb-4">Facts about City24.lv:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">200 000 real users in average/month (source: Gemius Audience).</li><li class="bcg-big-list__item">Mobile friendly and customer loved functionalities.</li><li class="bcg-big-list__item">Top of mind brand for new development buyers and sellers.</li></ul><p><a href="https://city24.lv/" target="_blank" class="mt-4">Visit City24.lv</a></p>'
    },
    'cvbankas': {
        'content': '<p class="mb-5">Specialized online classifieds portal for jobs in Lithuania.</p><p class="mb-4">Facts about CVbankas.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Visited by 550 000 unique visitors per month (source: Google Analytics).</li><li class="bcg-big-list__item">More than 5000 job ads are published in CVbankas.lt.</li><li class="bcg-big-list__item">Lithuania\'s fastest-growing CV database containing of 600 000 CVs.</li></ul><p><a href="https://cvbankas.lt/" target="_blank" class="mt-4">Visit CVbankas.lt</a></p>'
    },
    'kainos': {
        'content': '<p class="mb-5">Price comparison portal in Lithuania.</p><p class="mb-4">Facts about Kainos.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Contains more than 1.5 million products .</li><li class="bcg-big-list__item">150 e-shops.</li><li class="bcg-big-list__item">More than 700 000 monthly visits (source: Google Analytics).</li></ul><p><a href="https://kainos.lt/" target="_blank" class="mt-4">Visit Kainos.lt</a></p>'
    },
    'kuldnebors': {
        'content': '<p class="mb-5">KuldneBörs.ee - general online classifieds portal for generic items in Estonia.</p><p class="mb-4">Facts about KuldneBörs.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">320 000 monthly unique users (source: Google Analytics).</li><li class="bcg-big-list__item">184 000 active ads.</li><li class="bcg-big-list__item">AI+human based content quality control.</li></ul><p><a href="https://kuldnebors.ee/" target="_blank" class="mt-4">Visit KuldneBörs</a></p>'
    },
    'kv': {
        'content': '<p class="mb-5">Specialized online classifieds portal for real estate in Estonia.</p><p class="mb-4">Facts about Kv.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Real estate portal with the strongest brand awareness in Estonia.</li><li class="bcg-big-list__item">More than 2,7 million sessions monthly are made to KV.EE (source: Google Analytics).</li><li class="bcg-big-list__item">KV.EE has the only local mobile app for search of rentals.</li><li class="bcg-big-list__item">KV.EE\'s mission is to inspire people to live better.</li></ul><p><a href="https://kv.ee/" target="_blank" class="mt-4">Visit KV</a></p>'
    },
    'osta': {
        'content': '<p class="mb-5">Online auction and shopping website in Estonia.</p><p class="mb-4">Facts about Osta.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">There are over 375 000 registered and authenticated users.</li><li class="bcg-big-list__item">More than one million new sale offers are added to the environment every month.</li><li class="bcg-big-list__item">In Osta.ee there are auctions and “Buy Now” offers.</li><li class="bcg-big-list__item">More than 1,7 million sessions monthly are made to Osta.ee (source: Google Analytics).</li></ul><p><a href="https://osta.ee/" target="_blank" class="mt-4">Visit Osta</a></p>'
    },
    'paslaugos': {
        'content': '<p class="mb-5">Specialized online classifieds portal for services in Lithuania.</p><p class="mb-4">Facts about Paslaugos.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Contains more than 10 000 ads.</li><li class="bcg-big-list__item">40 000 jobs posted.</li><li class="bcg-big-list__item">More than 300 000 monthly visits (source: Google Analytics).</li></ul><p><a href="https://paslaugos.lt/" target="_blank" class="mt-4">Visit Paslaugos</a></p>'
    },
    'skelbiu': {
        'content': '<p class="mb-5">General online classifieds portal for generic items in Lithuania.</p><p class="mb-4">Facts about Skelbiu.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">950 000 monthly unique users (source: Gemius Audience).</li><li class="bcg-big-list__item">690 000 active ads.</li><li class="bcg-big-list__item">Best known classifieds brand in Lithuania (TNS survey, 2015).</li><li class="bcg-big-list__item">AI+human based content quality control.</li></ul><p><a href="https://skelbiu.lt/" target="_blank" class="mt-4">Visit Skelbiu</a></p>'
    },
};

document.querySelectorAll('.bcg-brand-item').forEach(function(item) {
    item.addEventListener('click', function(e) {
        var $item = e.target.closest('.bcg-brand-item');
        var itemContent = modalContent[$item.dataset.brand]
        if(itemContent) {
            $modal.querySelector('.bcg-brand-modal__cover').setAttribute("style", "background-image: url(assets/img/brand-backgrounds/" + $item.dataset.brand + ".jpg)");
            $modal.querySelector('.bcg-brand-modal__logo').src = 'assets/img/brands/' + $item.dataset.brand + '.svg';
            $modal.querySelector('.bcg-modal__text').innerHTML = itemContent.content;
            $modal.classList.add('bcg-modal--show');
        }
    });
});