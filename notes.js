const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes...'
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(note => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const currentNotes = loadNotes()
    const newNotes = currentNotes.filter(note => note.title !== title)

    if (newNotes.length < currentNotes.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(newNotes)
    } else {
        console.log(chalk.red.inverse('No note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes,
    addNotes,
    removeNote
}