class Url {
    constructor() {
        this._commontUrl = 'http://bl.7yue.pro/v1';
        this._successCode = 200;
        this._index = 0;
    }
    get getSuccessCode() {
        return this._successCode
    }
    get getClassicLatestUrl() {
        return `${this._commontUrl}/classic/latest`
    }
    get like() {
        return `${this._commontUrl}/like`
    }
    get cancel() {
        return `${this._commontUrl}/like/cancel`
    }
    set index(v) {
        this._index = v
    }
    getClassic(nextOrPrevious) {
        return `${this._commontUrl}/classic/${this._index}/${nextOrPrevious}`
    }
    getClassicLikeStatus(artID, category) {
        return `${this._commontUrl}/classic/${category}/${artID}/favor`
    }
    get getBoolHotList() {
        return `${this._commontUrl}/book/hot_list`
    }
    get myBookCount() {
        return `${this._commontUrl}/favor/count`
    }

}

export default new Url();