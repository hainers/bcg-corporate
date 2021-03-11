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
        'content': '<p>Specialized online classifieds portal for real estate portal in Lithuania.</p><p>Facts about Aruodas.lt:</p><ul><li>Strongest Top of mind brand awareness.</li><li>More than 440.000 real users/month (source: Gemius Audience).</li><li>Regular ads list or search on the map, mobile friendly.</li><li>Duplicates recognition - other ads for the same real estate are visible in one place.</li></ul><p><a href="https://aruodas.lt/" target="_blank">Visit aruodas</a></p>'
    },
    'auto24': {
        'content': '<p>Auto24.ee - specialized online classifieds portal for automotive in Estonia.</p><p>Facts about Auto24.ee:</p><ul><li>Automotive portal with the strongest brand awareness in Estonia.</li><li>More than 1 000 000 monthly visits (source: Google Analytics).</li><li>Over 140 000 vehicle listings inserted every year.</li></ul><p><a href="https://auto24.ee/" target="_blank">Visit auto24</a></p>'
    },
    'autoplius': {
        'content': '<p>Specialized online classifieds portal for automotive in Lithuania.</p><p>Facts about Autoplius.lt:</p><ul><li>More than 600 000 unique visitors every month (source: Gemius Audience).</li><li>Contains more than 200 thousand adverts.</li><li>The estimated price of vehicles for sale in Autoplius.lt during 2018 was over 2.5 billion €</li></ul><p><a href="https://autoplius.lt/" target="_blank">Visit autoplius</a></p>'
    },
    'city24ee': {
        'content': '<p>Specialized online classifieds portal for real estate in Estonia.</p><p>Facts about City24.ee:</p><ul><li>500 thousand visits per month and a high number of returning customers.</li><li>Top of mind brand in the most active real estate districts: cities Tallinn and Pärnu, counties Harju and Ida-Virumaa.</li><li>1st choice among the visitors who search for real estate in new developments.</li><li>High customer loyalty base and 1st choice among Russian spoken visitors.</li><li>User-friendly portal with interesting and high-quality content.</li></ul><p><a href="https://city24.ee/" target="_blank">Visit City24.ee</a></p>'
    },
    'city24lv': {
        'content': '<p>Specialized online classifieds portal for real estate portal in Latvia.</p><p>Facts about City24.lv:</p><ul><li>200 000 real users in average/month (source: Gemius Audience).</li><li>Mobile friendly and customer loved functionalities.</li><li>Top of mind brand for new development buyers and sellers.</li></ul><p><a href="https://city24.lv/" target="_blank">Visit City24.lv</a></p>'
    },
    'cvbankas': {
        'content': '<p>Specialized online classifieds portal for jobs in Lithuania.</p><p>Facts about CVbankas.lt:</p><ul><li>Visited by 550 000 unique visitors per month (source: Google Analytics).</li><li>More than 5000 job ads are published in CVbankas.lt.</li><li>Lithuania\'s fastest-growing CV database containing of 600 000 CVs.</li></ul><p><a href="https://cvbankas.lt/" target="_blank">Visit CVbankas.lt</a></p>'
    },
    'kainos': {
        'content': '<p>Price comparison portal in Lithuania.</p><p>Facts about Kainos.lt:</p><ul><li>Contains more than 1.5 million products .</li><li>150 e-shops.</li><li>More than 700 000 monthly visits (source: Google Analytics).</li></ul><p><a href="https://kainos.lt/" target="_blank">Visit Kainos.lt</a></p>'
    },
    'kuldnebors': {
        'content': '<p>KuldneBörs.ee - general online classifieds portal for generic items in Estonia.</p><p>Facts about KuldneBörs.ee:</p><ul><li>320 000 monthly unique users (source: Google Analytics).</li><li>184 000 active ads.</li><li>AI+human based content quality control.</li></ul><p><a href="https://kuldnebors.ee/" target="_blank">Visit KuldneBörs</a></p>'
    },
    'kv': {
        'content': '<p>Specialized online classifieds portal for real estate in Estonia.</p><p>Facts about Kv.ee:</p><ul><li>Real estate portal with the strongest brand awareness in Estonia.</li><li>More than 2,7 million sessions monthly are made to KV.EE (source: Google Analytics).</li><li>KV.EE has the only local mobile app for search of rentals.</li><li>KV.EE\'s mission is to inspire people to live better.</li></ul><p><a href="https://kv.ee/" target="_blank">Visit KV</a></p>'
    },
    'osta': {
        'content': '<p>Online auction and shopping website in Estonia.</p><p>Facts about Osta.ee:</p><ul><li>There are over 375 000 registered and authenticated users.</li><li>More than one million new sale offers are added to the environment every month.</li><li>In Osta.ee there are auctions and “Buy Now” offers.</li><li>More than 1,7 million sessions monthly are made to Osta.ee (source: Google Analytics).</li></ul><p><a href="https://osta.ee/" target="_blank">Visit Osta</a></p>'
    },
    'paslaugos': {
        'content': '<p>Specialized online classifieds portal for services in Lithuania.</p><p>Facts about Paslaugos.lt:</p><ul><li>Contains more than 10 000 ads.</li><li>40 000 jobs posted.</li><li>More than 300 000 monthly visits (source: Google Analytics).</li></ul><p><a href="https://paslaugos.lt/" target="_blank">Visit Paslaugos</a></p>'
    },
    'skelbiu': {
        'content': '<p>General online classifieds portal for generic items in Lithuania.</p><p>Facts about Skelbiu.lt:</p><ul><li>950 000 monthly unique users (source: Gemius Audience).</li><li>690 000 active ads.</li><li>Best known classifieds brand in Lithuania (TNS survey, 2015).</li><li>AI+human based content quality control.</li></ul><p><a href="https://skelbiu.lt/" target="_blank">Visit Skelbiu</a></p>'
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