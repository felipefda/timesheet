package com.phelps.timesheet.business.activity

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.jdbc.core.PreparedStatementCreator
import org.springframework.jdbc.core.PreparedStatementSetter
import org.springframework.jdbc.core.simple.SimpleJdbcInsert
import org.springframework.jdbc.datasource.DataSourceUtils
import org.springframework.stereotype.Repository
import java.sql.Connection
import java.sql.PreparedStatement
import java.sql.ResultSet
import javax.annotation.Resource
import javax.sql.DataSource


interface ActivityRepository {
    fun create(activity : Activity)
    fun update(id: Long, activity : Activity)
    fun list() : List<Activity>
    fun delete(id : Long)
}

@Repository
class ActivityRepositoryImpl(@Autowired var jdbcTemplate: JdbcTemplate) : ActivityRepository {
    @Resource(name = "dataSource")
    lateinit var dataSource : DataSource;

    val mapper = { rs: ResultSet, _: Int ->
        Activity(
            rs.getLong("ID"),
            rs.getLong("PROJECT_ID"),
            rs.getString("PROJECT_NAME"),
            rs.getString("DESCRIPTION"),
            rs.getString("DATEW"),
            rs.getString("START_TIME"),
            rs.getString("END_TIME"),
            rs.getString("TYPE")
        )
    }



    override fun create(activity: Activity)  {
        //We can use SimpleJdbcInsert to insert a value into our table
        //The becomes super concise when combined with Kotlins apply and mapOf functions
        SimpleJdbcInsert(jdbcTemplate).withTableName("ACTIVITY").apply {
            setGeneratedKeyName("id")
            execute(
                mapOf("ID" to activity.id,
                    "PROJECT_ID" to activity.projectId,
                    "DESCRIPTION" to activity.description,
                    "DATEW" to activity.datew,
                    "START_TIME" to activity.startTime,
                    "END_TIME" to activity.endTime,
                    "TYPE" to activity.type.toString()
                )
            )
        }
    }

    override fun update(id: Long, activity: Activity) {

        this.jdbcTemplate.update("UPDATE activity SET project_id = ?, type = ?, datew = ?, " +
                "start_time = ?, end_time = ?, description = ? WHERE id = ?",
            activity.projectId,
            activity.type.toString(),
            activity.datew,
            activity.startTime,
            activity.endTime,
            activity.description,
            id
        );

    }

    override fun list(): List<Activity> = jdbcTemplate.query("SELECT ACTIVITY.ID AS ID,PROJECT_ID,P.NAME AS PROJECT_NAME,DESCRIPTION,DATEW,START_TIME,END_TIME,TYPE FROM ACTIVITY INNER JOIN PROJECT P ON P.ID = PROJECT_ID ORDER BY DATEW DESC, START_TIME DESC"
    ) { rs: ResultSet, _: Int ->
        Activity(rs.getLong("ID"), rs.getLong("PROJECT_ID"), rs.getString("PROJECT_NAME"), rs.getString("DESCRIPTION"),rs.getString("DATEW"),rs.getString("START_TIME"),rs.getString("END_TIME"),rs.getString("TYPE"))
    }

    override fun delete(id: Long) {
        jdbcTemplate.update("DELETE FROM ACTIVITY WHERE ID = ? ",id)
    }
}