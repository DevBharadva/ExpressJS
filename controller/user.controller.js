const user = require('../user.json');

exports.addNewUsers = (req,res)=>{
    user.push(req.body);
    res.json({User: req.body, message:'user Added success'});
};

exports.getAllUsers = (req,res)=>{
    res.json(user)
};

exports.getUsers = (req,res)=>{
    let id = +req.params.id;
    let UserIndex = user.find((User) => User.id === id);
    console.log(UserIndex);
    
    res.json(UserIndex)
}

exports.replaceUsers = (req,res)=>{
    let id = +req.params.id;
    let UserIndex = user.findIndex((User) => User.id === id);
    const Users = user[UserIndex];
    user.splice(UserIndex,1,{...Users,...req.body});
    res.json({message:'replace User Succesfully'})
}

exports.updateUsers = (req,res)=>{
    let id = +req.params.id;
    let UserIndex = user.findIndex((products) => products.id === id);
    const user = user[UserIndex];

    user.splice(UserIndex,1,{...products,...req.body});
    res.json({message:'Update products Succesfully'})
};

exports.deleteUsers = (req,res)=>{
    let id = +req.params.id;
    let UserIndex = user.findIndex((products) => products.id === id);
    const user = user[UserIndex];

    user.splice(UserIndex,1);
    res.json({message:'Delete products Succesfully'})
};