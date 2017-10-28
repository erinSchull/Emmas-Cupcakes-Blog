module.exports = {
    getOrder: (req, res, next) => {
        const db = req.app.get('db');
        db.find_order([req.user.id])
        .then (response => {
            res.status(200).send(response)
        })

    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.read_orders()
        .then (response => {
            res.status(200).send(response)
        })
    }

}