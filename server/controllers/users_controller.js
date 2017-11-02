module.exports = {
    getAdmin: (req, res, next) => {
        const db = req.app.get('db');
        db.find_admin()
        .then (response => {
            res.status(200).send(response)
        })
    },
    getUser: (req, res, next) => {
        const db = req.app.get('db');
        db.find_user()
        .then (response => {
            res.status(200).send(response)
        })
    },
    getOrdersOnUser: (req, res, next) => {
        const db = req.app.get('db');
        const {usersid, orderid} = req.body
        db.join_users_orders([usersid, orderid])
        .then (response => {
            res.status(200).send(response)
        })
    }
    
}