import React from 'react'

import footerBg from '../assets/images/footer_bg.png'
import wolfLogo from '../assets/svg/wolf_logo_footer.svg'

const Footer = () => {

  var canvas;
var ctx;
var config = {
  sparkFreq: 1,
  meanSparkSize: 0.012,
  meanSparkLife: 200,
  meanSparkVelocity: [ 2, 6 ],
  sparkSizeVariation: 5,
  sparkBlink: 10, // Lower is more blink
  floorHeight: 0.15
};

var resize = window.resize = function() {
  canvas.height = document.body.offsetHeight;
  canvas.width = document.body.offsetWidth;
};

window.onload = function() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  resize();

  config.meanSparkSize = canvas.width*config.meanSparkSize;

  var fire = new Fire(ctx, canvas, canvas.height-canvas.height*config.floorHeight, config);

  var loop = function() {
    window.requestAnimFrame(loop);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fire.update();
    for (var i=0; i<config.sparkFreq; i++) {
      fire.spark(Math.random()*canvas.width);
    }
  };

  window.requestAnimFrame = function(){
    return window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(a) { window.setTimeout(a,1E3/60); };
  }();

  loop();
};

//////////////////////////////////////////////////
var Fire = function Fire(ctx, canvas, y, config) {
  this.ctx = ctx;
  this.canvas = canvas;
  this.y = y;
  this.r = 255;
  this.config = config;
  this.sparks = [ ];
};
Fire.prototype.spark = function(x) {
  this.sparks.push(new Spark(this.ctx, x, this.y, this.config));
};
Fire.prototype.updateColor = function() {
  this.r += (Math.random()-0.5)*10;
  this.r = Math.round(Math.min(80, Math.max(60, this.r)));
};
Fire.prototype.update = function() {
  this.updateColor();
  this.ctx.beginPath();
  this.ctx.rect(0, this.y, this.canvas.width, this.config.meanSparkSize);
  this.ctx.fillStyle = 'rgba('+this.r+', 0, 0, 1)';
  this.ctx.fill();

  for (var i=0; i<this.sparks.length; i++) {
    if (this.sparks[i].update()) { // Spark died
      this.sparks.splice(i, 1);
    }
  }
};

///////////////////////////////////////////////
var Spark = function Spark(ctx, x, y, config) {
  this.ctx = ctx;
  this.pos = [ x, y ];
  this.size = config.meanSparkSize+(Math.random()-0.5)*config.sparkSizeVariation;
  this.v = [
    config.meanSparkVelocity[0]*(Math.random()-0.5),
    -1*config.meanSparkVelocity[1]*Math.random()
  ];
  this.c = [
    Math.floor(Math.random()*155)+100,
    Math.floor(Math.random()*80),
    0
  ];
  this.life = this.lifeOrig = Math.floor(config.meanSparkLife*Math.random());
  this.config = config;
};
Spark.prototype.move = function() {
  for (var i=0; i<2; i++) {
    this.pos[i] += this.v[i]*(1-this.life/this.lifeOrig);
  }
};
Spark.prototype.getAlpha = function() {
  return Math.sqrt(this.life/this.lifeOrig)+((Math.random()-0.5)/this.config.sparkBlink);
};
Spark.prototype.update = function() {
  this.move();
  if (!(this.life--)) { return true; }
  this.ctx.beginPath();
  this.ctx.rect(this.pos[0], this.pos[1], this.size, this.size);
  this.ctx.fillStyle = 'rgba('+this.c[0]+', '+this.c[1]+', '+222+', '+this.getAlpha()+')';
  this.ctx.fill();
};


  return (
    <div className='relative'>
      <div className='size-full'>
        <img src={footerBg} className='h-[499px] min-w-[600px] w-full bg-cover bg-center' />
      </div>
      <div className='absolute top-0 left-0 size-full flex flex-col items-center z-30 p-10 pb-5'>
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full'>
          <div className='translate-y-36 md:translate-y-14 flex flex-col justify-center md:justify-start items-center md:items-start'>
            <h2 data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className='text-[#16237F] font-gridular text-[24px] md:text-[48px] leading-[26px] md:leading-[52px] max-w-[627px] uppercase text-center md:text-start'>become a part of wpl to earn rewards</h2>
            <button data-aos="fade-up" data-aos-delay="1100" data-aos-duration="700" className='bg-[#16237F] text-white font-bienvenue text-[20px] md:text-[24px] px-6 py-1 flex justify-center items-center mt-4'>Apply now</button>
          </div>
          <div className='flex justify-end items-end text-center md:text-start gap-10 h-full max-w-fit mb-10 -translate-y-2'>
            <div className='flex flex-col gap-4'>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Contact us</p>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Terms and conditions</p>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Privacy Policy</p>
            </div>
            <div className='hidden md:flex flex-col justify-center md:justify-start items-center md:items-start gap-4 h-[68px] '>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>About</p>
              <p className='text-[11px] font-normal leading-[12px] font-manrope text-[#16237F] cursor-pointer uppercase'>Brand kit</p>
            </div>
          </div>
        </div>

        <div className='border-b border-[#16237F] w-full'/>
        <div className='flex justify-center md:justify-between items-center w-full mt-5 gap-2 md:gap-0'>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase font-manrope'>Copyright @ Wpl</p>
          <img src={wolfLogo} alt='wolf' className='w-[18px] h-[21px] md:-translate-x-4'/>
          <p className='text-[#16237F] text-[12px] md:text-[16px] uppercase font-manrope hidden md:block'>Lorem Ipsum</p>
        </div>
      </div>
    </div>
  )
}

export default Footer