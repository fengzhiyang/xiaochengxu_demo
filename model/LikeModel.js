import Url from '../url/Url'
import HttpService from '../utils/HttpService'
import Code from '../utils/Code'
class LikeModel {
    constructor() {
        this._url = Url;
        this._httpService = HttpService;
        this._code = Code;
    }
    like = (behavior, atrId, category) => {
        let url = behavior ? this._url.like : this._url.cancel;
        this._httpService.getHttpServiceHandle({
            url: url,
            method: 'POST',
            data: {
                art_id: atrId,
                type: category
            }
        }).then(res => {
            if (res.statusCode !== this._url.getSuccessCode) {
                return wx.showToast({
                    title: this._code.get(res.statusCode),
                    icon: 'none',
                    duration: 3000
                })
            }
        })
    }
    getClassicLikeStatus = (artID, category, callBack) => {
        this._httpService.getHttpServiceHandle({
            url: this._url.getClassicLikeStatus(artID, category)
        }).then(data => {
            if (data.statusCode !== this._url.getSuccessCode) {
                return wx.showToast({
                    title: this._code.get(data.statusCode),
                    icon: 'none',
                    duration: 3000
                })
            }
            callBack && callBack(data.data)
        });
    }

}
export default new LikeModel()