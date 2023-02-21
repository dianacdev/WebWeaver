const editSection = document.querySelector(".edit-section")
const button = document.getElementsByTagName("button")


function addElement(value){
    switch (value) {
        case "Heading 1":
            console.log("heading 1 clicked!")
            elementAppend('h1', 'Heading 1', editSection)
            break;
        case "Heading 2":
            console.log("heading 2 clicked!")
            elementAppend('h2', 'Heading 2', editSection)    
            break;
        case "Heading 3":
            console.log("heading 3 clicked!")
            elementAppend('h3', 'Heading 3', editSection)    
            break;
        case "Heading 4":
            console.log("heading 4 clicked!")
            elementAppend('h4', 'Heading 4', editSection)    
            break;
        case "Heading 5":
            console.log("heading 5 clicked!")
            elementAppend('h5', 'Heading 5', editSection)    
            break;
        case "Paragraph":
            console.log("paragraph clicked!")
            elementAppend('p', 'Paragraph', editSection)    
            break;
        case "Button":
            console.log("button clicked!")
            elementAppend('button', 'Button', editSection)    
            break;
        case "Div":
            console.log("div clicked!")
            elementAppend('div', 'Div', editSection)    
            break;
        case "Header":
            console.log("footer clicked!")
            elementAppend('header', 'Header', editSection)    
            break;
        case "Footer":
            console.log("footer clicked!")
            elementAppend('footer', 'Footer', editSection)    
            break;
        case "Sidebar":
            console.log("sidebar clicked!")
            elementAppend('footer', 'Footer', editSection)    
            break;
        case "Table":
            console.log("table clicked!")
            Modal()  
            break;
        case "Break":
            console.log("break clicked!")
            elementAppend('br', 'break', editSection)    
            break;
        case "Link":
            console.log("link clicked!")
            elementAppend('a', 'link', editSection)    
            break;
        case "Image":
            console.log("image clicked!")
            elementAppend('img', '', editSection)
            break;
        case "Main":
            console.log("main clicked!")
            elementAppend('main', 'Main', editSection)
            break;
        default:
            break;
    }
}

function elementAppend(element, placeholder, section){
    e = document.createElement(element)
    e.innerText = placeholder
    e.setAttribute('contenteditable',true)
    if (element === "img"){
        SOURCE = prompt("What is the Source of this image? Leave Blank if you plan to add the source later")
        e.src = SOURCE
        e.alt = "placeholder text for image"
    }
    else if(element === "a"){
        REDIRECT = prompt("paste the link you would like to redirect, Otherwise leave blank")
        e.href = REDIRECT
    }
    section.appendChild(e)
}


function tableAppend(){
//Activate a modal that asks heading number, column number row number
    table = document.createElement("table")
    thead = document.createElement('thead')
    row = document.createElement('tr')
    header = document.createElement('th')
    header.setAttribute('contenteditable', true)
    tbody = document.createElement('tbody')
    cell = document.createElement('td')
    cell.setAttribute('contenteditable', true) // the column in the row or the cell.
    header.innerText = "Heading"
    cell.innerText = "Cell"

    // row.appendChild(header)
    // thead.appendChild(row)
    // table.appendChild(thead)

    // row.appendChild(cell)
    // table.appendChild(tbody)
    // editSection.appendChild(table)
    

}


var modal = document.getElementById("myModal");
function Modal(){
modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
modal.style.display = "none";
}
