class Tools{
    static bindEvent(element, eventName, action, extraParams){
        if(element.length>0){//NodeList
            element.forEach(function(el){
                Tools.assignEventToElement(el, eventName, action, extraParams);
            });
        }else{//Element
            this.assignEventToElement(element, eventName, action, extraParams);
        }
    }

    static assignEventToElement(element, eventName, action, extraParams){
        element.addEventListener(eventName, function(){
            if(extraParams) action(extraParams);
            else action(this);
        });
    }
}