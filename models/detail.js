const getdb = require('../util/database').getDb;

class Detail {
    constructor(name, email, imageUrl, qualification) {
        this.name = name;
        this.email = email;
        this.imageUrl = imageUrl;
        this.qualification = qualification;
    }
    save() {
        const db = getdb();
        return db.collection('detail')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

    static fetchAll() {
        const db = getdb();
        return db
            .collection('detail')
            .find()
            .toArray()
            .then(detail => {
                console.log(detail);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

module.exports = Detail;