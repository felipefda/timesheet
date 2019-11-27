package com.phelps.timesheet.api

import com.phelps.timesheet.business.project.Project
import com.phelps.timesheet.business.project.ProjectService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/project")
@CrossOrigin(origins = ["*"])
class ProjectResource {
    @Autowired
    lateinit var service : ProjectService

    @GetMapping("")
    fun list() : List<Project>{
        return service.list()
    }

    @PostMapping("")
    fun save(@RequestBody project : Project){
        service.create(project)
    }

    @PutMapping("/{id}")
    fun update(@PathVariable id : Long, @RequestBody project : Project) : Project{
        return service.update(id,project)
    }

    @PutMapping("/changeStatus/{id}")
    fun changeStatus(@PathVariable id : Long) {
         service.changeStatus(id)
    }

    @DeleteMapping("/{id}")
    fun delete(@PathVariable id : Long) {
        service.delete(id)
    }

}