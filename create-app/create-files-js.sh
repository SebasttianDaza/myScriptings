#!/bin/bash
echo "Name the your project:"
read  nameProject

npm create vite@latest $nameProject --template vanilla  

echo "Finish, Bye" 
