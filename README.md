#### Description

- This is our "Client" version of the Semester Seed, where we have implemented succsessfuly these :
- Changed the "Semester Seed" header link to leads to "/". Where we can see a warm "Welcome" headline;
- We can Register with username and password, send that information to the REST back-end and create that user in the DataBase;
- We have decided to do it in that way, right after Registering (if everything went fine) to automatically Log-in the user and go to the "/" (welcome) page;
- Hiding the unnecessary menus for different roles;

- Notes: 
We have spent enormous amount of time fixing bugs with the ORM, and also a couple of reserved words in MySQL.
The Server is deployed on a Droplet, where this Client will connect (written in the package.json);
In order to see this Client in action, you need to clone this repo locally, install node-modules and start dev-server locally.
