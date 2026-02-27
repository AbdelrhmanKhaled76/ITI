const LinkedList = {
    data: [],
    validate : function(newVal) {
        if (!('val' in newVal)) {
            throw new Error("Object must have property 'val'");
        }
        if (typeof newVal.val !== 'number') {
            throw new TypeError("Value must be numeric");
        }
        for(let el of this.data){
            if(el.val === newVal.val)
                throw new Error("value must be unique");
        }
    },
    EnqueueVal : function(newVal) {
        this.validate(newVal);
        if (this.data.length === 0) {
            this.data.push(newVal);
            return;
        }
        const lastValue = this.data[this.data.length - 1].val;
        if (newVal.val < lastValue) {
            throw new Error("value must be in ascending order");
        }
        this.data.push(newVal);
    },
    PushVal : function(newVal) {
        this.validate(newVal);
        this.data.push(newVal);
    },
    InsertVal : function(index, newVal) {
        this.validate(newVal);
        if (index < 0 || index > this.data.length) {
            throw new RangeError("invalid index");
        }
        this.data.splice(index, 0, newVal);
    },
    PopVal : function(){
        if(this.data.length !== 0){
            this.data.pop();
            return;
        }
        throw new RangeError("the list is already empty !");
    },
    RemoveVal  : function(index, value) {
        if (index < 0 || index >= this.data.length) {
            throw new RangeError("Invalid index");
        }
        if (this.data[index].val !== value) {
            return "data not found";
        }
        this.data.splice(index, 1);
    },
    DequeueVal : function(){
        if(this.data.length !== 0){
            this.data.shift();
            return;
        }
        throw new RangeError("the list is already empty !");
    },
    DisplayContent : function(){
        let wholeOutput = ""
        for(let el of this.data){
            wholeOutput += el.val + ' ,'
        }
        console.log(wholeOutput.slice(0,-1));
    }
};




// examples 
LinkedList.EnqueueVal({ val: 1 });
LinkedList.EnqueueVal({ val: 3 });
LinkedList.EnqueueVal({ val: 5 });

// LinkedList.EnqueueVal({ val: 2 }); // value must follow the sequence

// LinkedList.EnqueueVal({ val: 3 }); // value must be unique

// LinkedList.EnqueueVal({ value: 10 }); // val is missing

LinkedList.PushVal({ val: 2 });

LinkedList.InsertVal(1, { val: 4 });



LinkedList.DisplayContent(); // 1 4 3 5 2

LinkedList.RemoveVal(1, 4); 

LinkedList.DisplayContent(); // 1 3 5 2

LinkedList.DequeueVal();

LinkedList.DisplayContent(); // 3 5 2