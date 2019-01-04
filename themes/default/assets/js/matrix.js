/** Original Matrix code by Ebram Marzouk. https://codepen.io/P3R0/pen/MwgoKv */

var Matrix = {
  ctx: {},
  columns: 0,
  font_size: 10,
  drops: [],
  c: {},
  chinese: "",
  refreshIntervalId: {},

  init: function() {
    this.c = document.createElement('canvas');
    this.c.style.position = 'absolute';
    this.c.style.left="0px";
    this.c.style.top="0px";
    this.c.style.zIndex="100";
    this.c.style.width="100%";
    this.c.style.height="100%";
    this.c.width=this.c.offsetWidth;
    this.c.height=this.c.offsetHeight;
    this.c.id = "c";

    this.ctx = this.c.getContext("2d");

    //making the canvas full screen
    this.c.height = window.innerHeight;
    this.c.width = window.innerWidth;

    //chinese characters - taken from the unicode charset
    this.chinese = "victormateevitsi";
    //converting the string into an array of single characters
    this.chinese = this.chinese.split("");

    this.columns = this.c.width/this.font_size; //number of columns for the rain
    //an array of drops - one per column
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)

    // Randomise drop height
    for(var x = 0; x < this.columns; x++)
      this.drops[x] = Math.floor(Math.random()*this.c.height);
  },

  //drawing the characters
  draw: function(self) {
  	//Black BG for the canvas
  	//translucent BG to show trail
  	self.ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  	self.ctx.fillRect(0, 0, self.c.width, self.c.height);

  	self.ctx.fillStyle = "#0F0"; //green text
  	self.ctx.font = self.font_size + "px arial";


  	//looping over drops
  	for(var i = 0; i < self.drops.length; i++)
  	{
  		//a random chinese character to print
  		var text = self.chinese[Math.floor(Math.random()*self.chinese.length)];
  		//x = i*font_size, y = value of drops[i]*font_size
  		self.ctx.fillText(text, i*self.font_size, self.drops[i]*self.font_size);

  		//sending the drop back to the top randomly after it has crossed the screen
  		//adding a randomness to the reset to make the drops scattered on the Y axis
  		if(self.drops[i]*self.font_size > self.c.height && Math.random() > 0.975)
  			self.drops[i] = 0;

  		//incrementing Y coordinate
  		self.drops[i]++;
  	}
  },

  startAnimation: function() {
    document.body.appendChild(this.c);
    this.refreshIntervalId = setInterval(this.draw, 33, this);
  },

  stopAnimation: function() {
    clearInterval(this.refreshIntervalId);
    this.c.remove();
  }

}
