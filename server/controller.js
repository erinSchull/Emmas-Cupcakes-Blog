module.exports = {
    getAdmin: (req, res, next) => {
        const db = req.app.get('db');
        db.find_admin()
        .then (response => {
            res.status(200).send(response)
        })
    }
}