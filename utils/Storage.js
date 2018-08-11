export default class Storage {
    constructor() {
        this._init = null;
    }
    static init() {
        if (!this._init) {
            this._init = new Storage()
        }
        return this._init;
    }
    setStorage = (key, value) => {
        wx.setStorageSync(key, value)

    }
    getStorage = (key) => {
        let value = wx.getStorageSync(key);
        if (!value) {
            return false
        }
        return value
    }

}