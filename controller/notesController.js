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
        const userSettings = req.session.userSettings;
        await res.render('viewNote', {
            layout: 'index',
            notes: await noteStore.order(
                req.userSettings.orderBy,
                req.userSettings.orderDirection,
                (req.userSettings.hideFinished === 1)),
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
            req.body.finished);
        res.redirect("/");
    }

    async viewAddedNote(req, res) {
        await res.render('addNote', {
            layout: 'index',
            orderDirection: req.userSettings.orderDirection,
            orderBy: req.userSettings.orderBy,
            hideFinished: req.userSettings.hideFinished,
            style: req.userSettings.style
        });
    }

    async viewEditedNote(req, res) {
        await res.render('editNote',
            Object.assign(await noteStore.get(req.query.id), {
                layout: 'index',
                orderDirection: req.userSettings.orderDirection,
                orderBy: req.userSettings.orderBy,
                hideFinished: req.userSettings.hideFinished,
                style: req.userSettings.style
            }));
    }

    /* async viewFinishedNote(req, res) {
         await res.render('viewNote',
           Object.assign(await noteStore.getAll(req.query.finished === 1),
             {
                 layout: 'index',
                 orderDirection: req.userSettings.orderDirection,
                 orderBy: req.userSettings.orderBy,
                 style: req.userSettings.style
             }))
     //  res.redirect("/");*/


}
module.exports = new NotesController();