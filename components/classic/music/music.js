// components/classic/music/music.js
import {
  classicBeh
} from '../classic-beh'

const mMgr = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],

  properties: {
    hidden: Boolean,
    src: String
  },
  detached: function () {
    // mMgr.stop();
  },
  attached: function () {
    this._recoverStatus();
    this._monitorSwitch()
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: '/images/player@pause.png',
    playSrc: '/images//player@play.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay: function () {
      let playing = this.data.playing;
      if (!playing) {
        this.setData({
          playing: true
        })
        mMgr.src = this.properties.src;
      }
      if (playing) {
        this.setData({
          playing: false
        })
        mMgr.pause();
      }
    },
    _recoverStatus: function () {
      if (mMgr.paused) {
        this.setData({
          playing: false
        })
        return
      }
      if (mMgr.src === this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },
    _monitorSwitch: function () {
      mMgr.onPlay(() => {
          this._recoverStatus();
        }),
        mMgr.onPause(() => {
          this._recoverStatus();
        }),
        mMgr.onStop(() => {
          this._recoverStatus();
        }),
        mMgr.onEnded(() => {
          this._recoverStatus();
        })
    },
  }
})