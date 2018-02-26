var Index = function(){};

Index.load = function(){
    $('.ui.sidebar').sidebar('attach events', '#burger-menu');
    $(".remove").off('click').on('click', function(){
        $('.ui.sidebar') .sidebar('hide');
    }); 
    $('.ui.dropdown').dropdown();
};