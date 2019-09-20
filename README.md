# Tic Tac Toe

Tic Tac Toe basic API

## TODO

- [ ] Configuration
- [x] Serverless
- [x] List all games
- [x] New game
- [ ] Show game
- [ ] New move
- [x] Linter
- [x] Deploy AWS
- [ ] Test
- [ ] AI

## Architecture decisions

* AWS Lambda
* UUID. [See](https://medium.com/@Mareks_082/auto-increment-keys-vs-uuid-a74d81f7476a)
* Airbnb Linter. [See](https://github.com/airbnb/javascript)

## Setup

To install this project just execute:

```bash
npm install
```

## API

Base URL: `localhost`

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
