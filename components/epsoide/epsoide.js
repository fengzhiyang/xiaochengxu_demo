// components/epsoide/epsoide.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function (newValue, oldValue, changedPath) {
        let val = newValue < 10 ? '0' + newValue : newValue;
        this.setData({
          _index: val
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月',
      '八月', '九月', '十月', '十一月', '十二月'
    ],
    year: 1,
    month: 1,
    _index: ''
  },
  attached: function () {
    let {
      year,
      month
    } = this.getYearAndMonth();
    this.setData({
      year: year,
      month: this.data.months[month]
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getYearAndMonth: function () {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      return {
        year,
        month
      }
    }
  }
})