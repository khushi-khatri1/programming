const yargs = require('yargs');

//create add command 
yargs.command({
    command: 'add',
    handler: function() {
        console.log('Adding a new note!')
    }
})

//create remove command 
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

//create list command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function() {
        console.log('Removing the note!')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse();