function submitData() {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');

    let genderDOM = document.querySelector('input[name=gender]:checked');
    let hobbiesDOM = document.querySelectorAll('input[name=hobby]:checked');

    let interesDom = document.querySelector('textarea[name=description]');

    let interests = ''
    for (let i = 0; i < hobbiesDOM.length; i++) {
        interests += hobbiesDOM[i].value + ', ';
        if (i != hobbiesDOM.length - 1) {
            interests += ' ';
        }
    
    }


    let userData = {
        firstName: firstNameDOM.value,
        lastName: lastNameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: description.value,
        hobbies: []
    };
    console.log('submit data:', userData);
 }