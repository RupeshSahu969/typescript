class Parent{
    name:string="";
    setName(name):void
    {
        return this.name=name
    }
}

class Child extends Parent{
    getName():string
    {
        return this.name
    }
}

let c1=new Child()
c1.setName("rony")
console.log(c1.getName())