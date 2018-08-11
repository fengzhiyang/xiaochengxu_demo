import Url from '../url/Url'
import HttpService from '../utils/HttpService'
import Code from '../utils/Code'
import Storage from '../utils/Storage.js'

class BookModel {
    constructor() {
        this._url = Url;
        this._httpService = HttpService;
        this._code = Code;
        this._storage = Storage.init();
    }
    getBookHotList = (callBack) => {
        this._httpService.getHttpServiceHandle({
            url: this._url.getBoolHotList
        }).then(data => {
            if (data.statusCode !== this._url.getSuccessCode) {
                return wx.showToast({
                    title: this._code.get(data.statusCode),
                    icon: 'none',
                    duration: 3000
                })
            }
            callBack && callBack(data.data)
        })

    }
    getmyBookCount = (callBack) => {
        this._httpService.getHttpServiceHandle({
            url: this._url.getBoolHotList
        }).then(data => {
            if (data.statusCode !== this._url.getSuccessCode) {
                return wx.showToast({
                    title: this._code.get(data.statusCode),
                    icon: 'none',
                    duration: 3000
                })
            }
            callBack && callBack(data.data)
        })
    }
}

export default new BookModel()