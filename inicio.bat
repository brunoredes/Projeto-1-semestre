@echo off
cls
:menu
cls

date /t

echo Computador: %computername%        		Usuario: %username%
echo Bem vindo, %username%.




echo            MENU TAREFAS
echo  ==================================
echo * 1. Instalar NPM                 * 
echo * 2. NPM START                    *
echo * 3. Sair                         * 
echo  ==================================

set /p opcao= Escolha uma opcao: 

echo ------------------------------
if %opcao% equ 1 goto opcao1
if %opcao% equ 2 goto opcao2
if %opcao% equ 3 goto opcao3
if %opcao% GEQ 4 goto opcao4

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
npm run dev
echo ==================================
echo *         NPM iniciado           *
echo ==================================
pause




:opcao3
cls
exit

:opcao4
echo ==============================================
echo * Opcao Invalida! Escolha outra opcao do menu *
echo ==============================================
pause
goto menu