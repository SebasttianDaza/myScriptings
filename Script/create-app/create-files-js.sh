#!/bin/bash
echo "🌐 Name the your project 😎:"
read  nameProject
echo "🌐 Type of template 💻"

options=0

while [ $options -ne 5 ] ;
do
	echo "1. Vanilla JS"
	echo "2. React JS"
	echo "3. Vue JS"
	echo "4. Back"
	echo "5. Exit"
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
				echo "We're starting this process, One moment"
				
				cd $nameProject

				touch README.md

				mkdir Public && mkdir Public/Images && mv src/favicon.svg  ./Public/Images && mv src/logo.svg ./Public/Images

				mkdir src/Hooks && mkdir src/Services && mkdir src/Components

				mkdir src/Errors 

				npm i

				yo sebas

				code .
			}
			configReact
			break
			;;
		3)
			npm create vite@latest $nameProject -- --template vue
			function configVue () {
				echo "Coming soon"
			}
			configVue
			break
			;;
		4)
			function back () {
				echo "🔙 Back Coming soon"
			}
			back
			break
			;;
		5)
			exit
			;;
		*)
			echo "Invalid option"
			;;
	esac
done

echo "Finished, Bye"
