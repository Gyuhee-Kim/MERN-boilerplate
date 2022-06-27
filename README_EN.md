# goormIDE

Welcome to goormIDE!
goormIDE is a powerful cloud IDE service to maximize productivity for developers and teams.
**DEVELOP WITH EXCELLENCE**`Happy coding! The goormIDE team`

## MERN Bolierplate

- Tech
    - This project uses `React.js` `Express` `MongoDB` `Node.js`.
- Target
    - Someone who wants to develop the whole web after studying javascript language.
    - Someone who wants to know the charms of the front and back end.
    - Someone who wants to experience the MERN stack that is used a lot by startups.
    - Someone who has a specific topic for a web project.
- Description
    - As an example of use for better understanding, the front - back end api interlocked (sample).
        - A logic has been developed to store characters in the DB when they are entered by the client.
    - Complete your own project using a boilerplate!
- Folder Structure

```
.
|-- client
|   |-- node_modules
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   ┕-- src
|        |-- components
|        |-- containers
|        |-- index.css
|        `-- index.js
`-- server
    |-- config
    |-- node_modules
    |-- package-lock.json
    |-- package.json
    `-- src
        |-- controllers
        |-- index.js
        |-- middlewares
        |-- models
        |-- routes
        `-- services

```

## 🎨 Usage

1. Check URL and Port
    1. Click `PROJECT > Running URL and Port` on top menu bar.
    2. Register client and server domains with 3000 and 3001 ports.
2. Environment variables and config settings
    1. In the client path, Create `.env.development` file.
    2. Insert `REACT_APP_SERVER_URL = <server domain you set>` into the file.
    3. Create the file `config/default.js` in the server path.
    4. Set the file as follows:
    
    ```
    module.exports = {
        db: { //Create a mongodb atlas cluster and fill in the following information.
           userName: "",
           password: "",
           cluster: "",
        },
        port: 3001, //Set it to match the server port set in step 1.
        client: "" //Set the same as the client URL set in step 1.
    }
    
    ```
    
3. Check Dependencies.
    1. Check that `front/node_modules` is installed.
    2. If not, `npm install` into terminal.
4. Run Project
    - Execute command (top right of IDE)
        - 'run client': Run front-end
        - 'run server': Run back-end

## 🔧 Tip & Guide

- Command feature
    - You can simply run your script using the shortcut icons on the top right.
    - Check out `PROJECT > Common/Build/Run/Test/Find Command` in the top menu.
- Get URL and Port
    - Click `PROJECT > URL/PORT` in top menu bar.
    - You can get default URL/Port and add URL/Port in the top menu.
- Useful shortcut

## Support & Documentation

Visit [https://ide.goorm.io](https://ide.goorm.io/) to support and learn more about using goormIDE.
To watch some usage guides, visit [https://help.goorm.io/en/goormide](https://help.goorm.io/en/goormide)