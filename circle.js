class D3Circle {
  constructor(opts) {
    console.log('constructor');
    this.h = opts.height,
    this.w = opts.width;
    this.data = this.genData();
    this.init();
    this.render();
    this.bindClick()
  }

  init() {
    console.log('init');
    // Create SVG element
    console.log('d3 ~~>', d3);
    this.svg = d3.select('#circle')
      .append('svg')
      .attr('width', this.w)
      .attr('height', this.h);
  }

  render() {
    console.log('render');
    console.log(d3.max(this.data, (d) => d[1] ));
    this.svg.selectAll('circle')
     .data(this.data)
     .enter()
     .append('circle')
     .attr('cx', (d) => {
       return d[0];
     })
     .attr('cy', (d) => {
        return (this.h - d[1]);
     })
     .attr('r', (d) => {
       if (d3.max(this.data, (d) => d[1] ) === d[1]) {
         return 10
       }
       else {
         return 5
       }
     })
    //  .on('click', (d,i) => {
    //    console.log('click');
    //    d3.event.stopPropogation()
    //    console.log('d[1] ~~>',  d[1]);
    //  })
  }

  bindClick() {
    console.log('in bind');
    console.log('something ~~>', this.svg.selectAll('circle'));
    this.svg.selectAll('circle')
    .on('click', (d) => {
      console.log('d', d);
    })
  }

  genData() {
    console.log('genData');
    let data = [];
    for (let i = 0; i < 20; i++) {
      if (i === 0) {
        data.push([(i * 45) + 20, this.rand(100)] );
      }
      else {
        if (this.rand(2) % 2) {
          data.push([(i * 45) + 20, data[i-1][1] + this.rand(15)])
        }
        else {
          data.push([(i * 45) + 20, data[i-1][1] - this.rand(5)])
        }
      }
    }
    console.log('data ~~>', data);
    return data;
  }

  rand(num) {
    return Math.floor(Math.random() * num);
  }


}

window.D3Circle = D3Circle;
module.exports = D3Circle;
