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
        
        this.add.infoLabel(_c => {
            _c.icon = 'dog'
            _c.text = 'This is an infolabel with an icon'
            _c.size = 14
        })

        this.add.input(_c => {
            _c.placeholder = 'This is an input'
            _c.onChanged = res => {
                console.log(res)
            }
        })

        this.add.labelledSwitch(_c => {
            _c.labels.left.text = 'OFF'
            _c.labels.right.text = 'ON'
        })

        this.add.linkButton(_c => {
            _c.icon = 'dog'
            _c.text = 'This is a link button'

            //_c.goto will open URL in the same window
            //_c.goto_ will open URL in a new window
            _c.goto_ = 'https://github.com/superkraft-io/superkraft'
        })

        this.add.loader(_c => {
        })

        this.add.separator(_c => {
            _c.width = 256
        })

        this.add.slider(_c => {
            _c.width = 256
            _c.min = 0
            _c.max = 100
            //_c.smooth = true
        })


        this.add.text(_c => {
            _c.width = 128
            _c.wrap = true
            _c.text = 'This is a multi-line:able text to allow for multi-line text content'
        })

        this.add.textarea(_c => {
            _c.width = 128
            _c.wrap = true
            _c.value = 'This is a multi-line:able text area to allow for multi-line text input'
        })

        this.add.myViewComponent()

        this.add.myGlobalComponent()

        this.add.simpleActionBtn(_c => {
            _c.text = 'Test an action of this view'
            _c.onClick = async ()=>{
                var res = await sk.actions.index_test_action({myData: "This is a string"})
                alert("Action response from backend: " + res.responseData)
            }
        })

        this.add.simpleActionBtn(_c => {
            _c.text = 'Test a global action'
            _c.onClick = async ()=>{
                var res = await sk.actions.global_test_action({myData: "Hello backend!"})
                alert("Action response from backend: " + res.responseData)
            }
        })

        this.add.simpleActionBtn(_c => {
            _c.text = 'Test the POST request "test_post"'

            _c.onClick = async ()=>{
                var opt = {
                    cmd: 'test_post',
                    data: {
                        someDataToInclude: 'This is a string'
                    },
                    //files: ..., //more about this in the future
                }

                
                try {
                    var res = await sk_communicator.send(opt)
                    alert('All OK!')
                } catch(err) {
                    alert('POST failed!')
                }
            }
        })
    }
}