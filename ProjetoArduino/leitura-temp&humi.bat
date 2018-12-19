@echo off
cls
:menu
cls
date /t

echo Computador: %computername%                     Usuario: %username%
echo Bem vindo, %username%!



echo            MENU TAREFAS
echo  ==================================
echo * 1. Instalar NPM                 * 
echo * 2. Instalar TEDIOUS             *
echo * 3. Instalar Serial-Port         *
echo * 4. Instalar EVENTS              *
echo * 5. Iniciar leitura              *
echo * 6. Sair                         *
echo  ==================================

set /p opcao= Escolha uma opcao: 

echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% equ 4 goto opcao4
if %opcao% equ 5 goto opcao5
if %opcao% equ 6 goto opcao6
if %opcao% GEQ 7 goto opcao7

:opcao1
cls
npm install
echo ==================================
echo *        NPM Instalado           *
echo ==================================
pause
goto menu


:opcao2
cls
npm i tedious
echo ==================================
echo *       TEDIOUS instalado        *
echo ==================================
pause

:opcao3
cls
npm i serialport
echo ==================================
echo *      SerialPort Instalado      *
echo ==================================
pause

:opcao4
cls
npm i events
echo ==================================
echo *        EVENTS Instalado        *
echo ==================================
pause

:opcao5
cls
node insert-banco.js
echo ==================================
echo *  Iniciada a leitura de dados   *
echo ==================================
pause

:opcao6
cls
exit

:opcao7
echo ===============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ===============================================
pause
goto menu