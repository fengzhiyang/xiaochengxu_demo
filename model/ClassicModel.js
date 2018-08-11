import Url from '../url/Url'
import HttpService from '../utils/HttpService'
import Code from '../utils/Code'
import Storage from '../utils/Storage.js'

class ClassicModel {
    constructor() {
        this._url = Url;
        this._httpService = HttpService;
        this._code = Code;
        this._storage = Storage.init();
    }

    getClassicLatestData = (callBack) => {
        this._httpService.getHttpServiceHandle({
            url: this._url.getClassicLatestUrl
        }).then(data => {
            if (data.statusCode !== this._url.getSuccessCode) {
                return wx.showToast({
                    title: this._code.get(data.statusCode),
                    icon: 'none',
                    duration: 3000
                })
            }
            this._storage.setStorage('latest', data.data.index)
            callBack && callBack(data.data)
        });
    }
    getClassic = (index, nextOrPrevious, callBack) => {
        let storageKey = nextOrPrevious === 'next' ? this._getStorageKey(index + 1) : this._getStorageKey(index - 1);
        let classic = this._storage.getStorage(storageKey);
        if (!classic) {
            this._url.index = index;
            this._httpService.getHttpServiceHandle({
                url: this._url.getClassic(nextOrPrevious)
            }).then(data => {
                if (data.statusCode !== this._url.getSuccessCode) {
                    return wx.showToast({
                        title: this._code.get(data.statusCode),
                        icon: 'none',
                        duration: 3000
                    })
                }
                this._storage.setStorage(this._getStorageKey(data.data.index), data.data)
                callBack && callBack(data.data)
            });
        } else {
            callBack && callBack(classic)
        }

    }

    isFirst = (index) => {
        return index === 1 ? true : false
    }

    isLatest = () => {
        let latestIndex = this._getLatestIndex();
        return latestIndex === 8 ? true : false

    }
    _getLatestIndex = () => {
        return this._storage.getStorage('latest')
    }
    _getStorageKey = (index) => {
        return `classic-${index}`
    }



}

export default new ClassicModel()