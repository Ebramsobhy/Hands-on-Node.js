// Simulating repeated attempts to connect to a database using setInterval

function tryConnect(){
    const success = Math.random() < 0.5;
    return success;
}

function startConnect(){
    let attempts = 0;
    const maxFailures = 4;

    console.log("Starting connection attempts to the database...");
    const intervalId = setInterval(()=>{
        attempts++;
        console.log(` Attempt ${attempts}: Trying to connect...`);
        const connected = tryConnect();

        if (connected){
            console.log("Connected successfully to the database!");
            clearInterval(intervalId);
            return;
        }

        console.log("Connection failed. Retrying...");
        if (attempts >= maxFailures){
            console.log("Maximum connection attempts reached. Stopping process.");
            clearInterval(intervalId);
        }
    }, 1000)
}

startConnect()