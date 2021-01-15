import Image from '../models/images.model';


// Find a single note with a noteId
export function findOne(req, res) {
    const randomInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var randomnumber = randomInteger(0, 4)
    let ids = ['tGTwWL7', 'gPRqmfp', 'BKtpymd', 'IKAzVxA', 'HyOlxqs']
    let imageId = ids[randomnumber]

    Image.find({id:imageId})
    .then(image => {
        if(!image) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });            
        }
        res.send(image);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });

}


