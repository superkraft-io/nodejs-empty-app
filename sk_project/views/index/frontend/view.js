class SK_App_View extends sk_ui_component {
    constructor(opt){
        super(opt)

        this.add.label(_c => {
            _c.text = 'hello :)'
        })
    }
}