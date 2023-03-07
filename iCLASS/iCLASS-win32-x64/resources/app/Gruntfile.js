var grunt = require('grunt');

grunt.config.init({
    pkg: grunt.file.readJSON('./iCLASS/package.json'),
    'create-windows-installer': {
        ia32: {
            appDirectory: './iCLASS/iCLASS-win32-x64',
            outputDirectory: './iCLASS/installer64',
            authors: 'iCLASS',
            title: 'iCLASS',
            exe: 'iCLASS.exe',
            description: 'iCLASS',
            noMsi: true,
            loadingGif: 'iCLASS.ico',
            setupIcon: 'iCLASS.ico',
            icon: 'iCLASS.ico',
        }
    }
})

grunt.loadNpmTasks('grunt-electron-installer');
grunt.registerTask('default', ['create-windows-installer']);