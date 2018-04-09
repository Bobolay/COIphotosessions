// IIFE - Immediately Invoked Function Expression
(function(yourcode) {

    yourcode(window.jQuery, window, document);

}(function($, window, document) {

    $(function() {

        // Portfolio carousel
        $('.owl-carousel').owlCarousel({
            items:1,
            // lazyLoad:true,
            // loop:true,
            margin:30
            // autoWidth:true
        });

        // Carousel tabs
        $(document).on('click', '.category-list li', function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var attr = $(this).attr('data-carousel-attr');
            $('.owl-carousel').removeClass('visible');
            $('.owl-carousel[data-carousel-attr="'+attr+'"]').addClass('visible');
        });

        // Form check inputs
        $('input, textarea').blur(function() {
            var $this = $(this);
            if ($this.val())
              $this.addClass('used');
            else
              $this.removeClass('used');
        });

        // Validate contact form
        $('form').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 3
                },
                email: {
                    required: true,
                    email: true
                }
            }
        });

        // Lightgallery
        $('.animated-thumbnials').lightGallery({
            thumbnail: true,
            selector: '.item'
        });

    });

    // The rest of the code goes here!
})
);