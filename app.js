global.fs = require('fs')
var __superkraft = require(__dirname + '/superkraft/sk_superkraft.js')


global.sai = {
}


var opt = {
    type: 'wapp',
    root: __dirname,

    projectRoot    : __dirname + '/sk_project',
    postsRoot      : __dirname + '/sk_posts/',
    templates      : __dirname + '/sk_templates/',
    globalActions  : __dirname + '/sk_globalActions/',
    globalFrontend : __dirname + '/sk_globalFrontend/',

    config: __dirname + '/config.json', //won't work in SSC

    database : sai.database,
    auth     : sai.auth,

    l10n     : new (require(__dirname + '/modules/l10n/l10n.js'))(),

    //useComplexity: true

    icons: {
        app: __dirname + '/assets/logo.png',
        view: __dirname + '/sk_project/frontend/img/logo.png',
    },
    
    dapp: {
        deeplink: {
            scheme: 'superkraft-empty-app'
        }
    },


    csp: {
        connectSrc: [
            'blob:', 
            
        ],
        frameSrc:   [
        ],
        scriptSrc:  [
            "'unsafe-eval'", 'blob:', "'unsafe-inline'", 'Cross-Origin-Resource-Policy: cross-origin',
            
        ],
        scriptSrcAttr: [
            "'unsafe-inline'",
        ],
        imgSrc: [
        ],
        fontSrc:    [
            'Cross-Origin-Resource-Policy: cross-origin', 'data:',

            //vanilla fe
        ],
        styleSrc:   [
            "'unsafe-inline'",

            //vanilla fe
        ],
        mediaSrc:   ['blob:', '*.s3.amazonaws.com']
    },

    onPreStart: ()=>{
        
    },

    onReady: async ()=>{
        
    }
}


var sk = new __superkraft(opt)