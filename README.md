# Install Notes

You will need to have the git client installed on your computer to run the
following steps.  
 
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
