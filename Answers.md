## Self-Study/Essay Questions

Demonstrate your understanding of this Sprint's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. Explain what a token is used for.

     **Answer:**
     > API servers use use tokens as a form of user authentication. The server generates and issues a cryptographically signed secret token to the client. The secret token allows the server to 'remember' the client's identity so it can grant access to the server in the future.

2. What steps can you take in your web apps to keep your data secure?

     **Answer:**
     > 1. Use JSON Web Tokens to authenticate user login.
     > 2. Use protected routes one the user is authenticated.
     > 3. Send an authentication header with API calls.

3. Describe how web servers work.

     **Answer:**
     > Physical web servers are high powered internet-connected computers that host the code for websites and make them available to the world wide web. These specialized computers run web server software programs such as Apache and Nginx.

4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

     **Answer:**
     > 1. GET - Read
     > 2. PUT - Update
     > 3. POST - Create
     > 4. DELETE - Delete
