const obj = {
    getSetGen : function(){
        for(let property in this){
            if (typeof this[property] === "function") continue;
            const propName = property.charAt(0).toUpperCase() + property.slice(1);
            this[`set${propName}`] = function(val){
                this[property] = val;
            },
            this[`get${propName}`] = function(){
                return this[property];
            }
        }
    }
}

const user = {
    name : "abdelrhman khaled mohamed",
    age : 23,
}

obj.getSetGen.apply(user);

console.log(user);