class D3APP {
  constructor(d, h, w) {
    this.d = d;
    this.h = h,
    this.w = w;
    this.dur = 40;
    this.count = 100;
    this.pad = 1;
    this.data = this.genData();
    this.init();
    this.setScales();
    this.update();
    this.interval = setInterval(() => {
      this.update();
    }, this.dur)
  }

  update() {
    let data = this.shiftData();
    let bars = d3.select('svg').selectAll('rect').data(data);
    // ENTER:
    bars.enter().append('rect')
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
    .transition().duration(this.dur)
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
      .range(['black', 'white']);
    return this;
  }

  drawBars() {
    this.bars =
      this.svg.selectAll('rect')
      .data(this.data)
    let enteredBars = this.bars.enter();
    let removedBars = this.bars.exit();
    removedBars.remove();
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
    this.bars.exit().remove();
    console.log('this.data[0] ~~>', this.data[0]);
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
      data.push(i)
    }
    return data;
  }

  randomInt(prev) {
    return Math.round(Math.random() * 100);
  }

  shiftData() {
    let removed = this.data.shift();
    if (removed + 5 > 100) removed = 0;
    this.data.push(removed + 5);
    return this.data;
  }

  init() {
    this.svg = d3.select('#root')
      .append('svg')
      .attr('height', this.h)
      .attr('width', this.w);
  }

  render() {
    // this
    //   .setScales()
    //   .drawBars()
    //   .drawLabels()
  }

}

module.exports = D3APP;
