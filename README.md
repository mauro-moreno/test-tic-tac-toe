# Tic Tac Toe

Tic Tac Toe basic API

## TODO

- [ ] Configuration
- [ ] List all games
- [ ] New game
- [ ] Show game
- [ ] New move
- [x] Linter
- [ ] Deploy AWS
- [ ] Test
- [ ] AI

## Architecture decisions

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

### New game

* Url: `/games`
* Method: `POST`

### Show game

* Url: `/games/{gameUuid}`
* Method: `GET`

### New Move

* Url: `/games/{gameUuid}/moves`
* Method: `POST`
