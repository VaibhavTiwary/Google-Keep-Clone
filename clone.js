const addButton = document.querySelector('#add');

function myfun(text = 'vaibhav'){           

    const note = document.createElement('div');               //creating div
    note.classList.add('note');                    // adding classes dynamically

    const htmlData = `
    <div class="operation">
            <button class="edit"> <i class="fas fa-edit"></i></button>
            <button class="delete"> <i class="fas fa-trash-alt"></i></button>
        </div>

        <div class="main ${text ? "" : "hidden"}"> </div>
        <textarea class="${text ? "hidden" : ""}"></textarea>  `;

        note.insertAdjacentHTML('afterbegin',htmlData );             //inserting above html  data to note / two arguments i.e where and second is html data
     
        //getting reference
        const editButton = note.querySelector('.edit');
        const delButton = note.querySelector('.delete');
        const mainDiv = note.querySelector('.main');
        const textarea = note.querySelector('textarea');

        //deleting the node
        delButton.addEventListener('click', () => {
            note.remove();
        })

        textarea.value = text;
        mainDiv.innerHTML = text;

        //toggle using edit button
        editButton.addEventListener('click', () => {
            mainDiv.classList.toggle('hidden');
            textarea.classList.toggle('hidden');
        })


        document.body.appendChild(note);
        // it will add a node as the last child of a node



}