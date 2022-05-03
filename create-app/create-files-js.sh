#!/bin/bash
echo "Name the your project 😎 :"
read  nameProject
echo "Type of template 💻"
read template
echo "You want this project with eslint 🎁 "
read eslint

npm create vite@latest $nameProject -- --template $template 

function configVanilla(){ 
	echo "Hola Vanilla"
	cd $nameProject
	touch README.md
}

function configReact(){
	echo "We're starting this process, One moment"
	cd $nameProject
	touch README.md
	mkdir Public && mkdir Public/Images && mv src/favicon.svg  ./Public/Images && mv src/logo.svg ./Public/Images
	mkdir src/Hooks && mkdir src/Services && mkdir src/Components
	mkdir src/Errors 

	npm i

	if [[ $eslint == "yes" ]]
	then 
		cat /home/sebasttiandaza/myScripting/eslint/React/.eslintrc.js > .eslintrc.js
		npm i eslint --save-dev
		npm i --save-dev eslint-config-prettier
		npm i eslint-plugin-react-hooks
	fi

	code .
}

if [[ $template == "react" ]]
then
	configReact
fi

if [[ $template == "vanilla" ]]
then
	configVanilla
fi

echo "Finished, Bye"
