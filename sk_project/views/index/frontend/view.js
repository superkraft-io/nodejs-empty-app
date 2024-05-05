class SK_App_View extends sk_ui_component {
    constructor(opt){
        super(opt)

        this.add.label(_c => {
            _c.text = 'Hello :)'
        })

        this.add.checkbox(_c => {
            _c.styling = 'top left'
            _c.text = 'Click me'
        })

        this.add.checkmark(_c => {
            _c.styling = ''
            _c.size = 32
            setTimeout(()=>{ _c.check() }, 3000)
        })

        this.add.colorPicker(_c => {
        
        })

        this.add.dropdown(_c => {
            _c.text = 'Dropdown'
            _c.items = [
                {header: true, label: 'This is a header'},
                {label: 'Item 1'},
                {label: 'Item 2', icon: 'dog'},
                {separator: true},
                {label: 'Submenu', items: [
                    {label: 'Submenu item'}
                ]}

            ]
        })

        
        this.add.group(_c => {
            _c.header = 'Group'
            _c.container.setup(_c => {
                _c.add.button(_c => {
                    _c.text = 'button inside a group'
                })
            })
        })

        this.add.groupCollapsable(_c => {
            _c.header = 'Group Collapsable'
            _c.container.setup(_c => {
                _c.add.button(_c => {
                    _c.text = 'button inside a collapsable group'
                })
            })
        })
        

        this.add.icon(_c => {
            _c.icon = 'dog'
        })
        
    }
}