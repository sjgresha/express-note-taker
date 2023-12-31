const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.post('/notes', (req, res) => {
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        };

        const postedNotes = JSON.parse(fs.readFileSync('./db/db.json'));
        postedNotes.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(postedNotes, null, 2), (err) => {
            if (err) throw (err);
            console.log('Note Saved!');
        });

        const response = {
            status: 'success',
            body: newNote
        };
        console.log(response);
        res.status(201).json(response);

    } else {
        res.status(500).json('Error adding note');
    }

});

//not getting saved notes
router.get('/', (req, res) => {
    const postedNotes = fs.readFileSync('./db/db.json');
    res.json(JSON.parse(postedNotes));
});

// router.get('/:id', (req, res) => {
//     const postedNotes = fs.readFileSync('./db/db.json');
//     const allNotes = JSON.parse(postedNotes);
//     const singleNote = allNotes.find((n))
// })


//need to finish/fix the delete route
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
           const notes = JSON.parse(data)
        }
    });
    
    const deletedNotes = notes.filter(note => note.id != req.params.id)
})