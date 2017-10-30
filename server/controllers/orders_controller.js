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
    },
    addOrder: (req, res, next) => {
        const db = req.app.get('db');
        db.add_order()
        .then (response => {
            res.status(200).send(response)
        })
    },
    addTotal: (req, res, next) => {
        const db = req.app.get('db');
        db.add_order_total()
        .then (response => {
            res.status(200).send(response)
        })
    },
    deleteOrder: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_order()
        .then(response => {
            res.status(200).send(response)
        })
    },
    updateStatus: (req, res, next) => {
        const db = req.app.get('db');
        db.update_status()
        .then(response =>{
            res.status(200).send(response)
        })
    }

}