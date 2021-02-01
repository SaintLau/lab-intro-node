class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => (a - b));
  }

  get(pos) {
      if (pos > this.length){
      throw new Error('OutOfBounds');
  } 
  return this.items[pos];
}

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.sort((a, b) => (a - b))[this.length - 1]; //-1 because a < b
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } 
       return this.items.sort((a, b) => (a - b))[0]; //0 is the lowest value 
    }
   
  sum() {
    if (this.items.length === 0){
      return 0;
    }


  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
