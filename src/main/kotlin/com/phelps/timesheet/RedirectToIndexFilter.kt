package com.phelps.timesheet
import org.springframework.stereotype.Component
import javax.servlet.Filter;
import javax.servlet.FilterChain
import javax.servlet.ServletRequest
import javax.servlet.ServletResponse
import javax.servlet.http.HttpServletRequest

@Component
class RedirectToIndexFilter : Filter {

    @Override
    override fun doFilter(
        request : ServletRequest,
        response : ServletResponse,
        chain : FilterChain
    ){
        val req = request as HttpServletRequest
        val requestURI: String = req.getRequestURI()

        if(requestURI.startsWith("/api")) {
            chain.doFilter(request, response);
            return;
        }

        // all requests not api or static will be forwarded to index page.
        request.getRequestDispatcher("/").forward(request, response);


    }

}