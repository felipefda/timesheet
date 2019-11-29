package com.phelps.timesheet.business.activity

enum class ActivityType{
    REGULAR,EXTRA;
}

class Activity{
    var id : Long
    var projectId : Long
    var projectName : String
    var description : String
    var datew : String
    var startTime : String
    var endTime : String
    var type : ActivityType

    constructor(){
        this.id = 0
        this.projectId = 0
        this.projectName = ""
        this.description = ""
        this.datew = ""
        this.startTime = ""
        this.endTime = ""
        this.type = ActivityType.REGULAR
    }

    constructor(
        id: Long,
        projectId: Long,
        projectName: String,
        description: String,
        datew: String,
        startTime: String,
        endTime: String,
        type: String
    ) {
        this.id = id
        this.projectId = projectId
        this.projectName = projectName
        this.description = description
        this.datew = datew
        this.startTime = startTime
        this.endTime = endTime
        this.type = ActivityType.valueOf(type)
    }


}