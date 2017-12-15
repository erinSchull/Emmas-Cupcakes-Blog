module.exports = {
    getAdmin: (req, res, next) => {
        const db = req.app.get('db');
        db.find_admin([req.params.is_admin])
        .then (response => {
            res.status(200).send(response)
        })
    },
    getUser: (req, res, next) => {
        const db = req.app.get('db');
        db.find_user([req.params.auth_id])
        .then (response => {
            res.status(200).send(response)
        })
    },
    getOrdersOnUser: (req, res, next) => {
        const db = req.app.get('db');
        const {usersid} = req.params;
        //fixed 12/8 ...maybe
        db.join_users_orders([usersid])
        .then (response => {
            res.status(200).send(response)
        })
    }   
}