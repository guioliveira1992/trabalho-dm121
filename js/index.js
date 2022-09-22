let arrHead = new Array();
arrHead = ['Name', 'Age', 'email', 'Edit', 'Delete']; // table headers.

const LINE_NAME = 0;
const LINE_AGE = 1;
const LINE_EMAIL = 2;
const LINE_EDIT = 3;
const LINE_REMOVE = 4;

var objs = []



function main() {

    const div = document.createElement("div");

    const tab = document.createElement("table")
    const thead = document.createElement("thead")

    tab.setAttribute('id', 'empTable');
    // tab.border="1px"

    let tr = tab.insertRow(-1);

    const trHead = document.createElement("tr")

    for (let h = 0; h < arrHead.length; h++) {
        let th = document.createElement('th'); // the header object.
        th.innerHTML = arrHead[h];
        trHead.appendChild(th)
    }

    thead.appendChild(trHead)

    tab.appendChild(thead)
    div.appendChild(tab)


    document.body.appendChild(div);


}

let addRow = () => {
    let empTab = document.getElementById('empTable');
    const tbody = document.createElement("tbody")
    let flag = document.getElementById("flag")

    console.log(flag.value)
    if (flag.value != "n") {
        console.log('edit')

        console.log(empTab.rows.length)
        if (empTab.rows.length > 0) {

            empTab.deleteRow(flag.value);
        }

    }

    let rowCnt = empTab.rows.length;    // get the number of rows.
    let tr = empTab.insertRow(rowCnt); // table row.
    tr = empTab.insertRow(rowCnt);

    let person = new Object();
    let exist = false

    for (let c = 0; c < arrHead.length; c++) {

        console.log(flag.value)


        for (let i = 0; i < objs.length; i++) {
            console.log(objs[i].email)
            if (objs[i].email == document.getElementById('email').value) {
                console.log(document.getElementById('email').value)
                if (flag.value == "n") {
                    exist = true
                } else {
                    objs[i].email = document.getElementById('email').value
                    objs[i].age = document.getElementById('age').value
                    objs[i].name = document.getElementById('name').value

                }
                break
            }
        }








        console.log(exist)

        if (exist == false) {
            let td = document.createElement('td');          // table definition.
            td = tr.insertCell(c);

            let line = document.createElement('tr');
            line.border = "3px"
            switch (c) {
                case LINE_NAME:
                    line.textContent = document.getElementById('name').value
                    person.name = document.getElementById('name').value
                    break
                case LINE_AGE:
                    line.textContent = document.getElementById('age').value
                    person.age = document.getElementById('age').value
                    break
                case LINE_EMAIL:
                    line.textContent = document.getElementById('email').value
                    person.email = document.getElementById('email').value
                    break
                case LINE_EDIT:
                    let buttonEdit = document.createElement('input');
                    // set the attributes.
                    buttonEdit.setAttribute('type', 'button');
                    buttonEdit.setAttribute('value', '    ');
                    buttonEdit.style.backgroundColor = "darkgoldenrod"
                    buttonEdit.style.backgroundImage = "url('img/pencil.svg')"

                    // add button's "onclick" event.
                    buttonEdit.setAttribute('onclick', 'editRow(this)');
                    td.appendChild(buttonEdit);
                    break
                case LINE_REMOVE:
                    let buttonRemove = document.createElement('input');

                    // set the attributes.
                    buttonRemove.setAttribute('type', 'button');
                    buttonRemove.setAttribute('value', '    ');
                    buttonRemove.style.backgroundColor = "red"

                    buttonRemove.style.backgroundImage = "url('img/trash.svg')"

                    // add button's "onclick" event.
                    buttonRemove.setAttribute('onclick', 'removeRow(this)');

                    td.appendChild(buttonRemove);
                    break

            }

            td.appendChild(line);
        } else {

        }

    }
    h4 = document.getElementById("message")
    fildset = document.getElementById("fildsetPersonal")
    if (exist) {

        console.log('Item ja cadastrado')
        h4.style.color = "red"
        h4.textContent = 'Item ja cadastrado!'

    } else {
        h4.style.color = "green"
        h4.textContent = 'Item cadastrado com sucesso!'
        document.getElementById('name').value = ''
        document.getElementById('age').value = ''
        document.getElementById('email').value = ''
    }
    fildset.appendChild(h4)
    if(flag.value == "n"){
        objs.push(person)
    }
    
    console.log(objs)
    flag.value = "n"


}

let removeRow = (oButton) => {
    let empTab = document.getElementById('empTable');
    deleteItemArray(oButton.parentNode.parentNode.rowIndex)
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
   
}

let editRow = (oButton) => {
    let empTab = document.getElementById('empTable');
    let array = new Array()
    let array2 = new Array()

    let flag = document.getElementById("flag")

    flag.value = oButton.parentNode.parentNode.rowIndex

    console.log()
    array = empTab.rows[oButton.parentNode.parentNode.rowIndex].cells




    for (let i = 0; i < array.length; i++) {

        array2.push(array[i])

    }

    for (let c = 0; c < 3; c++) {
        array2.push(array[c])
        console.log(array2[c].innerText)
        console.log('update')
    }

    var person = new Object;
    for (i = 0; i < objs.length; i++) {
        if (array2[2].innerText == objs.at(i).email) {
            console.log('aqui', objs.at(i).name)
            for (let c = 0; c < 3; c++) {

                switch (c) {
                    case LINE_NAME:
                        document.getElementById('name').value = objs.at(i).name
                        break
                    case LINE_AGE:
                        document.getElementById('age').value = objs.at(i).age
                        break
                    case LINE_EMAIL:
                        document.getElementById('email').value = objs.at(i).email
                        break
                    default:
                        break
                }
            }
            break
        }
    }



    // console.log(array2[2].innerText)
    
    // console.log(empTab.rows[oButton.parentNode.parentNode.rowIndex].cells) // buttton -> td -> tr
    // empTab.deleteRow(oButton.parentNode.parentNode.i); // buttton -> td -> tr
}


let deleteItemArray = (indexT) => {
    let empTab = document.getElementById('empTable');
    let array = new Array()
    let array2 = new Array()
    console.log(empTab.rows[indexT].cells)
    array = empTab.rows[indexT].cells
    for (let i = 0; i < array.length; i++) {


        array2.push(array[i])


    }

    for (let c = 0; c < 3; c++) {
        array2.push(array[c])
        console.log(array2[c].innerText)
    }

    for (let i = 0; i < objs.length; i++) {
        if (array2[2].innerText == objs.at(i).email) {
            objs.splice(i, 1)
        }
    }
    
    
}

let submit = document.getElementById("submit")
submit.setAttribute('onclick', 'addRow(this)');



main()

