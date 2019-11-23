package com.phelps.timesheet.business.activity

enum class ActivityType{
    REGULAR,EXTRA;
}

data class Activity(val id : Long,
                    val projectId : Long,
                    val description : String,
                    val startTime : String,
                    val endTime : String,
                    val type : ActivityType,
                    val observation : String
                    ) {

}