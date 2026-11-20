
const cl = console.log;

const formstd = document.getElementById('formStd');

const fnamecontrol = document.getElementById('fName');
const lnamecontrol = document.getElementById('lName');
const emailcontrol = document.getElementById('email');
const contactcontrol = document.getElementById('contact');
const agecontrol = document.getElementById('age');
const bdatecontrol = document.getElementById('bDate');

const Student = document.getElementById('Student');
const submitbtn = document.getElementById('submitbtn');


let stdArr = [
    {
        fname: "Kunal",
        lname: "More",
        email: "ksmore@gmail.com",
        contact: "8788899020",
        age: 22,
        bdate: "2004-09-23"
    }
];




function createtable(arr) {

    let result = "";

    arr.forEach((std, i) => {

        result += `
            <tr>
                <td>${i + 1}</td>
                <td>${std.fname}</td>
                <td>${std.lname}</td>
                <td>${std.email}</td>
                <td>${std.contact}</td>
                <td>${std.age}</td>
                <td>${std.bdate}</td>

                <td>
                    <button class="btn btn-sm btn-primary">
                        Edit
                    </button>
                </td>

                <td>
                    <button class="btn btn-sm btn-danger">
                        Remove
                    </button>
                </td>
            </tr>
        `;
    });

    Student.innerHTML = result;
}


createtable(stdArr);

function onstudentha(e) {

    e.preventDefault();

    let stdobj = {
        fname: fnamecontrol.value,
        lname: lnamecontrol.value,
        email: emailcontrol.value,
        contact: contactcontrol.value,
        age: agecontrol.value,
        bdate: bdatecontrol.value
    };

    stdArr.push(stdobj);
    createtable(stdArr);
}

formstd.addEventListener('submit', onstudentha);