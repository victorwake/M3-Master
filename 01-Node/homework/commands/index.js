const fs = require('fs')
const request = require('request')


module.exports = {
    date: function (args, done) {
        done(Date());
    },

    pwd: function (args, done) {
        done(process.cwd());
        
    },

    ls: function (args, done) {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            let output = '';
            files.forEach(function (file) {
                output += file.toString() + "\n";
            })
            done(output);
        });
    },      


    echo: function (args, done) {
        process.stdout.write(args.join(' '));
    },

    cat: function (args, done) {
        fs.readFile(args[0], 'utf8', function (err, data) {
            if (err)
                throw err;
            done(data);
            
        })
    },

    head: function (args, done) {
        fs.readFile(args[0], 'utf8', function (err, data) {
            if (err) {
                throw err
            } else {
                const firstLine =  data.split('\n').slice(0, 10).join('\n');
                done(firstLine);
            }
            
        })
    },

    tail: function (args, done) {
        fs.readFile(args[0], 'utf8', function (err, data) {
            if (err) {
                throw err
            } else {
                const lastLine =  data.split('\n').slice(-10).join('\n');
                date(lastLine);
            }
            
        })
    },

    sort: function (args, done) {
        fs.readFile(args[0], 'utf8', function (err, data) {
            if (err) {
                throw err
            } else {
                const sorted =  data.split('\n').sort().join('\n');
                done(sorted);
            }
            
        })
    },

    curl: function(args, done){
        request(args[0], function(err, response, body) {
            if (err) throw err;
            done(body)
          // process.stdout.write(body);
          // process.stdout.write("\nprompt > ");
        });
    }
}
