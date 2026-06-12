# Dhvtisu Project

## Overview
Dhvtisu is a web application designed to showcase digital products, services, and projects. It includes a contact form for users to submit their information, which is stored in a SQL database.

## Project Structure
```
Dhvitsu
├── assets
│   ├── css
│   │   └── style1.css
│   ├── images
│   └── js
├── contact.php
├── index.php
├── database
│   └── db.sql
└── README.md
```

## Files Description

- **index.php**: The main entry point of the application. It includes the header, navigation, and various sections of the website. It also contains a link to the contact form.

- **contact.php**: This file contains the HTML form for users to submit their contact information. It processes the form submission and saves the data to the SQL database.

- **database/db.sql**: This file contains the SQL commands to create the necessary database and table structure for storing user contact data. It defines the schema for the contact form submissions.

- **assets/css/style1.css**: This file contains the custom styles for the website, including styles for the contact form.

- **assets/images**: This directory contains images used throughout the website.

- **assets/js**: This directory contains JavaScript files for any interactive features on the website.

## Setup Instructions

1. **Database Setup**:
   - Create a new database in your SQL server.
   - Run the SQL commands in `database/db.sql` to create the necessary tables.

2. **Web Server**:
   - Ensure you have a web server (like Apache or Nginx) set up to serve the PHP files.

3. **Accessing the Application**:
   - Open your web browser and navigate to `index.php` to view the application.

## Usage Guidelines
- Users can navigate through the website to learn about the services offered.
- The contact form allows users to submit their information, which will be stored in the database for further processing.