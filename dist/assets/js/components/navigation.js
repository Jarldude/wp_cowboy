import $ from 'jquery';

console.log('from nav.js');

$('.c-navigation').on('mouseenter', '.menu-item-has-children', (e) => {
    $(e.currentTarget).addClass('open');
}).on('mouseleave', '.menu-item-has-children', (e) => {
    $(e.currentTarget).removeClass('open');
});