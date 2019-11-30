package com.phelps.timesheet.api

import com.phelps.timesheet.business.activity.Activity
import com.phelps.timesheet.business.activity.ActivityService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/activity")
@CrossOrigin(origins = ["*"])
class ActivityResource {
    @Autowired
    lateinit var service : ActivityService

    @GetMapping("")
    fun list() : List<Activity>{
        return service.list()
    }

    @PostMapping("")
    fun save(@RequestBody activity: Activity){
        service.create(activity)
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id : Long, @RequestBody activity: Activity){
        service.update(id,activity)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id : Long) {
        service.delete(id)
    }

}