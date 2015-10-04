/*
    Name:  Alex Park
    Assignment:  Assignment 1
    Date:  Feb. 01. 2015
    
*/

// current page number of the memo. Its between 1 to 50.
var pageNum;

// textarea
var contents;

// page thorugh buttons and slides
var previousBtn, nextBtn, slides;

// when body is loaded, sets global variables 
// and check if there is already text on the first page of the memo.     
function reload()
{
    slides = document.querySelector("input[type=range]");
    pageNum = parseInt(slides.value);
    contents = document.querySelector("textarea");
    previousBtn = document.getElementById("previous");
    nextBtn = document.getElementById("next");
       
    if(localStorage["Alex_Park_memo1"])
        contents.value = localStorage["Alex_Park_memo1"];
}

// save the memo of the current page
function save()
{
    localStorage["Alex_Park_memo"+pageNum] = contents.value;
}

// clear the current page and go back to saved memo
function cancel()
{
    if(confirm("Are you sure you don't want to save it?"))
    { 
        contents.value = localStorage["Alex_Park_memo"+pageNum];
    }
}

// using slides, through the pages
function throughPage()
{
    pageNum = parseInt(document.querySelector("input[type=range]").value);
    
    // changeThePage();  ------------> updated on Mar.05.2015
    
    contents.value = localStorage["Alex_Park_memo"+pageNum];
    previousBtn.title = "move to page " + (pageNum-1);
    nextBtn.title = "move to page " + (pageNum+1);
    slides.title = " " + pageNum;
    
    //document.getElementById("previous").title = "move to page " + (pageNum-1);
    //document.getElementById("next").title = "move to page " + (pageNum+1);
    //document.querySelector("input[type=range]").title = " " + pageNum;
}

// clicking a button, move to the next or previous page
function move(obj)
{
    if(pageNum>0 && pageNum <51)
    {
        if(obj.id==="previous" && pageNum!==1)
        {
            pageNum--;
        }
        else if(obj.id==="next" && pageNum!==50)
        {
            pageNum++;
        }
        slides.value = pageNum;
        
        // changeThePage();  ----------> updated on Mar.05.2015
        
        contents.value = localStorage["Alex_Park_memo"+pageNum];
        previousBtn.title = "move to page " + (pageNum-1);
        nextBtn.title = "move to page " + (pageNum+1);
        slides.title = " " + pageNum;
    }
}

/*
function changeThePage()
{
    contents.value = localStorage["Alex_Park_memo"+pageNum];
    previousBtn.title = "move to page " + (pageNum-1);
    nextBtn.title = "move to page " + (pageNum+1);
    slides.title = " " + pageNum;
}
*/

// chage the font type, size and color to what the user selected
function changeFont()
{
    var select = document.querySelector("select");
    var index = select.selectedIndex;
    
    contents.style.fontFamily = select.options[index].text;
    contents.style.fontSize = document.querySelector("input[type=number]").value + "px";
    contents.style.color = document.querySelector("input[type=color]").value;
}