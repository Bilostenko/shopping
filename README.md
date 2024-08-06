# Marketplace Project

This project is a marketplace application built with React and TypeScript. It provides a user-friendly interface for managing product listings. Below is a detailed description of its features and functionalities.

## Features

- **Modal for Product Entry**: Upon loading the page, a modal window prompts the user to enter a product name.
  - **Validation**: If the user attempts to click "Create" without entering a name, an error message "You need to enter data" appears in the modal.
  - **Product Creation**: If a product name is entered, the modal disappears, and the page renders with product cards, including the newly added product.
  - **Dismiss Modal**: Users can also dismiss the modal by clicking outside of it.

- **Product Cards**: The main page displays a list of product cards.
  - **Add New Product**: A "+" button is available on the page, allowing users to open the modal again to add a new product.
  - **Hide Details**: Each product card has a "Hide details" button that, when clicked, reveals additional information about the product.

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/marketplace-project.git
2. Navigate to the project directory:
   ```bash
   cd marketplace-project

3. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash
   npm start

Usage
Once the development server is running, open your browser and navigate to http://localhost:3000 to view the application.
![](https://github.com/Bilostenko/shopping/blob/master/localhost_3002_.png)
