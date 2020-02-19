//import model 
const noteModel = require('../models/Note');

const notesCtrl = {}

//list
notesCtrl.getNotes = async (req,res) => {
    const notes = await noteModel.find()
    res.json({message: notes})
}


//savenotes
notesCtrl.createNote = async (req,res) =>  {

    const {title, content, author, date } = req.body;

    const newNote = new noteModel({
        title : title,
        author: author,
        content: content,
        date: date
    })
    await newNote.save()
    console.log(newNote)
    res.json({message:'Nota created!'})

};
//only a note
notesCtrl.getNote = async (req,res) => {
    const id = req.params.id;
    const note  =  await noteModel.findById(id);
    res.json(note)
}
//update a note
notesCtrl.updateNote = async(req,res) => {
    const {title, content, author, date } = req.body;
    const noteupdated = noteModel.findByIdAndUpdate(req.params.id,{
        title,
        author,
        content,
        date
    })

    console.log(noteupdated)

    res.json({message:'note updated'})
}
//delete a note
notesCtrl.deleteNote =  async (req, res) => {
    await noteModel.findByIdAndDelete(req.params.id);
    res.json({message: 'Note deleted'})
}


module.exports =  notesCtrl;