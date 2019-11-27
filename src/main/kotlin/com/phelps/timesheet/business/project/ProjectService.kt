package com.phelps.timesheet.business.project

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import java.lang.Exception

interface ProjectService{
    fun create(project : Project)
    fun getById(id: Long) : Project
    fun list() : List<Project>
    fun update(id : Long, project : Project) : Project
    fun changeStatus(id : Long)
    fun delete(id : Long)
}

@Service
class ProjectServiceImpl : ProjectService {
    @Autowired
    lateinit var repository : ProjectRepository

    override fun create(project: Project) {
        this.repository.create(project)
    }

    override fun list(): List<Project> {
        return this.repository.list()
    }

    override fun update(id: Long, project: Project): Project {
        return this.repository.update(id,project)
    }

    override fun changeStatus(id: Long) {
        val project : Project = this.getById(id)
        if(project.active) {
            this.repository.disable(id)
        } else {
            this.repository.enable(id)
        }
    }

    override fun delete(id: Long) {
        try{
            this.repository.delete(id)
        }catch (e : Exception){

        }

    }

    override fun getById(id: Long): Project {
        return this.repository.getById(id)
    }
}