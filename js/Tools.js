class Tools{
    static bindEvent(element, eventName, action){
        element.forEach(function(el){
            el.addEventListener(eventName, function(){
                action(this);
            });
        });
    }
}