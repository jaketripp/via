const trips = [
    {
        business: {
            name: 'Geekdom',
            imgURL: 'burger.jpg',
            cost: '$',
            phone: '210-583-9176',
            address: '123 Main Street',
            coordinates: {
                latitude: '29.426275',
                longitude: '-98.493509'
            },
            yelpURL: 'https://www.yelp.com/developers',
        },
        minutes: 45,
        amount: 20
    },
    {
        business: {
            name: "Hank's Chicken",
            imgURL: 'friedchicken.jpg',
            cost: '$$',
            phone: '210-463-9876',
            address: '987 Fried Chicken Ave',
            coordinates: {
                latitude: '29.461844',
                longitude: '98.483162'
            },
            yelpURL: 'https://www.yelp.com/developers',
        },
        minutes: 20,
        amount: 10
    },
    {
        business: {
            name: "Little Italy",
            imgURL: 'spaghetti.jpg',
            cost: '$$$',
            phone: '210-583-9176',
            address: '36000 NW Plains Ave',
            coordinates: {
                latitude: '29.461844',
                longitude: '98.483162'
            },
            yelpURL: 'https://www.yelp.com/developers',
        },
        minutes: 120,
        amount: 30
    }
];

module.exports = { trips };