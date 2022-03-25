
# E-commerce-Back-End

Building an e-commerce back end data 

# Description - Why did build an employee management?
The main purpose to build this is to provide services to bussinesses to all platforms such as spotify. Also another goal of this project was to figure out how these platforms were built from scratch.

This E-Commerce backend provides API routes for each data group that point to each of the common CRUD activities. The routes can be used for a variety of purposes, including:

- Create categories, products, tags
- View categories, products, tags
- Create connections between the various components.
- Update categories, products, & tags
- Delete entries from the database

All that's needed to turn this into a fully functional E-Commerce site is a simple front-end application that invokes the built-in API routes.

This project has enhanced my skills in Node. Additional knowledge gained includes: Node - Mysql2, Sequelize, dotenv, express, on top of previous acquired javascript skills.

# What does this project do? and how?

The following installation was required node, Mysql2, express, sequelize and dotenv. Both node.js and MySQL need to be installed on your computer.

Clone the repo by copying and pasting in your command line: git@github.com:samira0101/team-profile-genarator.git

You need to run npm install in the root directory to download these dependencies, SQL interface is also required. To do this you will need to change directory into the db folder (cd db) in terminal then follow with mysql -u root. 

To be able to view the database in the terminal you will need to be in the main directory and type node server.js. 

Video link below to demostrating the functionality of the terminal.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize

WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data

WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database

WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

# So far what has been achieved and further improvements?

All requirements above has been achieved.

# To access Github Repository 

1. https://github.com/samira0101/E-Commerce-Back-End.git

# To access video 

## Presentation [Video](https://drive.google.com/file/d/1G8O0WdXljXeQwOlfS5spRgW1LDCkEjaG/view)


# References

1. https://birmingham.bootcampcontent.com/university-of-birmingham/UBHM-VIRT-FSF-PT-11-2021-U-LOL
2. https://www.npmjs.com/package/mysql2
3. https://www.npmjs.com/package/sequelize
4. https://www.npmjs.com/package/dotenv
5. https://sequelize.org/v6/manual/legacy.html
6. https://sequelize.org/master/manual/assocs.html
7. https://www.npmjs.com/package/sequelize-mv-support/v/4.0.2
8. https://sequelize.org/master/manual/model-basics.html
9. https://expressjs.com/en/5x/api.html
10. https://www.tabnine.com/code/javascript/functions/express/Response/json
11. https://www.w3schools.com/js/js_api_fetch.asp
12. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of
13. https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide