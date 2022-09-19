import "./style.css";
export let chatPage = /*html*/ `
<div class='chat-screen' id='chat-screen'>
    <div class='header'>Rikkei Chat XXX</div>
    <div class='chat-container'>
    <div class='conversation-list'>
        <div class='add-conversation'>
        <button class='btn' id='create-conversation-btn'>+ New Conversation</button>
        </div>
        <div id='conversation-list-content' class='conversation-list-content'>
        </div>
    </div>
    <div class='chat-content'>
        <div class='conversation-name'>
        <h3>First conversation</h3>
        </div>
        <div id='message-container' class='message-container'>
        </div>
        <div class='message-form-container'>
        <form id='message-form'>
            <input
            id='message-input'
            class='message-input'
            type='text'
            placeholder='Type a message ...'
            name='message'
            />
            <input
            class='send-button'
            type='submit'
            value='Send'
            />
        </form>
        </div>
    </div>
    </div>
</div>
`;

// 1. Tạo thư mục project_name
// 2. "npm init" để tạo ra runtime nodejs
// 3. tạo thư mục src > index.js
// 4. tạo thư mục dist
// 5. tạo file webpack.config.js
// 6. cài đặt webpack thông qua "npm i webpack webpack-cli --save-dev"
// 7. cấu hình webpack theo document
// 8. tạo file index.html
// 9. kết nối file html với dist > main.js
// 10. thêm thuộc tính mode: "development", watch: "true" vào file webpack.config.js
// 11. thêm thuộc tính "build": "webpack" vào trong script của package.json
// 12. thêm các thư mục model, view, controller, pages, public vào trong src
// 13. tạo model>index.js, view>index.js, controller>index.js
// 14. trong pages> tạo các thư mục chat-page, login-page, register-page, reset-password-page
// 15. trong mỗi thư mục trên tạo các file index.js
// 16. trong mỗi file index của các page (login-page...) tạo biến loginPage...
// với giá trị là `` để lưu trữ template html
// 17. vào firebase.google.com tạo project
// 18. cài firebase bằng lệnh "npm install firebase"
// 19. config firebase, copy dòng config vào file index.js tổng

// NOTE: Vẫn sử dụng live-server để bật file index.html lên
// Luôn để watch: true để npm build luôn chạy và update file main.js trong thư mục dist
