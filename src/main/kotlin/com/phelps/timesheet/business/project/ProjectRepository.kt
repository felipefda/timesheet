package com.phelps.timesheet.business.project

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.simple.SimpleJdbcInsert
import org.springframework.stereotype.Repository
import java.sql.ResultSet


interface ProjectRepository {
    fun create(project : Project)
    fun list() : List<Project>
    fun listActive() : List<Project>
    fun getById(id: Long) : Project
    fun update(id : Long, project : Project) : Project
    fun disable(id : Long)
    fun enable(id : Long)
    fun delete(id : Long)
}

@Repository
class ProjectRepositoryImpl(@Autowired var jdbcTemplate: JdbcTemplate) : ProjectRepository {
    val mapper = { rs: ResultSet, _: Int ->
        Project(rs.getLong("ID"), rs.getString("NAME"), rs.getBoolean("active"))
    }



    override fun create(project: Project)  {
        //We can use SimpleJdbcInsert to insert a value into our table
        //The becomes super concise when combined with Kotlins apply and mapOf functions
        SimpleJdbcInsert(jdbcTemplate).withTableName("project").apply {
            setGeneratedKeyName("id")
            execute(
                mapOf("id" to project.id,
                    "name" to project.name,
                    "active" to project.active))
        }
    }

    override fun list(): List<Project> = jdbcTemplate.query("SELECT ID,NAME,ACTIVE FROM project"
    ) { rs: ResultSet, _: Int ->
        Project(rs.getLong("ID"), rs.getString("NAME"), rs.getBoolean("active"))
    }

    override fun listActive(): List<Project> = jdbcTemplate.query("SELECT ID,NAME,ACTIVE FROM project WHERE active is true "
    ) { rs: ResultSet, _: Int ->
        Project(rs.getLong("ID"), rs.getString("NAME"), rs.getBoolean("active"))
    }

    override fun getById(id: Long): Project {
        return jdbcTemplate.queryForObject("SELECT ID,NAME,ACTIVE FROM project WHERE ID = ?", arrayOf<Any>(id), mapper);
    }

    override fun update(id: Long, project: Project): Project {
        jdbcTemplate.update("UPDATE project SET NAME = ? WHERE ID = ? ",project.name,id)
        return Project()
    }

    override fun disable(id: Long) {
        jdbcTemplate.update("UPDATE project SET active = false WHERE ID = ? ",id)
    }

    override fun enable(id: Long) {
        jdbcTemplate.update("UPDATE project SET active = true WHERE ID = ? ",id)
    }

    override fun delete(id: Long) {
        jdbcTemplate.update("DELETE FROM project WHERE ID = ? ",id)
    }
}