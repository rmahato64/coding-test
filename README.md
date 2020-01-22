
## Backend

Available commands from backend folder

### `virtualenv -p /usr/bin/python3 venv`

Create a virtual environment.

### `source venv/bin/activate`

Activate virtual environment.


### `pip3 install -r requirements.txt`

Install the requirements for the app.


### `./manage.py migrate --run-syncdb`

Create a database with required tables.

### `./manage.py runserver`

Run the server. Open [http://localhost:8000](http://localhost:8000) to view it in the browser.


## Frontend

Available commands from frontend folder

### `npm install`

Install the required dependencies.


### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
cd