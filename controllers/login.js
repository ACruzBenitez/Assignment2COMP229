let Login = require('../models/login');

exports.login = function(req, res, next) {
    Login.find((err, loginCredentials) => {
        
        if(err)
        {
            return console.error(err);
        }
        else{
            res.render(
                'login/login', 
                { 
                    title: 'Login',
                    LoginCredentials: loginCredentials
                }
                );
        }
    });

    //res.render('index', { title: 'About' });
}
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Login.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('login/add_edit', {
                title: 'Edit Contact', 
                item: itemToEdit
            })
        }
    });
}


module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedItem = Login({
        _id: req.body.id,
        name: req.body.name,
        number: req.body.number,
        email: req.body.email
    });

    // console.log(updatedItem);

    Login.updateOne({_id: id}, updatedItem, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the book list
            res.redirect('/login/list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Login.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/login/list');
        }
    });
}