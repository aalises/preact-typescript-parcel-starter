import { defaultDate } from "../utils/utils";

export function getLastAlbum() : Promise<Date>{
    const promise = new Promise<Date>((resolve,reject) => {
        fetch(`https://itunes.apple.com/search?term=king+gizzard+lizard+wizard&entity=album`, {
            method: "GET",
            headers:{
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
        }).then(response => {
            response.json()
                .then(data => data.error ? reject(data.error.message) : resolve(getLastDate(data)))
                .catch(err => reject(err));
        }).catch(err => reject(err));
    });
    return promise;
}

//Gets the last date from the object returned
function getLastDate(data) : Date {
    console.log(data); //Which data are we receiving
    return defaultDate;
}