function generateRandoms() {
    return new Promise((resolve, reject) = {
        setTimeout(function() {
            let randVal = Math.floor(Math.random() * 10);
            if (randVal > 5 && randVal < 11) {
                resolve(randVal);
            } else if (randVal < 5) {
                reject("Value is lower than desired limit")
            } else {
                throw new Error("Unknown value")
            }
        }, 5000);
    })
}
generateRandoms()
    .then((resolved) => {
            console.log("Resolved with value of", resolved);
        },
        (reject) => {
            console.log("Rejected for reason: ", reject);
        })
    .catch((err) => {
        console.error("Error while processing: ", err);
    });
