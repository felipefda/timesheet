package com.phelps.timesheet.business.project

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Repository
import org.springframework.jdbc.core.JdbcTemplate
import java.sql.ResultSet


interface ProjectRepository {
    fun create(project : Project) : Project
    fun list() : List<Project>
    fun update(id : Long, project : Project) : Project
    fun disable(id : Long)
    fun enable(id : Long)
}

@Repository
class ProjectRepositoryImpl(@Autowired var jdbcTemplate: JdbcTemplate) : ProjectRepository {
    override fun create(project: Project): Project {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


    override fun list(): List<Project> = jdbcTemplate.query("SELECT ID,NAME,ACTIVE FROM project"
    ) { rs: ResultSet, _: Int ->
        Project(rs.getLong("ID"), rs.getString("NAME"), rs.getBoolean("active"))
    }

    override fun update(id: Long, project: Project): Project {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun disable(id: Long) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun enable(id: Long) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }
}