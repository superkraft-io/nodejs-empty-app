class sk_ui_myGlobalComponent extends sk_ui_component {
    constructor(opt){
        super(opt)

        this.add.label(_c => {
            _c.text = 'This is a label inside a custom global component'
        })
    }
}