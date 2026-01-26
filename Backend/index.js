const http = require('http');
const host = 'localhost';
const port = 8000;

// กำหนดค่าเริ่มต้น
// เปลี่ยนชื่อตัวแปรจาก requireListener เป็น requestListener เพื่อความถูกต้อง
const requestListener = function(req, res) {
    res.writeHead(200);
    res.end('My First Server!'); // แก้คำผิด Sever -> Server
}

// run server
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    // ใช้ Backtick (`) แทน Single Quote (')
    console.log(`Server is running on http://${host}:${port}`); 
});