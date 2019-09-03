$(function(){
   $("a").click(function(event){
       if(this.hash !== "") {
        event.preventDefault();

        var cat_ = this.hash;
        $("html, body").animate({scrollTop: $(cat_).offset().top}, 500, function(){
          window.location.hash = cat_;
        });
       }
   });
     // $('[data-toggle="popover"]').popover();
});
