package com.phelps.timesheet.business.project

class Project {
    var id : Long
    var name : String
    var active : Boolean

    constructor(){
        this.id = 0L
        this.name = ""
        this.active = true
    }


    constructor(id:Long, name:String, active:Boolean){
        this.id = id
        this.name = name
        this.active = active
    }

    constructor(name:String){
        this.id = 0;
        this.name = name;
        this.active = true;
    }

}