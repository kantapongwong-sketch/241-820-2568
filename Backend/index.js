const express = require('express')
const app = express();
const port = 8000;

// แก้ไขจาก app.gat เป็น app.get
app.get('/test', (req, res) => {
    //res.send('Hello World'); // แก้คำผิด Word -> World (ถ้าต้องการ)
    let user = {
        name: 'john Doe',
        age: 30,
        email: 'john.doe@example.com'
    };
    res.json(user);
})
//path = POST /user
app.post('/user',(req,res)=>{

    res.send(req.body);
})

app.post('/user',(req,res)=>{
    let user = req.body;
    users.push(user);
    res.json({
        message:'',
        user:user
    })

app.put('/user/:id',(req,res)=>{
    let id = raq.params.id
    let selectdIndex = users.findIdex(user =>{
        if
    })
    app.put('/user/:id',(req,res)=>{
        let id = raq.params.id
    let updatedUser = req.body;

    

})

//path = put
app.put('/user/:id',(req,res)=>{
    let id = req.params.id
    res.send(id)
})
})



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

let
    user []
    })
    // path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
    let id = req.params.id
    let updatedUser = req.body;
    
    // หา users จาก id
    let selectedIndex = users.findIndex(user => user.id == id)
    
    // update users นั้น
    if (updatedUser.name) {
        users[selectedIndex].name = updatedUser.name
    }
    
    if (updatedUser.age) {
        users[selectedIndex].age = updatedUser.age
    }

    // ส่ง response กลับไปว่า update users ที่เลือกสำเร็จแล้ว
    res.json({
        message: 'User updated successfully',
        data: {
            user: updatedUser,
            indexUpdated: selectedIndex
        }
    })
})
//path = DELETE /users/:id
app.delete('/users/:id', (req, res) => {
    let id = req.params.id
    let selectedIndex = users.findIndex(user => user.id == id)
    if (selectedIndex !== -1) {
        users.splice(selectedIndex, 1)
        res.json({
            message: 'User deleted successfully',
            data: {
                indexDeleted: selectedIndex
            }
        })
    } else {
        res.status(404).json({
            message: 'User not found'
        })
    }
})