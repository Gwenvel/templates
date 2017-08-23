# Install Notes

## Install the Following Software

- [git client](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download/)
- [.NET Core 2.0 SDK](https://www.microsoft.com/net/download/core)
- [VSCode](https://code.visualstudio.com/download)
 
## Windows Instructions

Run the following on the command line to create a *src* folder on your C drive.  

````

mkdir C:\src

````

Run the following on the command line to clone this repo to the C:\src folder.  

````

git clone https://github.com/hakkoda/templates.git C:\src\templates

````

Run the following commands on the command line to install the templates.  

````

dotnet new --install C:\src\templates\starter
dotnet new --install C:\src\templates\training

````

Test out the templates by running the following:  

````

mkdir C:\src\Hello
cd C:\src\Hello
dotnet new starter
dotnet run

````

## Linux/Mac Instructions

Run the following on the command line to create a *src* folder in your home
folder.  

````

mkdir ~/src

````

Run the following on the command line to clone this repo to the ~/src folder.  

````

git clone https://github.com/hakkoda/templates.git ~/src/templates

````

Run the following commands on the command line to install the templates.  

````

dotnet new --install ~/src/templates/starter
dotnet new --install ~/src/templates/training

````

Test out the templates by running the following:  

````

mkdir ~/src/Hello
cd ~/src/Hello
dotnet new starter
dotnet run

````

## Afer the Install

[overview of the templates](https://youtu.be/YEExi7SR9tA)
