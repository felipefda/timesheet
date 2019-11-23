package com.phelps.timesheet

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication

@SpringBootApplication
class TimeSheetApp

fun main(args: Array<String>) {
    SpringApplication.run(TimeSheetApp::class.java, *args)
}