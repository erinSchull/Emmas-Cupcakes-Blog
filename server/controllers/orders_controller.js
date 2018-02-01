module.exports = {
    getAllOrders: (req, res, next) => {
        const db = req.app.get('db');
        db.read_orders()
        .then (response => {
            res.status(200).send(response)
        })
    },
    addOrder: (req, res, next) => {
        const db = req.app.get('db');
        const {status, quantity, cake, frosting, filling, topping, total} = req.body;
        console.log('do i have the right req.user.id : ', req.user.id);
        db.add_order([status, quantity, cake, frosting, filling, topping, total, req.user.id])
        .then (response => {
            res.status(200).send(response)
        })
    },
    deleteOrder: (req, res, next) => {
        const db = req.app.get('db');
        console.log('req.params.orderid', req.params.orderid);
        db.delete_order(req.params.orderid)
        .then(response => {
            res.status(200).send(response)
        })
    },
    updateStatus: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body);
        const { status } = req.body;
        db.update_status([status, req.params.id])
        .then(response =>{
            res.status(200).send(response)
        })
    }

}