$('.reg__reg').on('click', function (e) {
    e.preventDefault();
    $('.reg__block').addClass('blocked');
    $('.reg__block__registration').removeClass('blocked');
});

$('.reg__log').on('click', function (e) {
    e.preventDefault();
    $('.reg__block').removeClass('blocked');
    $('.reg__block__registration').addClass('blocked');
});

$('.link__items_men').on('click', function() {
    let currentSel = $('.link__active');
    if (this.classList.contains('link__active')) {
    } else {
        currentSel.removeClass('link__active');
        this.classList.add('link__active');
    }
    $('.active').removeClass('active');
    if ($('.link__active').attr("id") == 'sotPoli') {
        $('#sotPoli2').addClass('active');
    }
    if ($('.link__active').attr("id") == 'monPoli') {
        $('#monPoli2').addClass('active');
    }
    if ($('.link__active').attr("id") == 'complect') {
        $('#complect2').addClass('active');
    }
    if ($('.link__active').attr("id") == 'tepl') {
        $('#tepl2').addClass('active');
    }
});

$('.link__ul1').hide();
$('.link__ul2').hide();

$('.chat__block').hide();

$('.haveList1').on('click', function() {
    $('.link__ul1').stop().fadeToggle(500);
});

$('.haveList2').on('click', function() {
    $('.link__ul2').stop().fadeToggle(500);
});

$('.chat__btn').on('click', function() {
    $('.chat__block').stop().fadeToggle(500);
});

$('.filter__color').on('click', function() {
    $(this).toggleClass('selected__filter__color');
});

$(document).mouseup(function (e) {
    let container = $('.cart__info__block');
    if (container.has(e.target).length === 0){
        $('.cart__info__block').removeClass('cart__open');
        $('.cart__info__block').on('click', function() {
            $('.cart__info__block').addClass('cart__open');
        });
    };
    $('.cart__block').on('click', function() {
        $('.cart__info__block').toggleClass('cart__open');
    });
});


$('.catalog__find_item').on('click', function() {
    $('.active').removeClass('active');
    this.classList.add('active');
    $('.link__active').removeClass('link__active');
    if ($('.active').attr("id") == 'sotPoli2') {
        $('#sotPoli').addClass('link__active');
    }
    if ($('.active').attr("id") == 'monPoli2') {
        $('#monPoli').addClass('link__active');
    }
    if ($('.active').attr("id") == 'complect2') {
        $('#complect').addClass('link__active');
    }
    if ($('.active').attr("id") == 'tepl2') {
        $('#tepl').addClass('link__active');
    }
});

$('.product').find('.product__color').on('click', function() {
    $('.product').find('.selected__color').removeClass('selected__color');
    this.classList.add('selected__color');
});

$('#starFill3').on('click', function() {
    $('#starFill3').toggleClass('active__star');
});

$('.chat__close').on('click', function() {
    $('.chat__block').hide();
});

let width = $('.scroll__block').width()

$('.catalog__find_block').width(width);

let width2 = $('.filter__bar').width()

$('.filter__btn__block').width(width2);

$('.filter__docs').hide();

$('.filter__doc_title').on('click', function(e) {
    $('.filter__docs').stop().fadeToggle(200);
});

$(document).mouseup(function (e) {
    let container = $('.filter__docs');
    if (container.has(e.target).length === 0){
        $('.filter__docs').hide();
    }
});

$('.type__compani').on('click', function(e) {
    e.preventDefault();
    list = $('.type__compani');
    if (list[0].classList.contains('selected')) {
        list[0].classList.remove('selected');
        list[1].classList.add('selected');
    } else {
        list[1].classList.remove('selected');
        list[0].classList.add('selected');
    }
});

$('tr .pr_color .product__color_block').hide();

$('tr .pr_color span').on('click', function() {
    $(this).parent().children('.product__color_block').fadeIn(400);
});

$(document).mouseup(function (e) {
    let container = $('tr .pr_color .product__color_block');
    if (container.has(e.target).length === 0){
        $('tr .pr_color .product__color_block').hide();
    }
});

$('tr .pr_color .product__color_block .product__colors .product__color').on('click', function() {
    $('tr .pr_color .product__color_block .product__colors .selected__color').removeClass('selected__color');
    $(this).addClass('selected__color');
    let color = $(this).css('background-color');
    $(this).parent().parent().parent().children('.product__color__selected').css('background-color', color);
});

$('tr .pr_size .select__size__block').hide();

$('tr .pr_size .sizes .select').on('click', function() {
    $(this).parent().parent().children('.select__size__block').fadeIn(400);
});

$(document).mouseup(function (e) {
    let container = $('tr .pr_size .select__size__block');
    if (container.has(e.target).length === 0){
        $('tr .pr_size .select__size__block').hide();
    }
});

$('.view__product_style.small').on('click', function() {
    $('.product').css('display', 'none');
    $('.catalog__products_block table').css('display', 'table');
});

$('.view__product_style.large').on('click', function() {
    $('.product').css('display', 'flex');
    $('.catalog__products_block table').css('display', 'none');
});