var main = function(){
    var currentLink;
    
/* Big Item Settings*/    
    
    var currentItem;
    $('.p-item').on('click',function(){
        
        var currentBackground = $(this).css('background-image');
        currentLink = $(this).next('.portLink').attr('href');
        currentItem = $(this).attr('id');
        $('.bigItem').css('background-image', currentBackground);
        $('#showbig').show();
        
    });
    
    switch(currentItem){
        case 'portfItem1':
            //do somethings;
            break;
        case 'portfItem2':
            //do somethings;
            break;
        case 'portfItem3':
            //do somethings;
            break;
        case 'portfItem4':
            //do somethings;
            break;
        case 'portfItem5':
            //do somethings;
            break;   
    }
    
    
    $('.newWindow').on('click',function(){
        
        $('.newWindow').attr('href', currentLink);
        
    });
    $('.b-i-remWindow').on('click',function(){
        
        $('body').css('opacity', '1');
        $('#showbig').hide();
        
    });
    $('.allBtn').on('click',function(){
        
        $('.allItems').show();
        $('.p-item').css('border', '10px solid rgba(0,0,0,0.9)');
        
    });
    $('.htmlCssBtn').click(function(){
        
        $('.allItems').hide();
        $('.htmlCss').show();
        $('.p-item').css('border', '10px solid #EC662B');
        
    });
    $('.jsBtn').click(function(){
        
        $('.allItems').hide();
        $('.javascript').show();
        $('.p-item').css('border', '10px solid #F0DB4F');
        
    });
    $('.jqueryBtn').click(function(){
        
        $('.allItems').hide();
        $('.jquery').show();
        $('.p-item').css('border', '10px solid #0769AD');
    });
    
}
$(document).ready(main);