const fs = require('fs')
const chalk = require('chalk')

const readNote = (title) => {
    const notes = loadNotes()
    const findedNote = notes.find(note => note.title === title)

    if (findedNote) {
        console.log(chalk.blue.inverse(findedNote.title))
        console.log(findedNote.body)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.white.inverse('Your notes...'))
        notes.map(note => console.log(note.title))
    } else {
        console.log(chalk.red.inverse('No notes added!'))
    }
}

const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
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
    readNote,
    listNotes,
    addNotes,
    removeNote
}