const submitBtn = document.getElementById ('button');

const studentName = document.getElementById ('student-name');
const studentAge = document.getElementById ('student-age');
const studentGender = document.getElementById ('student-gender');
const studentCity = document.getElementById ('student-city');
const isStudent = document.getElementById ('is-student');

let genders = document.querySelectorAll('.gender');

function showInfo (e){
  e.preventDefault();
  const fName = document.getElementById('f-name').value
  const sName = document.getElementById('s-name').value
  const age = document.getElementById('age').value
  const city = document.getElementById('city').value
  const student = document.getElementById('student')

  let gender = ""
  for (let i=0; i<genders.length; i++){
    if (genders[i].checked){
      gender=genders[i].value
    }
  }

  studentName.innerText=`${fName} ${sName}`
  studentAge.innerText = age
  studentCity.innerText = city
  studentGender.innerText = gender

  if (student.checked){
    isStudent.innerText = "bale"
  } else {
    isStudent.innerText = "naxer"
  }
}

submitBtn.addEventListener ('click', showInfo);