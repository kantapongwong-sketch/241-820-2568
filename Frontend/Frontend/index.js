const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked');
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked');
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');

    try {
        let interest = '';
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value;
            if (i != interestDOMs.length - 1) {
                interest += ',';
            }
        }

        // สร้าง Object ข้อมูล
        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM ? genderDOM.value : '', // ป้องกัน Error กรณีไม่ได้เลือกเพศ
            description: descriptionDOM.value,
            interests: interest
        };

        // ย้าย console.log มาไว้ข้างใน try เพื่อให้เห็นค่า userData
        console.log('submitData', userData);

        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response.data);

        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success'; // แก้ตัวสะกด success

    } catch (error) {
        console.error('Error:', error); // แสดง error เต็มๆ ใน console เพื่อวิเคราะห์
        
        let errorMessage = 'การบันทึกข้อมูลผิดพลาด';
        if (error.response && error.response.data && error.response.data.message) {
            errorMessage += ': ' + error.response.data.message;
        }

        messageDOM.innerText = errorMessage;
        messageDOM.className = 'message danger';
    }
};