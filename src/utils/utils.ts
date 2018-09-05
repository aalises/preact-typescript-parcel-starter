export const messages : string[][] = [
    ["It has been","since King Gizzard and the Lizard Wizard last released an album"],
    ["Already","since the newest King Gizzie and the Lizzie Wizzie came out"],
    ["Phew! it has been","since the last album of the King Gizzard and the Lizard Wizard boys"],
    ["It has been","since we got new epic music and flute solos from the King Gizzardos and the Lizard Wizardos"],
]

export function getRandMessage() : string[]{
    const randomIdx = Math.floor(Math.random() * (this.messages.length));
    return this.messages[randomIdx]
}

export const defaultDate = new Date("2017-12-31T08:00:00Z"); //Gumboot Soup Release Date
