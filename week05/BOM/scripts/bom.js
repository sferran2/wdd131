
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapList');

let chaptersArray = getChapterList() || [];

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li); 
        deleteChapter(li.textContent); 
        input.focus();
    });
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList(); 
}

chaptersArray.forEach(displayList);

button.addEventListener('click', function(){
    const chapter = input.value.trim();

    if (chapter !== '') {
        displayList(chapter); 
        chaptersArray.push(chapter); 
        setChapterList(); 

        
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter name!');
        input.focus();
    }
});
