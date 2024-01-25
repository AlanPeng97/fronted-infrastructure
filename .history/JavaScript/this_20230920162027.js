var str = 'window'

var obj = {
    str: 'obj',
    fn: () => {
        console.log(this.str)
    }
}

obj.fn()