![thumbnail](https://github.com/user-attachments/assets/feed4f60-91d5-47c4-87c1-4d268522e9c4)


# **Uscor Marketplace**

Uscor Marketplace is a specialized platform dedicated to artisans and businesses in the furniture and tool-making industry. This marketplace allows local craftsmen to showcase their products, reach new customers, and grow their businesses. Built using modern web technologies, Uscor Marketplace provides a seamless, intuitive, and secure environment for both sellers and buyers.

## **Table of Contents**
- [About](#about)
- [Tech Stack](#tech-stack)
- [Key Features](#key-features)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Development Notes](#development-notes)
- [Challenges and Solutions](#challenges-and-solutions)
- [Future Enhancements](#future-enhancements)
- [License](#license)

## **About**
Uscor Marketplace was developed to support local artisans, specifically inspired by my father, a carpenter who has dedicated his life to creating high-quality furniture. This platform is a tribute to his hard work and aims to give artisans like him a space to grow their businesses and connect with new customers.

**Mission**: To empower artisans and local businesses by providing a marketplace tailored to furniture and tools, emphasizing quality, craftsmanship, and community support.

---

## **Tech Stack**
This project utilizes a modern tech stack to ensure optimal performance, scalability, and ease of use for both developers and users. Key technologies include:

- **Next.js** – For server-side rendering and static site generation.
- **Payload CMS** – A powerful headless CMS that manages product data and content.
- **MongoDB** – Used as the database for storing product listings, orders, and user data.
- **Stripe** – Integrated for secure and efficient payment processing.
- **tRPC** – For type-safe, error-free API calls between the client and server.
- **TailwindCSS** – For responsive and customizable UI components.
- **Express** – Used to build the back-end API and handle server logic.
- **Railway** – Platform used for deploying and hosting the application.

---

## **Key Features**
- **Product Listings**: Artisans can list furniture and tools with detailed descriptions, images, and pricing.
- **Secure Payments**: Integrated with Stripe for smooth and secure transactions.
- **Admin Dashboard**: Easy-to-use CMS for managing products, categories, and orders.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **User Authentication**: Secure login and registration for both buyers and sellers.
- **Real-time Updates**: Seamless updates to product availability and stock levels.
- **Customizable Filters**: Buyers can easily filter products by category, price, and more.

---

## **Setup Instructions**

To run this project locally, follow these steps:

### **Prerequisites**
- Node.js (v16 or above)
- MongoDB (local or cloud-based via MongoDB Atlas)
- Stripe account for payment integration

### **Installation**

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/uscor-marketplace.git
   cd uscor-marketplace
   ```

2. **Install Dependencies**:
   ```bash
   yarn install
   ```

3. **Create a `.env` file** in the root directory with the following environment variables:
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   PAYLOAD_SECRET=your_payload_secret_key
   ```

4. **Start the Development Server**:
   ```bash
   yarn dev
   ```

5. **Open** `http://localhost:3000` in your browser to see the marketplace in action.

---

## **Usage**

- Sellers can register, create their profile, and list products for sale.
- Buyers can browse, filter, and purchase products securely via Stripe.
- Admin users can manage the CMS, edit product details, and handle orders.

---

## **Development Notes**

This project was built with the following development practices in mind:
- **TypeScript**: Ensured type safety across the project.
- **tRPC**: Simplified client-server communication with built-in error handling and validation.
- **PayloadCMS**: Custom-built admin dashboard to manage products and users.
- **Railway**: Used for easy deployment and continuous integration.

---

## **Challenges and Solutions**

### **Challenges:**
- **First-time MongoDB Integration**: Learning how to effectively use MongoDB and ensure data consistency across the platform.
- **Deployment with Railway**: Overcoming various deployment issues and ensuring smooth hosting.
- **tRPC Setup**: Integrating tRPC for seamless API calls while maintaining type safety.

### **Solutions:**
- Extensive research and usage of official documentation for MongoDB and PayloadCMS integration.
- Leveraged Railway’s deployment guides and support to get the platform up and running.
- Created custom hooks and middleware to manage tRPC requests and error handling.

---

## **Future Enhancements**
- **Multi-language Support**: Adding French and other languages to broaden the user base.
- **Enhanced Search Features**: Implementing advanced search and filtering capabilities.
- **Social Media Integration**: Allowing users to share product listings directly to social media platforms.
- **Subscription Plans for Sellers**: Offering premium features for artisans who want more visibility on the platform.
- **Detailed Analytics**: Providing sellers with insights on their sales, popular products, and customer behavior.

---

## **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

**Thank you for exploring Uscor Marketplace!**  
<<<<<<< HEAD
I hope this project helps artisans like my father and provides a valuable space for craftsmanship to thrive. If you have any feedback or contributions, feel free to submit a pull request or contact me.
=======
I hope this project helps artisans like my father and provides a valuable space for craftsmanship to thrive. If you have any feedback or contributions, feel free to submit a pull request or contact me.
>>>>>>> befe4f2815c004f77234f6eed9595d9e7aa4d0f8
