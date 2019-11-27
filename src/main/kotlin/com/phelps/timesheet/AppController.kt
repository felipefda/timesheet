package com.phelps.timesheet

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class AppController {

    @GetMapping(value = ["/",""])
    fun list() : String{
        return "index.html"
    }
}