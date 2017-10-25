module.exports = {
    create: (req, res, next) => {
        const db = req.app.get('db');
        const {body, title, image} = req.body;

        dbInstance.create_blog_post([ body, title, image])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },
    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const {params} = req;

        db.read_blog([params.blogid])
            .then((data) => res.status(200).send(data))
            .catch(() => res.status(500).send(console.log('could not get blog')));
    }

}