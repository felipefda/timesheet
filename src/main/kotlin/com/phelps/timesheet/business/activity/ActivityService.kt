package com.phelps.timesheet.business.activity

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface ActivityService{
    fun create(activity: Activity)
    fun list() : List<Activity>
    fun delete(id : Long)
}

@Service
class ActicityServiceImpl : ActivityService {
    @Autowired
    lateinit var repository : ActivityRepository

    override fun create(activity: Activity) {
        this.repository.create(activity)
    }

    override fun list(): List<Activity> {
        return this.repository.list()
    }

    override fun delete(id: Long) {
        try{
            this.repository.delete(id)
        }catch (e : Exception){

        }

    }

}