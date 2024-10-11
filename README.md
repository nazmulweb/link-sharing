It is a full-stack application build with laravel and react.js. thechnology used to build the application below.

1. Laravel
2. React.js
3. MySql
4. Tailwind css
5. Docker

Follow the below instruction to run the project locally. you can run the project two way using docker or using XAMPP. follow the blow guide.

# Project Setup Documentation

## Prerequisites
* Ensure you have XAMPP installed on your system.
* Make sure Composer is installed globally.
Steps to Run the Project

## 1. Install Composer Dependencies
Open your terminal and navigate to your project directory. Run the following command to install all the necessary dependencies:

    composer install

## 2. Create Environment File
Copy the example environment file and create a new .env file. You can do this by executing:

    cp .env.example .env

## 3. Update Database Variables

Open the newly created .env file in your preferred text editor. Update the following database variables to match your XAMPP configuration:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password

## 4. Generate Application Key
 
 Run the following command to generate a new application key:

    php artisan key:generate

## 5. Run Migrations
Run the following command to apply all database migrations:

    php artisan migrate

## 6. Seed the Database

If you have seeders set up, you can populate your database with initial data using the following command:

    php artisan db:seed

## 7. Start the Development Server

Finally, run the built-in PHP development server to launch your project:

    php artisan serve

Your application should now be running at http://localhost:8000 (or the specified port).

# Project Setup Documentation with Laravel Sail


## Prerequisites

* Ensure you have Docker installed on your system.
* Install Laravel Sail by running the following command in your terminal:

# Steps to Run the Project

## 1. Install Composer Dependencies

    docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs

## 2. Copy .env File

Copy the .env.example file to .env:

    cp .env.example .env

## 3. Update Database Variables

Open the newly created .env file in your preferred text editor. Update the following database variables to match your XAMPP configuration:

    DB_CONNECTION=mysql
    DB_HOST=mysql
    DB_PORT=3306
    DB_DATABASE=your_database_name
    DB_USERNAME=your_username
    DB_PASSWORD=your_password

## 2. Start Laravel Sail
Start your Laravel Sail environment with the following command:

    ./vendor/bin/sail up

## 3. Run Migrations
Execute the migrations to set up your database tables:

    ./vendor/bin/sail artisan migrate

## 4. Install NPM Dependencies
Install the required NPM dependencies for your project:

    ./vendor/bin/sail npm install

## 5. Run Development Build
Compile your assets for development using the following command:

    ./vendor/bin/sail npm run dev

## 6. Generate Application Key
Generate a new application key for your Laravel application:

    ./vendor/bin/sail artisan key:generate

