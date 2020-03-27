console.log('script connected');
$('document').ready(function() {
    let tabItem = $('.tab-item');

    // показуємо вибраний контент
    tabItem.on('click', function(event) {
        event.preventDefault();
        let activeContent = $(this).attr('href');
        $('.visible').toggleClass('visible');
        $(activeContent).toggleClass('visible');
        $('.tab-item-active').toggleClass('tab-item-active'); // якщо в елемента є вказаний клас ми його забераємо 
        $(this).toggleClass('tab-item-active'); // додаємо клас елементу по якому був клік
    });

});
