function duckDuckGoose(players:any, goose:any) {
    for (var i = 0; i < players.length; i++) {
      if (i === (goose-1) % players.length) {
        return players[i].name;
      }
    }
  }
  