const BASE_URL = 'http://localhost:8000';

let mode = 'CREATE';
let selectedId = '';

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('id', id);

    if (id) {
        mode = 'EDIT';
        selectedId = id;

        try {
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            const user = response.data;

            let firstNameDOM = document.querySelector('input[name=firstname]');
            let lastNameDOM = document.querySelector('input[name=lastname]');
            let ageDOM = document.querySelector('input[name=age]');
            let descriptionDOM = document.querySelector('textarea[name=description]');

            // แสดงข้อมูลเดิมใน Input
            firstNameDOM.value = user.firstname;
            lastNameDOM.value = user.lastname;
            ageDOM.value = user.age;
            if (descriptionDOM) descriptionDOM.value = user.description;

            // จัดการ Radio Button (เพศ)
            let genderDOMs = document.querySelectorAll('input[name="gender"]');
            genderDOMs.forEach((input) => {
                if (input.value === user.gender) {
                    input.checked = true;
                }
            });

            // จัดการ Checkbox (สิ่งที่สนใจ)
            let interestsArray = user.interests ? user.interests.split(',') : [];
            let interestDOMs = document.querySelectorAll('input[name="interests"]');
            interestDOMs.forEach((input) => {
                if (interestsArray.includes(input.value)) {
                    input.checked = true;
                }
            });

        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }
}

const validateData = (userData) => {
    let errors = [];
    if (!userData.firstName) errors.push('กรุณากรอกชื่อ');
    if (!userData.lastName) errors.push('กรุณากรอกนามสกุล');
    if (!userData.age) errors.push('กรุณากรอกอายุ');
    if (!userData.gender) errors.push('กรุณาเลือกเพศ');
    if (!userData.interests) errors.push('กรุณาเลือกงานอดิเรก');
    if (!userData.description) errors.push('กรุณากรอกคำอธิบาย');
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked') || {};
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');
    let messageDOM = document.getElementById('message');

    try {
        // รวมค่าจาก Checkbox เป็น String คั่นด้วยเครื่องหมายคอมมา
        let interest = Array.from(interestDOMs).map(i => i.value).join(',');

        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }

        const errors = validateData(userData);
        if (errors.length > 0) {
            throw {
                message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
                errors: errors
            };
        }

        let response;
        let successMessage = '';

        if (mode === 'CREATE') {
            response = await axios.post(`${BASE_URL}/users`, userData);
            successMessage = 'บันทึกข้อมูลสำเร็จ';
        } else {
            response = await axios.put(`${BASE_URL}/users/${selectedId}`, userData);
            successMessage = 'แก้ไขข้อมูลสำเร็จ';
        }

        console.log('response', response.data);
        messageDOM.innerText = successMessage;
        messageDOM.className = 'message success';

    } catch (error) {
        let htmlData = '<div>';
        htmlData += `<div>${error.message || 'เกิดข้อผิดพลาด'}</div>`;
        if (error.errors) {
            htmlData += '<ul>';
            error.errors.forEach(err => {
                htmlData += `<li>${err}</li>`;
            });
            htmlData += '</ul>';
        }
        htmlData += '</div>';

        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';
    }
}