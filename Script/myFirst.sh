#!/bin/bash
echo "Escribe un numero:"
read num1
echo "Escribe otro numero"
read num2

#Forma 1
echo "Forma 1 -> $num1 + $num2 = $(($num1 + $num2))"

#Forma 2
$sum = $(($num1 + $num2))
echo "Forma 2 ->  $num1 + $num2 = $sum"
