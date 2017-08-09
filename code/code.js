var main = function(){
    
    $('#item1').on('click',function(){$('.portf-item').children().removeClass('sPortfolioItem');$('#item1').addClass('sPortfolioItem');});
    $('#item2').on('click',function(){$('.portf-item').children().removeClass('sPortfolioItem');$('#item2').addClass('sPortfolioItem');});
    $('#item3').on('click',function(){$('.portf-item').children().removeClass('sPortfolioItem');$('#item3').addClass('sPortfolioItem');});
    $('#item4').on('click',function(){$('.portf-item').children().removeClass('sPortfolioItem');$('#item4').addClass('sPortfolioItem');});
    $('#item5').on('click',function(){$('.portf-item').children().removeClass('sPortfolioItem');$('#item5').addClass('sPortfolioItem');});
    
}
$(document).ready(main);