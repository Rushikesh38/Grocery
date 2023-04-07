MERN Project - Grocery Shopping Website with ML Recommendation System

This project is a web application that allows users to buy groceries online. It includes features such as CRUD operations for products, a login system, and a machine learning recommendation system to suggest products to the users based on their previous purchases.

Installation
1) To run the project, please follow the instructions below:
  git clone https://github.com/<username>/<repository-name>.git
  
2)Install the required packages:
  cd <repository-name>
  npm install

3)Start the development server:
  npm start
  
Usage

To use the application, open your web browser and go to http://localhost:3000. You will be directed to the home page They navigate to see products.You can also register as a new user or log in if you already have an account. Once you are logged in, you can add products to your cart.

  

Features
The main features of this project are:

1) CRUD operations for products
2) Login and registration system
3) Machine learning recommendation system

CRUD Operations for Products
As an admin user, you can add, edit,products from the product list. The CRUD operations are available in the admin section.For Admins

Login and Registration System
Users can register for an account and log in to access the shopping features. The login system is implemented using JSON Web Tokens (JWT) to ensure secure authentication.

Machine Learning Recommendation System using Apriori Algorithm
The machine learning recommendation system uses the Apriori algorithm to generate association rules based on the user's shopping history. The system analyzes the item present in the cart and generates association rules based on those itemsets. The system then recommends products to the user based on the association rules.


