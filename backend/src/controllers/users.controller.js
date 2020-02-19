const usrModel = require('../models/User');

const usersCtrl = {}


//list
usersCtrl.getUsers = async(req,res) =>  {
    const users = await usrModel.find()
    res.json({message: users})
}
//saveusers
usersCtrl.createUser = async (req,res) =>  {

    const {username} = req.body;

    const newUser = new usrModel({
        username
    })
    await newUser.save()
    res.json({message:'User created!'})
}

//only a user
usersCtrl.getUser =  async (req,res) => {
    const id = req.params.id;
    const user  =  await usrModel.findById(id);
    res.json(user)
}

//update a user
usersCtrl.updateUser =  async(req,res) => {
    const {username} = req.body;
    const user = await usrModel.findOneAndUpdate(req.params.id,{
       username
    })

    console.log(user)

    res.json({message:'user updated'})
}
//delete a user
usersCtrl.deleteUser =  async (req, res) => {
    await usrModel.findByIdAndDelete(req.params.id);
    res.json({message: 'user deleted'})
}

module.exports =  usersCtrl;