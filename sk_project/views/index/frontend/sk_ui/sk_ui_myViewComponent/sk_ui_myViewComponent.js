class sk_ui_myViewComponent extends sk_ui_component {
    constructor(opt){
        super(opt)

        this.add.label(_c => {
            _c.text = 'This is a label inside a custom component'
        })
    }
}