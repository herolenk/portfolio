var showBigItemMiniImgs = function(){
        $('#bigItemP1').show();
        $('#bigItemP2').show();
        $('#bigItemP3').show();
    }

var main = function(){
    var currentLink;
    
/* Big Item Settings*/    
    var currentItem;
    var currentBackground;
    $('.p-item').on('click',function(){
        
        currentBackground = $(this).css('background-image');
        currentLink = $(this).next('.portLink').attr('href');
        currentItem = $(this).attr('id');
        $('.bigItem').css('background-image', currentBackground);
        $('#showbig').show();
    switch(currentItem){
        case 'portfItem1':
            showBigItemMiniImgs();
            $('#bigItemP1').css('background-image',"url(../img/portfolyoBigItem/Item1/portfolyoItem1Picture1.png)");
            $('#bigItemP2').css('background-image',"url(../img/portfolyoBigItem/Item1/portfolyoItem1Picture2.png)");
            $('#bigItemP3').css('background-image',"url(../img/portfolyoBigItem/Item1/portfolyoItem1Picture3.png)");
            break;
        case 'portfItem2':
            showBigItemMiniImgs();
            $('#bigItemP1').css('background-image',"url(../img/portfolyoBigItem/Item2/portfolyoItem2Picture1.png)");
            $('#bigItemP2').hide();
            $('#bigItemP3').hide();
            break;
        case 'portfItem3':
            showBigItemMiniImgs();
            $('#bigItemP1').css('background-image',"url(../img/portfolyoBigItem/Item3/portfolyoItem3Picture1.png)");
            $('#bigItemP2').css('background-image',"url(../img/portfolyoBigItem/Item3/portfolyoItem3Picture2.png)");
            $('#bigItemP3').css('background-image',"url(../img/portfolyoBigItem/Item3/portfolyoItem3Picture3.png)");
            break;
        case 'portfItem4':
            showBigItemMiniImgs();
            $('#bigItemP1').css('background-image',"url(../img/portfolyoBigItem/Item4/portfolyoItem4Picture1.png)");
            $('#bigItemP2').css('background-image',"url(../img/portfolyoBigItem/Item4/portfolyoItem4Picture2.png)");
            $('#bigItemP3').css('background-image',"url(../img/portfolyoBigItem/Item4/portfolyoItem4Picture3.png)");
            break;
        case 'portfItem5':
            showBigItemMiniImgs();
            $('#bigItemP1').css('background-image',"url(../img/portfolyoBigItem/Item5/portfolyoItem5Picture1.png)");
            $('#bigItemP2').hide();
            $('#bigItemP3').hide();
            break;   
    }
    });
     $('#bigItemP1').on('click',function(){
        var myBackground = $('#bigItemP1').css('background-image');
        $('.bigItem').css('background-image', myBackground);
    });   
    $('#bigItemP2').on('click',function(){
        var myBackground = $('#bigItemP2').css('background-image');
        $('.bigItem').css('background-image', myBackground);
    }); 
    $('#bigItemP3').on('click',function(){
        var myBackground = $('#bigItemP3').css('background-image');
        $('.bigItem').css('background-image', myBackground);
    }); 
    
    
    
    $('.newWindow').on('click',function(){
        
        $('.newWindow').attr('href', currentLink);
        
    });
    $('.b-i-remWindow').on('click',function(){
        
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