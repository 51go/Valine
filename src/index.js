const {h,render} = require('preact')
// import {h,render} from 'preact'
const Clock = require('./valine')
class ValineFactory {
    constructor(options) {
        let root = this
        //root.Core = Core
        root.options = options
        options && root.init(options)
        return root
    }

    ready(callback) {
        let win = window, doc = document
        if (doc.readyState === "complete" || (doc.readyState !== "loading" && !doc.documentElement.doScroll))
            setTimeout(() => callback && callback() , 0)
        else {
            let handler = () => {
                doc.removeEventListener("DOMContentLoaded", handler, false)
                win.removeEventListener("load", handler, false)
                callback && callback()
            }
            doc.addEventListener("DOMContentLoaded", handler, false)
            win.addEventListener("load", handler, false)
        }
        return this
    }

    init(options){
        let root = this
        root.ready(()=>{
            console.log(Clock)
            let el = options.el || null
            let _el = document.querySelectorAll(el)
            el = el instanceof HTMLElement ? el : (_el[_el.length-1] || null)
            if(!el) throw 'Init failed. `el` not found.'
            console.log(h,render)
            return render(<Clock />,document.body)
        })

        return root
    }

    counter(){}
}

class Valine{
    constructor(options){
        return new ValineFactory(options)
    }
}

module.exports = Valine

module.exports.default = Valine