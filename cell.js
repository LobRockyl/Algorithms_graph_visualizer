class Cell {
  constructor(label, x=-1, y=-1) {
    this.x = mouseX;
    this.y = mouseY;
    this.label = label;
    
    this.flags = {
      hover : false,
      dragging : false,
      show: false
    };
    
    this.radius = 25;
  }
  
  render() {
    this.render_circle();
    this.render_text();
  }
  
  render_text() {
    noStroke();
    fill(0);
    textSize(20);
    text(this.label, this.x - (textWidth(this.label) / 2), this.y + ((textAscent() + textDescent()) / 4));
  }
  
  render_circle() {
    stroke(0);
    strokeWeight(2);
    fill(255);
    if (this.flags.hover) {
      strokeWeight(3);
    }
    if (this.flags.dragging) {
      fill(100, 255, 255);
    }
    if (this.flags.show) {
      fill(255, 0, 0);
    }
    
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
  
  isInside(x, y) {
    const d = dist(this.x, this.y, x, y);
    return d <= this.radius;
  }
  
}