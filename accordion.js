const accordionHeader = document.querySelectorAll(".accordion-header");

accordionHeader.forEach(accordionItemtag => {
    console.log("tag", accordionItemtag);
    accordionItemtag.addEventListener("click", event => {
        const currentlyActiveHeader = document.querySelector(".accordion-header.active");
        if(currentlyActiveHeader && currentlyActiveHeader !== accordionItemtag){
            currentlyActiveHeader.classList.toggle("active");
            currentlyActiveHeader.nextElementSibling.style.maxHeight = 0;
        }
        console.log("clicked");
        accordionItemtag.classList.toggle("active");

        const accordBody = accordionItemtag.nextElementSibling;
        console.log("accordBody",accordBody);
        if(accordionItemtag.classList.contains("active")){
            console.log("test");
            accordBody.style.maxHeight = accordBody.scrollHeight + "px";
        }
        else{
            accordBody.style.maxHeight = 0;
        }

    });
});