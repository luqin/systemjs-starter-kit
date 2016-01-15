'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echarts = require('echarts');

var _echarts2 = _interopRequireDefault(_echarts);

require('echarts/chart/wordCloud');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createRandomItemStyle() {
  return {
    normal: {
      color: 'rgb(' + [Math.round(Math.random() * 160), Math.round(Math.random() * 160), Math.round(Math.random() * 160)].join(',') + ')'
    }
  };
}

var charCloudOption = {
  title: {
    text: 'Google Trends',
    link: 'http://www.google.com/trends/hottrends'
  },
  tooltip: {
    show: true
  },
  series: [{
    name: 'Google Trends',
    type: 'wordCloud',
    size: ['80%', '80%'],
    textRotation: [0, 45, 90, -45],
    textPadding: 0,
    autoSize: {
      enable: true,
      minSize: 14
    },
    data: [{
      name: "Sam S Club",
      value: 10000,
      itemStyle: {
        normal: {
          color: 'black'
        }
      }
    }, {
      name: "Macys",
      value: 6181,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Amy Schumer",
      value: 4386,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Jurassic World",
      value: 4055,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Charter Communications",
      value: 2467,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Chick Fil A",
      value: 2244,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Planet Fitness",
      value: 1898,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Pitch Perfect",
      value: 1484,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Express",
      value: 1112,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Home",
      value: 965,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Johnny Depp",
      value: 847,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Lena Dunham",
      value: 582,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Lewis Hamilton",
      value: 555,
      itemStyle: createRandomItemStyle()
    }, {
      name: "KXAN",
      value: 550,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Mary Ellen Mark",
      value: 462,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Farrah Abraham",
      value: 366,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Rita Ora",
      value: 360,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Serena Williams",
      value: 282,
      itemStyle: createRandomItemStyle()
    }, {
      name: "NCAA baseball tournament",
      value: 273,
      itemStyle: createRandomItemStyle()
    }, {
      name: "Point Break",
      value: 265,
      itemStyle: createRandomItemStyle()
    }]
  }]
};

var WordCloudChart = _react2.default.createClass({
  displayName: 'WordCloudChart',
  componentDidMount: function componentDidMount() {
    var mychart = _echarts2.default.init(this.refs.chart);
    mychart.setOption(charCloudOption);

    setTimeout(function () {
      System.import('demo1/main');
    }, 2000);
  },
  render: function render() {
    return _react2.default.createElement('div', { ref: 'chart', style: { width: '80%', height: window.innerHeight - 130 + 'px' } });
  }
});

exports.default = WordCloudChart;
module.exports = exports['default'];