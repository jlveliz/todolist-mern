const usersCtrl = {}

//list
usersCtrl.getUsers = (req,res) => res.json({message: []});
//saveusers
usersCtrl.createUser = (req,res) => res.json({message: 'user created' });
//only a user
usersCtrl.getUser = (req,res) => res.json({message:'a user'})
//update a user
usersCtrl.updateUser = (req,res) => res.json({message:'user updated'})
//delete a user
usersCtrl.deleteUser = (req, res) => res.json({message:'user deleted'})


module.exports =  usersCtrl;