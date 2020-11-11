const noteStore = require('../services/noteService');

class NotesController {

    async addNote(req, res) {
        await noteStore.add(
            req.body.title,
            req.body.description,
            req.body.importance,
            req.body.finishedDate,
            (req.body.finished === 'true'));
        res.redirect('/');
    }

    async viewNote(req, res) {
        await res.render('viewNote', {
            layout: 'index',
            notes: await noteStore.order(
                req.userSettings.orderBy,
                req.userSettings.orderDirection,
                (req.userSettings.show === 1)),
            style: req.userSettings.style
        });
    }

    async editNote(req, res) {
        await noteStore.edit(
            req.query.id,
            req.body.title,
            req.body.description,
            req.body.importance,
            req.body.finishedDate,
            (req.body.finished === 'true'));
        res.redirect("/");
    }

    async deleteNote(req, res) {
        await noteStore.delete(req.query.id);
        res.redirect('/');
    }

    async viewAddedNote(req, res) {
        await res.render('addNote', {
            layout: 'index',
            style: req.userSettings.style
        });
    }

    async viewEditedNote(req, res) {
        await res.render('editNote',
            Object.assign(await noteStore.get(req.query.id), {
                layout: 'index',
                style: req.userSettings.style
            }));
    }
}

module.exports = new NotesController();