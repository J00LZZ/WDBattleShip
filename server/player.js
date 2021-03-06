function Player(socket){
    this.socket = socket;
    this.inviteKey = null;
    this.gameKey = null;
    this.ready = false;

    /**
     * Returns socket of this player
     */
    this.getSocket = function(){
            return this.socket;
    }

    /**
     * Returns name of this player
     */
    this.getName = function(){
        return this.name;
    }

    /**
     * Sets the name of this player to the given name
     */
    this.setName = function(name){
        this.name = name;
    }

    /**
     * Sets the game key of this player to the given key
     */
    this.setKey = function(gameKey){
        this.gameKey = gameKey;
    }

    /**
     * Returns the key of the game the player is participating in
     */
    this.getKey = function(){
        return this.gameKey;
    }

    /**
     * Sets the invite code of this player
     */
    this.setInviteCode = function(inviteKey){
        this.inviteKey = inviteKey;
    }

    /**
     * Gets the invite key of this player
     */
    this.getInviteCode = function(){
        return this.inviteKey;
    }

    /**
     * Toggles ready status
     */
    this.toggleReady = function() {
        this.ready = !this.ready;
    }

    /**
     * Returns ready status
     */
    this.isReady = function() {
        return this.ready;
    }

    /**
     * Disconnects a player with the given error message
     */
    this.kick = function(message, log){
        if (socket !== null && socket !== undefined && socket.readyState === 1)
        {
            socket.send("KICK=" + message)
            socket.close();
        }
        
        console.log("Kicking player '" + this.getName() + "', because he/she " + log);
    }
}

module.exports = Player;