const library = [
    {
        title: "The Wild",
        author: "Joe Wise",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "Okayyy",
        author: "Me!!",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        title: "The Goeses",
        author: "Him",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

const { title: firstBook } = library[0];

console.log(library);

const libraryJSOn = JSON.stringify(library);

console.log(libraryJSOn);