module.exports = class SK_POST extends SK_Root_POST {
    constructor(opt){
        super(opt)
        
        this.info = {
            route: 'test_post',
            protected: false, //if set to "true", the SK backend will call its authentication procedure. More about this in the future.
        }
    }

    async exec(req, res){
        try {
            //do something
            res.send({status: true})
        } catch(err) {
            res.send({status: false})
        }
    }
}