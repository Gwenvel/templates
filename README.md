# Install Notes

## Required Software

- [git client](https://git-scm.com/downloads)
- [.NET Core 2.0 SDK](https://www.microsoft.com/net/download/core)
- [VSCode](https://code.visualstudio.com/download)
 
Run the following on the command line to create a *src* folder on your C drive.  

````

mkdir C:\src

````

Run the following on the command line to clone this repo to the C:\src folder.  

````

git clone https://github.com/hakkoda/templates.git C:\src

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
