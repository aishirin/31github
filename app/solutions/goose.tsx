  const duckGoose:any=()=>{
    function duckDuckGoose(players:string[], goose: number) {
        for (var i = 0; i < players.length; i++) {
          if (i === (goose-1) % players.length) {
            return players[i];
          }
        }
      }
        return duckDuckGoose
  }