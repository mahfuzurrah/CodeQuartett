Photostack.prototype._addNavigation = function() {
    // add nav dots
    this.nav = document.createElement('nav');
    var inner = '';
    
    // Add "Previous" button
    inner += '<button class="photostack-nav-button prev-button"><i class="fa-solid fa-arrow-left-long"></i></button>';

    for (var i = 0; i < this.itemsCount; ++i) {
        inner += '<span></span>';
    }

    // Add "Next" button
    inner += '<button class="photostack-nav-button next-button"><i class="fa-solid fa-arrow-right-long"></i></button>';
    
    this.nav.innerHTML = inner;
    this.el.appendChild(this.nav);
    this.navDots = [].slice.call(this.nav.children);

    var self = this;

    // Add click event listeners to the "Previous" and "Next" buttons
    var prevButton = this.nav.querySelector('.prev-button');
    var nextButton = this.nav.querySelector('.next-button');

    prevButton.addEventListener('click', function () {
        self._navigate('prev');
    });

    nextButton.addEventListener('click', function () {
        self._navigate('next');
    });

    // Remove the "current flippable" class from navigation buttons
    
}




