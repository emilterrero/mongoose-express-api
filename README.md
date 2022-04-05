## Snowboard Shop API
 A JSON API following the CRUD standard, (Create Read Update Delete). Technologies used for this API were Node, MongoDB, Mongoose and Express. This API is created as a way for a snowboard shop to keep track of stock. You'll be able to search up snowboards by size, brand, model and ID. 

## Instructions

1. Clone down this repo
2. Install dependencies
4. Run Server


## Clone Repository

```
git clone https://github.com/emilterrero/mongoose-express-api.git 
```

## Install Dependencies 
```
npm install express mongoose
```

## Run Server 
``` 
node server.js
```

## Routes 
|Method | Endpoints     | Description                      |
|-------|---------------|----------------------------------|
|GET    |/              |API Root                          |
|GET    |/snowboards    |Find All or by size, brand, model |
|GET    |/snowboards:id |Retrieves a board by ID           |
|POST   |/snowboards    |Creates a new snowboard           |
|PUT    |/snowboards:id |Updates current board search by ID|
|DELETE |/snowboards:id |Deletes current board search by ID|

## POST 
When creating a new board, sizes only takes arrays so they must be entered this way  
```
http POST :9000/snowboards sizes:='[156, 135]' 

## NOW HAVE FUN ! 
