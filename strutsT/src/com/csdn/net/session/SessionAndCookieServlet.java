package com.csdn.net.session;

import java.io.IOException;

import javax.servlet.Servlet;
import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SessionAndCookieServlet implements Servlet {
	private HttpServletRequest request;
	private HttpServletResponse response;

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		deleteCookie(getCookie(request,"cookie19"));
	}

	@Override
	public ServletConfig getServletConfig() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String getServletInfo() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void init(ServletConfig arg0) throws ServletException {
		// TODO Auto-generated method stub

	}

	@Override
	public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
		request = (HttpServletRequest) servletRequest;
		response = (HttpServletResponse) servletResponse;
		for(int i = 0 ; i <=20;i++){
			addCookie(response,"cookieName"+i,"cokkieValue"+i,3600);
		}
		
	}
	public  void addCookie(HttpServletResponse response,String name,String value,Integer msxAge){
		Cookie cookie  = new Cookie(name,value);
		if(msxAge>0)
        cookie.setMaxAge(3600);
		response.addCookie(cookie);
	}
	public  Cookie getCookie(HttpServletRequest request,String cookieName){
		 Cookie cookie = null;
		 Cookie[] cookies =  request.getCookies();
		 for(Cookie c : cookies){
			 if(c.getName().equals(cookieName)){
				 cookie = c;
			 }
		 }
		 return cookie;
	}
	public  Cookie[] getCookies(HttpServletRequest request,String cookieName){
		 
		 Cookie[] cookies =  request.getCookies();
		 for(Cookie c : cookies){
			 System.out.println(c.getName()+"================");
		 }
		 return cookies;
	}
	public  void deleteCookie(Cookie cookie){
		cookie.setMaxAge(0);
	}
}
