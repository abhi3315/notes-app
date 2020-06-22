const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Customize yargs version
yargs.version('1.0.0')

//Create add command
yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            description: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    builder: {
        title: {
            description: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler() {
        console.log('Reading a note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler() {
        notes.listNotes()
    }
})

yargs.parse()