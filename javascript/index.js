var Index = function(){};

Index.load = function(){
    $("#mainContent").removeClass("lab-hidden");
    $('.ui.sidebar').sidebar('setting','closeable',false).sidebar('attach events', '#burger-menu');
    $(".remove").off('click').on('click', function(){
        $('.ui.sidebar') .sidebar('hide');
    });
    $('.ui.dropdown').dropdown();
    $('.menu .item').tab();
    $('.vertical.pointing.menu .item').tab();  
};
