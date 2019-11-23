package com.phelps.timesheet.business.project

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

interface ProjectService{
    fun create(project : Project) : Project
    fun list() : List<Project>
    fun update(id : Long, project : Project) : Project
    fun disable(id : Long)
    fun enable(id : Long)
}

@Service
class ProjectServiceImpl : ProjectService {
    @Autowired
    lateinit var repository : ProjectRepository

    override fun create(project: Project): Project {
        return this.repository.create(project)
    }

    override fun list(): List<Project> {
        return this.repository.list()
    }

    override fun update(id: Long, project: Project): Project {
        return this.repository.update(id,project)
    }

    override fun disable(id: Long) {
        this.repository.disable(id)
    }

    override fun enable(id: Long) {
        this.repository.enable(id)
    }
}