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
            type: 'slider',
            bound: true,
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

    if(document.querySelector('.gallery-glide')) {
        var glide = new Glide('.gallery-glide', {
            type: 'carousel',
            startAt: 0,
            perView: 1,
            autoplay: 6000
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
        'content': '<p class="mb-5">Real estate classifieds portal in Lithuania.</p><p class="mb-4">Facts about Aruodas.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading real estate classifieds portal in Lithuania based on number of listings as of 16 March 2021, average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>.</li><li class="bcg-big-list__item">Over 6 million monthly visits on average during 2020 (Source: Google Analytics).</li></ul><p class="mt-5 mb-2"><a href="https://aruodas.lt/" target="_blank">Visit aruodas</a></p>'
    },
    'auto24': {
        'content': '<p class="mb-5">Automotive classifieds in Estonia.</p><p class="mb-4">Facts about Auto24.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading automotive portal in Estonia based on number of car listings as of 16 March 2021.</li><li class="bcg-big-list__item">Advertises listings of car, motorbike, boat and heavy equipment advertising.</li></ul><p class="mt-5 mb-2"><a href="https://auto24.ee/" target="_blank">Visit auto24</a></p>'
    },
    'autoplius': {
        'content': '<p class="mb-5">Automotive classifieds portal in Lithuania.</p><p class="mb-4">Facts about Autoplius.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading automotive classifieds portal Lithuania based on number of listings as of 16 March 2021, average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a></li><li class="bcg-big-list__item">Over 19 million monthly visits in average during 2020 (Source: Google Analytics).</li></ul><p class="mt-5 mb-2"><a href="https://autoplius.lt/" target="_blank">Visit autoplius</a></p>'
    },
    'city24ee': {
        'content': '<p class="mb-5">Real estate classifieds portal in Estonia.</p><p class="mb-4">Facts about City24.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">No. 2 portal in Estonia based on average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a></li><li class="bcg-big-list__item">User-friendly portal with interesting and high-quality content and innovative functionalities.</li><li class="bcg-big-list__item">It has been a home for homes since 2000.</li></ul><p class="mt-5 mb-2"><a href="https://city24.ee/" target="_blank">Visit City24.ee</a></p>'
    },
    'city24lv': {
        'content': '<p class="mb-5">Real estate classifieds portal in Latvia</p><p class="mb-4">Facts about City24.lv:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">User-friendly portal with interesting and high-quality content and innovative functionalities.</li><li class="bcg-big-list__item">Helping real estate buyers and sellers to find the perfect match since 2005.</li></ul><p class="mt-5 mb-2"><a href="https://city24.lv/" target="_blank">Visit City24.lv</a></p>'
    },
    'cvbankas': {
        'content': '<p class="mb-5">Jobs classifieds portal in Lithuania.</p><p class="mb-4">Facts about CVbankas.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading jobs classifieds portal in Lithuania based on number of listings as of 16 March 2021, average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>.</li><li class="bcg-big-list__item">Over 2 million monthly visits on average during 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>.</li><li class="bcg-big-list__item">Résumé database with over 700,000 résumés as of 16 March 2021.</li></ul><p class="mt-5 mb-2"><a href="https://cvbankas.lt/" target="_blank">Visit CVbankas.lt</a></p>'
    },
    'kainos': {
        'content': '<p class="mb-5">Price comparison portal in Lithuania.</p><p class="mb-4">Facts about Kainos.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">No.2 portal in Lithuania based on average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>.</li><li class="bcg-big-list__item">Over 1.5 million monthly visits on average during 2020 (Source: Google Analytics)</li><li class="bcg-big-list__item">As of 16 March 2021, Kainos.lt worked with over 300 e-shops and showed over 2 million products.</li><li class="bcg-big-list__item">The product-related price information, including price and stock status is updated every 30 minutes.</li></ul><p class="mt-5 mb-2"><a href="https://kainos.lt/" target="_blank">Visit Kainos.lt</a></p>'
    },
    'kuldnebors': {
        'content': '<p class="mb-5">General classifieds portal in Estonia.</p><p class="mb-4">Facts about KuldneBörs.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Operates in a variety of categories, such as construction materials, agricultural equipment, pets and household goods etc.</li><li class="bcg-big-list__item">KuldneBörs.ee started as a newspaper for advertisements in 1993 and has had an online presence since 1999.</li></ul><p class="mt-5 mb-2"><a href="https://kuldnebors.ee/" target="_blank">Visit KuldneBörs</a></p>'
    },
    'kv': {
        'content': '<p class="mb-5">Real estate classifieds portal in Estonia.</p><p class="mb-4">Facts about KV.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading real estate portal in Estonia based on number of listings as of 16 March 2021, average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>.</li><li class="bcg-big-list__item">KV.ee\'s mission since 1999 has been to inspire people to live better.</li></ul><p class="mt-5 mb-2"><a href="https://kv.ee/" target="_blank">Visit KV</a></p>'
    },
    'osta': {
        'content': '<p class="mb-5">Marketplace in Estonia Osta.ee</p><p class="mb-4">Facts about Osta.ee:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading marketplace in Estonia based on number of listings as of 16 March 2021, average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>.</li><li class="bcg-big-list__item">As of 18 March 2021, there were over 400,000 registered users.</li><li class="bcg-big-list__item">Offers the ability to buy via auctions or “Buy Now” offers.</li><li class="bcg-big-list__item">Auctions organized by many state agencies and municipalities.</li></ul><p class="mt-5 mb-2"><a href="https://osta.ee/" target="_blank">Visit Osta</a></p>'
    },
    'paslaugos': {
        'content': '<p class="mb-5">Service classifieds portal in Lithuania.</p><p class="mb-4">Facts about Paslaugos.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item"> As of 16 March 2021, Paslaugos.lt had over 12,000 service providers advertising.</li><li class="bcg-big-list__item">The website is designed to help visitors to find and compare service providers by reviewing their profile pages, service prices, portfolios and other customers’ reviews.</li></ul><p class="mt-5 mb-2"><a href="https://paslaugos.lt/" target="_blank">Visit Paslaugos</a></p>'
    },
    'skelbiu': {
        'content': '<p class="mb-5">Generalist classifieds portal in Lithuania.</p><p class="mb-4">Facts about Skelbiu.lt:</p><ul class="bcg-big-list"><li class="bcg-big-list__item">Leading generalist classifieds portal in Lithuania based on number of listings as of 16 March 2021, average number of monthly visits in 2020 and average monthly time on site per visit in 2020 according to <a href="https://www.similarweb.com/" target="_blank">SimilarWeb</a>. </li><li class="bcg-big-list__item"> Over 22 million monthly visits on average during 2020 (Source: Google Analytics).</li><li class="bcg-big-list__item">Listings moderated by artificial Intelligence and human resources for quality control.</li></ul><p class="mt-5 mb-2"><a href="https://skelbiu.lt/" target="_blank">Visit Skelbiu</a></p>'
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

var $downloadModal = document.querySelector('.bcg-download-modal');
var $downloadModalClose = document.querySelector('.bcg-modal__close');
var $downloadSubmit = document.querySelector('.bcg-modal__download');
var downloadLink = '';
if($downloadModalClose) {
    $downloadModalClose.addEventListener('click', function() {
        this.closest('.bcg-download-modal').classList.remove('bcg-modal--show');
    })
};

document.querySelectorAll('.js-bcg-download-link').forEach(function(item) {
    item.addEventListener('click', function(e) {
        var lsEnabled = false;
       if(localStorage.getItem('bcgCountry') && lsEnabled) {
           return;
       } else {
           e.preventDefault();
           $downloadModal.classList.add('bcg-modal--show');
           downloadLink = e.target.href;
       }
    });
});

$downloadSubmit.addEventListener('click', function(e) {
    var downloadCountry = document.getElementById('countrySelect').value;
    localStorage.setItem('bcgCountry', downloadCountry);

    if(downloadCountry) {
        $downloadSubmit.href = downloadLink;
        $downloadSubmit.click();
        this.closest('.bcg-download-modal').classList.remove('bcg-modal--show');
    } else {
        e.preventDefault();
    }
});



document.querySelectorAll('.bcg-field__input').forEach(function(item) {
    item.addEventListener('focus', function(e) {
        this.closest('.bcg-field').classList.add('bcg-field--focused');
        console.log('focused', this.closest('.bcg-field'));
    });

    item.addEventListener('blur', function(e) {
        if(this.value) {
            this.closest('.bcg-field').classList.add('bcg-field--filled');
        }
        this.closest('.bcg-field').classList.remove('bcg-field--focused');
        console.log('blurred', this.closest('.bcg-field'));
    });

    item.addEventListener('keyup', function(e) {
        if(this.value) {
            this.closest('.bcg-field').classList.add('bcg-field--filled');
        } else {
            this.closest('.bcg-field').classList.remove('bcg-field--filled');
        }
        console.log('keyup', this.value);
    });

});


document.querySelector('.nav__item--with-dropdown').addEventListener('click', function(e) {
    console.log(e);
    if(e.target.matches('.nav-item-expand')) {
        document.querySelector('.nav__item--with-dropdown').classList.toggle('nav__item--expanded');
    }
})

