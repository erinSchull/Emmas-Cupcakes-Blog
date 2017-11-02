module.exports = {
    getOrder: (req, res, next) => {
        const db = req.app.get('db');
        db.find_order([req.params.id])
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
        const {quantity, cake, frosting, filling, topping, total} = req.body;
        db.add_order([quantity, cake, frosting, filling, topping, total])
        .then (response => {
            res.status(200).send(response)
        })
    },
    addTotal: (req, res, next) => {
        const db = req.app.get('db');
        const { total, orderid } = req.body;
        db.add_order_total([orderid, total])
        .then (response => {
            res.status(200).send(response)
        })
    },
    deleteOrder: (req, res, next) => {
        const db = req.app.get('db');
        db.delete_order(req.params.id)
        .then(response => {
            res.status(200).send(response)
        })
    },
    updateStatus: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body);
        const { status } = req.body;
        db.update_status([req.params.id, status])
        .then(response =>{
            res.status(200).send(response)
        })
    }

}