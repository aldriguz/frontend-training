const googleDatabase = [
    'cats.com',
    'sites.com',
    'flowers.com',
    'animals.com',
    'robofriends.com',
    'myfavouritecats.com',
    'greatsoup.com',
    'catpictures.com'
]

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => {
        return website.includes(searchInput);
    });

    return matches.length > 3 ? matches.slice(0, 3) : matches;
}


//console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;