export class Note {
    private title: string;
    private description: string;
    private importance: number;
    private finishedDate: Date;
    creationDate: Date;
    private finished: boolean;

    constructor(title: string, description: string, importance: number, finishedDate: Date, creationDate: Date, finished: boolean) {
        this.title = title;
        this.description = description;
        this.importance = importance;
        this.finishedDate = finishedDate;
        this.creationDate = creationDate;
        this.finished = finished;
    }
}