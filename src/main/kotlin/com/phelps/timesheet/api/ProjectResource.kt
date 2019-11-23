package com.phelps.timesheet.api

import com.phelps.timesheet.business.project.Project
import com.phelps.timesheet.business.project.ProjectService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/project")
class ProjectResource {
    @Autowired
    lateinit var service : ProjectService

    @GetMapping("/")
    fun list() : List<Project>{
        return service.list()
    }
}