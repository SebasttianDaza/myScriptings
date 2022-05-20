<!-- Please update value in the {}  -->

<h1 align="center">Scripting and Generators</h1>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [How To Use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](public/assets/image/project-min.png)

This is my generators with scripts Bash to automate the process of creating a new project with React, Vue, Node and more, with their differents config files and dependencies.

Architecture of the project:
  - [generators](./generators/) File with all the generators
    - [Yo sebas](./generators/index.js)Initialize the project
    - [ESLint](./generators/ESLint/)That's all file config for ESLint
    - [Git](./generators/Git/)File config for Git
      - [Local](./generators/Git/Local/) Generator config for Git Local
      - [Remote](./generators/Git/Remote/) Generator config for Git Remote
    - [JavaScript](./generators/JavaScript/) Generator config for JS Vanilla
    - [React](./generators/React/) Generator config for React
    - [Vue](./generators/Vue/)Generator config for Vue
  - [Script](./Script/) All files with scripts bash to automate my projects
  
Generators:
   yo sebas
    yo sebas:JavaScript
    yo sebas:React
    yo sebas:Vue

  [yo git](https://nicedoc.io/kikobeats/generator-git) You have to install the generator-git

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [Yeoman](https://yeoman.io/)
- [Bash]()
- [Shell.js](https://github.com/shelljs/shelljs)

## How To Use 

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name
# Install dependencies
$ npm install

```


## Contact

- Website [emprendeyourlifestyle.com](https://emprendeyourlifestyle.com/)
- GitHub [@SebasttianDaza](https://github.com/SebasttianDaza)
- Twitter [@SebasttianDaza](https://twitter.com/SebasttianDaza)