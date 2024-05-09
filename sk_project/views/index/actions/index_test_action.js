/*
This is an action that is accessable only from this page.

Inside the page JS code (anywhere where you'd code in JS, e.g inside view.js)
you'd call this action as follows: sk.actions.index_test_action({myData: "This is a string"});
*/

module.exports = class SK_Action extends SK_RootAction {
    async exec(opt, res, view, _v, srcOpt, validationRes){
        //"opt" contains the data you send to the action
        //"res" contains a resolver and a rejector
        //"view" is the SK view
        //"srcOpt" is the web data for the request. Remember, an action is just an abstracted POST request
        //"validationRes" contains information about the authenticity of the action

        console.log(opt)

        res.resolve({
            responseData: "works"
        })
    }
}
