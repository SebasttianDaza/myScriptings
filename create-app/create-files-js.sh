#!/bin/bash
echo "Name the your project:"
read  nameProject
echo "Type of template"
read template

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
	mkdir src/Errors && 
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
