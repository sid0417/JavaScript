class Area{
      constructor(height,width){
            this.width = width
            this.height=height
      }

      set width(newWidth){
      if(newWidth>0){
            this._width = newWidth;
      }
      else{
            console.log("Width must be a Positive Number")
      }
      }
      set height(newHeight){
            if(newHeight > 0){
                  this._height = newHeight;
            }
            else{
                  console.log("Height must be a Positive Number")
            }
      }

      get width(){
            return this._width;
      }
      get height(){
            return this._height;
      }
      get area(){
            return `${this._height*this._width} cm^2`
      }

}
//without getter setter wrong value also gets executed
//onst area = new Area("pizzzzaaa",-1000000)
//console.log(area.width)

//try with getter setter

const area1 = new Area(100,11);
console.log(area1.width)
console.log(area1.height)
console.log(area1.area)