const accordionItems = document.querySelectorAll('.elementor-accordion-item');

accordionItems.forEach(item => {
  const isActive = item.querySelector('.elementor-active');
  try {
    item.classList.add('accordion_active_item');
    if (isActive) {
      item.style.cssText = 'border: 1px solid #0000FF !important;';
      // add class to the item
        item.classList.add('accordion_active_item');
    } else {
      item.style.cssText = 'border: 1px solid red;';
    }

  } catch (error) {
    console.log(error)
  }

});
