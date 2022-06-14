function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout() {
    console.log("hello".toUpperCase());
}

function logWhisper() {
    console.log("HELLO".toLowerCase());
}

function sayHiToHeadphonedRoommate(string = "HELLO") {
    if (string === string.toLowerCase())
    return (string = "I can't hear you!")
    else if(string === string.toUpperCase())
    return (string = "YES INDEED!")
    if (string === "Let's have dinner together!")
    return (string = "I would love to!")
}
    
