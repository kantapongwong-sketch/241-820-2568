const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
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
app.post('/user', (req, res) => {

    res.send(req.body);
})

app.post('/user', (req, res) => {
    let user = req.body;
    users.push(user);
    res.json({
        message: '',
        user: user
    })

    app.put('/user/:id', (req, res) => {
        let id = raq.params.id
        let selectdIndex = users.findIdex(user => {
            if
    })
        app.put('/user/:id', (req, res) => {
            let id = raq.params.id
            let updatedUser = req.body;



        })

        //path = put
        app.put('/user/:id', (req, res) => {
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

    let user = []
    let counter = 1;
    /**
     * GET/user
     * 
     * 
     * 
     */

    //path = GET / 
    app.get('/user', (req, res) => {
        const filterUesr = user.map(user => {
            firstname: user.firstname,
                lastname: user.lastname,
                    fullname:
        })

    })
    //path GET/User/:id
    app.get('/user' / ':id', (req) =>)
    let id
    // PUT /users/:id สำหรับแก้ไขข้อมูล user ที่มี id ตรงกับที่ส่งมา
    app.put('/users/:id', (req, res) => {
        let id = req.params.id
        let updatedUser = req.body;

        // หา users จาก id
        let selectedIndex = users.findIndex(user => user.id == id)

        // update users นั้น
        users[selectedIndex].firstname = updatedUser.firstname
        users[selectedIndex].lastname = updatedUser.lastname
        users[selectedIndex].age = updatedUser.age
        users[selectedIndex].gender = updatedUser.gender

        // ส่ง response กลับไปว่า update users ที่เลือกสำเร็จแล้ว
        res.json({
            message: 'User updated successfully',
            data: {
                user: updatedUser,
                indexUpdated: selectedIndex
            }
        })
        let users = []
        let counter = 1;

        app.get('/testdb', (req, res) => {
            mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '1234',
                database: 'webdb'
            }).then(connection => {
                return connection.query('SELECT * FROM users')
            }).then(([rows, fields]) => {
                res.json(rows);
            }).catch(err => {
                console.error(err);
                res.status(500).json({ error: 'Database error' });
            });
        });
    })
    app.get('/testdb-new', (req, res) => {
        const connection = mysql.createConnection({

        })
        const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;
let conn = null;
    })
    const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users = [];
let counter = 1;
let conn = null;

// ฟังก์ชันสำหรับเริ่มต้นเชื่อมต่อฐานข้อมูล
const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8820
    });
}

// path = POST /users สำหรับเพิ่ม user ใหม่
app.post('/users', async (req, res) => {
    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', user);
        res.json({
            message: 'User created successfully',
            data: results[0]
        })
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
    // PUT /users/:id สำหรับแก้ไขข้อมูล user ที่มี id ตรงกับที่ส่งมา
app.put('/users/:id', async (req, res) => {
    try {
        let id = req.params.id;
        let updatedUser = req.body;
        
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updatedUser, id]);
        
        if (results[0].affectedRows == 0) {
            throw { statusCode: 404, message: 'User not found' };
        }
        
        res.json({
            message: 'User updated successfully',
            data: updatedUser
        });
    } catch (error) {
        console.error('Error updating user:', error.message);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: 'Error updating user',
            error: error.message
        });
    }
});
});
})
