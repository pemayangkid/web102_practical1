# Introduction

This project involved designing and building a RESTful API for a social media platform. The main goal was to understand how APIs are structured and how they manage different types of data.
The process began with planning endpoints for various resources, followed by implementing them using Node.js and Express. Even though no database was included, mock data allowed the API to behave like a real system. Overall, the project provided a clear understanding of how backend applications function.

# Main Concepts Applied

-> RESTful API Design
Endpoints were created for resources such as users, posts, comments, likes, and followers. Each resource followed standard REST patterns using methods like GET, POST, PUT, and DELETE.

-> Express Server Setup
A server was built using Express, along with middleware like morgan, cors, and helmet to handle logging, security, and requests.

-> Controllers and Routes
The project was divided into controllers and routes. Controllers handled the logic, while routes defined the endpoints. This separation made the code easier to manage.

-> Middleware Implementation
Custom middleware was used for handling errors, managing async functions, and formatting responses. This helped keep the code clean and reusable.

-> Content Negotiation
A middleware was added to control how responses are formatted, depending on the request type.

-> Mock Data Usage
Mock data was used to simulate a database, allowing all endpoints to function without needing real storage.

# What I Learned

Through this project, I developed a better understanding of how APIs work. I learned how to design endpoints properly and use the correct HTTP methods for each operation.
I also understood the importance of organizing code into controllers and routes. Working with middleware showed me how to handle errors and improve code efficiency.
Overall, the project helped me see how data flows between the client and server in a real application.

# Challenges Faced and How I Overcame Them

Designing Consistent Endpoints
It was initially difficult to design endpoints for multiple resources while keeping everything consistent.
I solved this by following the same structure for all resources, which made the API easier to understand and use.

Understanding Middleware Flow
Understanding how middleware works in Express was confusing at first.
I overcame this by testing each middleware step by step and observing how it affected requests and responses.

Managing Multiple Files
Handling many files for controllers, routes, and middleware became overwhelming.
I fixed this by organizing the project clearly and keeping related files grouped together.

# Conclusion

This project was a valuable introduction to backend development using Node.js and Express. It helped me understand how APIs are designed, structured, and implemented.

The use of middleware, routing, and controllers made the application more organized and efficient. Even without a database, the project successfully demonstrated how a real API works.

It also provides a strong foundation for future improvements, such as adding a database and building a complete full-stack application.