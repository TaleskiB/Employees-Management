jQuery(document).ready(function($) {
    
    

    $('.modal-extended .close-it').on("click", function(e) {
        $('.modal-extended').removeClass('show');
        e.preventDefault();
    });         
     


    if ( $(window).width() < 768) {   
        $('.open-modal-extended').on("click", function(e) {
            $('.modal-extended').removeClass('show');
            $(this).closest('.feature-single').find('.modal-extended').toggleClass('show');
            e.preventDefault();   

            $('html, body').animate({
                scrollTop: $(this).closest(".feature-single").offset().top - 85
            }, 500); 
        }); 
    } 
    else {
        $('.open-modal-extended').on("click", function(e) {
            $('.modal-extended').removeClass('show');
            $(this).closest('.feature-single').find('.modal-extended').toggleClass('show');
            e.preventDefault(); 

            $('html, body').animate({
                scrollTop: $(this).closest(".feature-single").offset().top - 185
            }, 500);
        }); 
    }  
        
 });