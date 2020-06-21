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
    handler: function (argv) {
        notes.addNotes(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    description: 'Remove a note',
    handler: function () {
        console.log('Removing a note!')
    }
})

//Create read command
yargs.command({
    command: 'read',
    description: 'Read a note',
    handler: function () {
        console.log('Reading a note!')
    }
})

//Create list command
yargs.command({
    command: 'list',
    description: 'List all notes',
    handler: function () {
        console.log('Listing out all notes!')
    }
})

yargs.parse()