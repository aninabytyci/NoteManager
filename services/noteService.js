const Datastore = require('nedb-promises');
const db = new Datastore({filename: './data/note.db', autoload: true});

class Note{
    constructor(title, description, importance, finishedDate, finished){
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.creationDate = new Date();
        this.finishedDate = finishedDate;
        this.finished = finished;
    }
}

class NoteService{
    constructor() {
    }

    async add(title, description, importance, finishedDate, finished){
        let note = new Note(title, description, importance, finishedDate, finished);
        return await db.insert(note);
    }

    async edit(id, title, description, importance, finishedDate, finished){
        let note = new Note(title, description, importance, finishedDate, finished);
        return await db.update({_id: id}, note);
    }

    async get(id){
        return await db.findOne({_id: id});
    }

    async delete(){
        return await db.delete({_id: id});
    }

    async getAll(){
        return db.find({});
    }

    async order(orderBy, orderDirection, hideFinished) {
        const sortingOrder= {};
        sortingOrder[orderBy] = orderDirection
        return await db.find({$or: [{finished: false},{finished: hideFinished}]}).sort(sortingOrder).exec();
    }
}
module.exports = new NoteService();