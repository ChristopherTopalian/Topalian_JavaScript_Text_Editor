// makeTitleOfApp.js

function makeTitleOfApp()
{
    // mainDiv
    let mainDiv = ce('div');
    mainDiv.style.position = 'absolute';
    mainDiv.style.right = '20px';
    mainDiv.style.top = '2px';
    mainDiv.style.zIndex = 1;
    ba(mainDiv);

    //-//

    // titleOfApp
    let titleOfApp = ce('a');
    titleOfApp.id = 'titleOfApp';
    titleOfApp.textContent = 'Topalian JavaScript Text Editor';
    titleOfApp.href = 'https://github.com/christophertopalian/';
    titleOfApp.target = '_blank';
    titleOfApp.style.fontSize = '17px';
    titleOfApp.style.fontWeight = 'bold';
    titleOfApp.style.textDecoration = 'none';
    titleOfApp.style.color = 'gray';
    mainDiv.append(titleOfApp);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

