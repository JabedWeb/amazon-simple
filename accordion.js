const accordionItems = document.querySelectorAll('.elementor-accordion-item');

accordionItems.forEach(item => {
    item.addEventListener('click', () => {

        accordionItems.forEach(item => {
            item.classList.remove('accordion_active_item');
        });
        item.classList.add('accordion_active_item');

    });
});


jQuery(document).ready(function () {
    var category_names_bul = document.querySelector('.category_name_Blüten div div a font font');
    if (jQuery(category_names_bul).text('Oils') || jQuery(category_names_bul).text('Bulk')) {
        var inputs = document.querySelector('.ad_to_cart_lit .plus');
        var span = document.createElement('span');
        inputs.append(span);
        jQuery(span).text('Kg');
        // add class to span
        jQuery(span).addClass('measure_unit');
    } else {
        console.log("ok");
    }
});
jQuery(document).ready(function () {

    var child = document.querySelector('.elementor-active');
    console.log(jQuery(child));
    if (jQuery(child)) {
        var parent = child.parentElement;
        jQuery(parent).addClass('accordion_active_item');
    }


    jQuery('.elementor-accordion-item').on('click', function () {
        jQuery('.elementor-accordion-item').removeClass('accordion_active_item');
        jQuery(this).addClass('accordion_active_item');
    });
});