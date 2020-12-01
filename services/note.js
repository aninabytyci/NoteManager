class Note {
    constructor(title, description, importance ,finishedDate, creationDate, finished) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.finishedDate = finishedDate;
        this.creationDate = creationDate;
        this.finished = finished;
    }
}
module.exports = new Note();
