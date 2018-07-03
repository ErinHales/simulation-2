module.exports = {
    getAll: (req,res) => {
        req.app.get("db").get_houses().then(response => res.status(200).send(response))
        .catch(err =>  {
            console.log(err);
            res.status(500).send(err);
        });
    },
    addHouse: (req,res) => {
        var {name, address, city, state, zipcode, image, mortgage, rent} = req.body;
        req.app.get("db").add_new_house([name,address,city,state,zipcode,image,mortgage,rent]).then(response => res.sendStatus(200))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    },
    deleteHouse: (req,res) => {
        var {id} = req.params;
        req.app.get("db").delete_house([id]).then(response => res.sendStatus(200))
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
    }
}