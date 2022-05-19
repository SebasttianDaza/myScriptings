#!/bin/bash

echo "Welcome command to create your projects" | boxes -d boy -a c | lolcat

echo "🌐 Name the your project 😎:" | lolcat
read  nameProject
echo "🌐 Type of template 💻" | lolcat

options=0

while [ $options -ne 5 ] ;
do
	echo "1. Vanilla JS" | lolcat
	echo "2. React JS" | lolcat
	echo "3. Vue JS" | lolcat
	echo "4. Back" | lolcat
	echo "5. Exit" | lolcat
	read -p "Enter your option: " options

	case $options in
		1)
			npm create vite@latest $nameProject -- --template vanilla
			function configVanilla(){ 
				echo "Hola Vanilla"
				cd $nameProject
				touch README.md
			}
			configVanilla
			break
			;;
		2)
			npm create vite@latest $nameProject -- --template react
			function configReact( ){
				echo
				echo "We're starting this process, One moment" | lolcat
				echo

				cd $nameProject

				touch README.md

				mkdir Public && mkdir Public/Images && mv src/favicon.svg  ./Public/Images && mv src/logo.svg ./Public/Images

				mkdir src/Hooks && mkdir src/Services && mkdir src/Components

				mkdir src/Errors 

				npm i

				echo "Welcome Generator Sebas Yeoman!" | lolcat | boxes -d unicornthink

				yo sebas

				code .
			}
			configReact
			break
			;;
		3)
			npm create vite@latest $nameProject -- --template vue
			function configVue () {
				echo "Coming soon" | boxes -d peek -a c -s 40x11 | lolcat
			}
			configVue
			break
			;;
		4)
			function back () {
				echo "🔙 Back Coming soon" | boxes -d peek -a c -s 40x11 | lolcat
			}
			back
			break
			;;
		5)
			function exit () {
				echo "🚪 Exit" | boxes -d peek -a c -s 40x11 | lolcat
			}
			exit
			;;
		*)
			echo "Invalid option" | boxes -d | lolcat
			;;
	esac
done

echo "Finished, Bye" | lolcat
