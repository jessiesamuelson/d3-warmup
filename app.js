class D3APP {
  constructor(d, h, w) {
    this.h = h,
    this.w = w;
    this.dur = 50;
    this.count = 1;
    this.pad = 1;
    this.data = this.genData();
    this.init();
    this.setScales();
    // this.render();
    this.update();
    this.interval = setInterval(() => {
      this.update();
    }, 1000)
  }

  update() {
    let data = this.shiftData();
    let bars = d3.select('svg').selectAll('rect').data(data);
    // ENTER:
    let enteredBars = bars.enter();
    enteredBars.append('rect')
    .attr('x', (d, i) => {
      return i * (this.w / this.data.length);
    })
    .attr('y', (d, i) => {
      return this.h - this.yScale(d);
    })
    .attr('width', (this.w / this.data.length) - this.pad)
    .attr('height', (d, i) => {
      return this.yScale(d);
    })
    .attr('fill', (d, i) => {
      return this.colorScale(d);
    });
    // EXIT:
    bars.exit().remove();

    bars
    .transition().duration(400)
      .attr('x', (d, i) => {
        return i * (this.w / this.data.length);
      })
      .attr('y', (d, i) => {
        return this.h - this.yScale(d);
      })
      .attr('width', (this.w / this.data.length) - this.pad)
      .attr('height', (d, i) => {
        return this.yScale(d);
      })
      .attr('fill', (d, i) => {
        return this.colorScale(d);
      });
  }

  setScales() {
    this.yScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d)])
      .range([0, this.h]);
    this.colorScale = d3.scaleLinear()
      .domain([0, d3.max(this.data, d => d)])
      .range(['red', 'blue']);
    return this;
  }

  drawBars() {
    this.bars =
      this.svg.selectAll('rect')
      .data(this.data)
    let enteredBars = this.bars.enter();
    // console.log('enteredBars ~~>', enteredBars);
    enteredBars
      .append('rect')
      .attr('x', (d, i) => {
        return i * (this.w / this.data.length);
      })
      .attr('y', (d, i) => {
        return this.h - this.yScale(d);
      })
      .attr('width', (this.w / this.data.length) - this.pad)
      .attr('height', (d, i) => {
        return this.yScale(d);
      })
      .attr('fill', (d, i) => {
        return this.colorScale(d);
      });
    return this;
  }

  drawLabels() {
    this.labels =
      this.svg.selectAll('text')
      .data(this.data)
      .enter()
      .append('text')
      .text((d,i) => {
        return d;
      })
      .attr('x', (d, i) => {
        return i * (this.w / this.data.length) + 5;
      })
      .attr('y', (d, i) => {
        return this.h - this.yScale(d) + 12;
      })
      .attr('font-size', 10)
      .attr('fill', '#ffffff');
    return this;
  }

  genData() {
    let data = [];
    for (var i = 0; i < this.count; i++) {
      data.push(this.randomInt())
    }
    return data;
  }

  randomInt() {
    return Math.round(Math.random() * 100);
  }

  shiftData() {
    this.data.push(this.randomInt());
    return this.data;
  }

  init() {
    this.svg = d3.select('#root')
      .append('svg')
      .attr('height', this.h)
      .attr('width', this.w);
  }

  render() {
    this
      .setScales()
      .drawBars()
      .drawLabels()
  }

}

module.exports = D3APP;
