var str = 'Global'
var obj = {
    str: 'obj',
    fn: function () {
        var str = 'zhangsan'
        this.name = 'edward'

        console.log(this.str)  // obj

        return {
            str: 'newObj',
            fn: () => {
                console.log(this.str)  // obj
                console.log(this.name) // edward
            }
        }
    }
}

var newObj = obj.fn()
newObj.fn()