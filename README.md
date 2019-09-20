# Tic Tac Toe

Tic Tac Toe basic API

## TODO

- [X] Configuration
- [x] Serverless
- [x] List all games
- [x] New game
- [X] Show game
- [X] New move
- [x] Linter
- [x] Deploy AWS
- [ ] Test
- [ ] AI
- [ ] Better documentation
- [ ] Code comments

## Architecture decisions

* AWS Lambda. Handlers by function
* Serverless framework [See](https://serverles.com)
* UUID. [See](https://medium.com/@Mareks_082/auto-increment-keys-vs-uuid-a74d81f7476a)
* Airbnb Linter. [See](https://github.com/airbnb/javascript)
* AI should be here or in implementation?

## Setup

To install this project just execute:

```bash
npm install
serverless dynamodb install
```

## API

Base URL: `http://localhost:3000`

### Games list

* Url: `/games`
* Method: `GET`
* Response:
  ```
  {
    statusCode: 200,
    data: [
      {
        "id": "86a6fac1-b863-49e6-a552-dcce05737029"
      },
      {
        "id": "86a6fac1-b863-49e6-a552-dcce05737030"
      }
    ]
  }
  ```

### Games create

* Url: `/games`
* Method: `POST`
* Response:
  ```
  {
    "statusCode": 201,
    "data": {
      "id": "86a6fac1-b863-49e6-a552-dcce05737029",
      "grid": [
        [
          "-",
          "-",
          "-"
        ],
        [
          "-",
          "-",
          "-"
        ],
        [
          "-",
          "-",
          "-"
        ]
      ],
      "lastPlayer": "O",
      "gameOver": false
    }
  }
  ```

### Games show

* Url: `/games/{gameUuid}`
* Method: `GET`
* Response:
  ```
  {
    "statusCode": 200,
    "data": {
      "id": "86a6fac1-b863-49e6-a552-dcce05737029",
      "grid": [
        [
          "-",
          "-",
          "-"
        ],
        [
          "-",
          "-",
          "-"
        ],
        [
          "-",
          "-",
          "-"
        ]
      ],
      "lastPlayer": "O",
      "gameOver": false
    }
  }
  ```

### Move

* Url: `/games/{gameUuid}/moves`
* Method: `POST`
* Content-Type: `application/json`
* Body:
  ```
  {
    "playerSymbol": "X" // or O
    "coordinates": {
      "x": 0, // 0, 1, 2
      "y": 0  // 0, 1, 2
    }
  }
  ```
* Response:
  ```
  {
    "statusCode": 200,
    "data": {
      "id": "86a6fac1-b863-49e6-a552-dcce05737029",
      "grid": [
        [
          "X",
          "-",
          "-"
        ],
        [
          "-",
          "-",
          "-"
        ],
        [
          "-",
          "-",
          "-"
        ]
      ],
      "lastPlayer": "O",
      "winner": "draw",
      "gameOver": false
    }
  }
  ```

  
