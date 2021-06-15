$(function(){
    
    
    $(".single-img.card>.opacity ul li").click(function(){
        
        $(".popup_container.card").fadeIn();
        $("body").css('overflow','hidden');
    });
    
    $(".popup_close").click(function(){
        
        $(".popup_container").fadeOut();
        $("body").css('overflow','inherit');
    })
    
    
    $(".single-img.landing>.opacity ul li").click(function(){
        
        $(".popup_container.landing").fadeIn();
        $("body").css('overflow','hidden');
    });
    
    $(".popup_close").click(function(){
        
        $(".popup_container").fadeOut();
        $("body").css('overflow','inherit');
    })
    
    
});